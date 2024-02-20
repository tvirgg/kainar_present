pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ArtTokenTest is ERC20, Ownable {
    uint256 public maxSupply = 1000000 * 10 ** decimals();

    constructor(address initialOwner, address[] memory initialAddresses) ERC20("ArtTokenTest", "ART") Ownable(initialOwner) {//Функция может вызвана только владельцем контракта
        require(initialAddresses.length > 0, "No addresses provided");
        uint256 initialMintAmount = 100000 * 10 ** decimals(); //При деплое контракта должен происходить mint 100k токенов на все переданные в конструктор адреса (должен быть передан массив из нескольких адресов)
        require(totalSupply() + initialMintAmount * initialAddresses.length <= maxSupply, "Initial mint exceeds max supply");

        for (uint i = 0; i < initialAddresses.length; i++) {
            _mint(initialAddresses[i], initialMintAmount);
        }
    }

    // функция mint :)
    function mint(address to, uint256 amount) public onlyOwner { // 1. Адрес на которые необходимо заминтить токены 2. Количество токенов, которые должны быть заминчены
        require(totalSupply() + amount <= maxSupply, "Max supply exceeded"); //Суммарно количество всех токенов (total supply) не должно превышать лимит, указанный при деплое контракта
        _mint(to, amount);
    }
}
