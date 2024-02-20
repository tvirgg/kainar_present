// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

    /// @title A limited mintable ERC721 Token for Art NFTs with capped supply and mint price
    /// @dev Extends ERC721 Non-Fungible Token Standard basic implementation with a capped mintable functionality
    contract ArtNFT is ERC721Enumerable, Ownable, ReentrancyGuard {
    uint256 public constant MAX_SUPPLY = 100; // Maximum number of tokens that can be minted
    uint256 public constant MINT_PRICE = 0.001 ether; // Price for each token mint
    uint256 public constant MAX_PER_MINT = 3; // Max number of tokens that can be minted at once
    uint256 public constant MAX_PER_ADDRESS = 6; // Max number of tokens an address can hold
    string private _baseTokenURI; // Base URI for metadata

    /// @notice Constructor to create ArtNFT
    constructor(address initialOwner) ERC721("ArtNFtst", "ANFT") Ownable(initialOwner){
        setBaseURI("ipfs://QmaqymxZQBtmdWuxqcLd2aBfABz4yPSQBAiwdGX9vC3vyL");
    }

    /// @notice Mint new NFTs
    /// @param numTokens The number of tokens to mint
    /// @dev Ensures not to exceed max supply, max per mint, and max per address limits
    function mint(uint256 numTokens) public payable nonReentrant {
        require(numTokens > 0 && numTokens <= MAX_PER_MINT, "Can mint between 1 and 3 tokens at a time.");
        require(totalSupply() + numTokens <= MAX_SUPPLY, "Purchase would exceed max supply of NFTs.");
        require(MINT_PRICE * numTokens <= msg.value, "Ether value sent is not correct.");
        require(balanceOf(msg.sender) + numTokens <= MAX_PER_ADDRESS, "Purchase would exceed max allowed per address.");

        for (uint256 i = 0; i < numTokens; i++) {
            uint256 mintIndex = totalSupply() + 1;
            if (totalSupply() < MAX_SUPPLY) {
                _safeMint(msg.sender, mintIndex);
            }
        }
    }

    /// @dev Sets the base URI for computing {tokenURI}. If set, the resulting URI for each
    /// token will be the concatenation of the `baseURI` and the `tokenId`.
    function setBaseURI(string memory baseURI) public onlyOwner {
        _baseTokenURI = baseURI;
    }
    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(ownerOf(tokenId) != address(0), "ERC721Metadata: URI query for nonexistent token");
        return _baseTokenURI;
    }
    /// @dev Returns the base URI set for the contract. This base URI is used to construct
    /// the tokenURI for each token.
    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }

    /// @notice Withdraw contract balance to owner
    /// @dev Allows only the owner to withdraw
    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        require(payable(owner()).send(balance), "Failed to withdraw balance");
    }
}
