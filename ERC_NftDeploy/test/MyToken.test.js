const { expect } = require("chai");
const { ethers, deployments } = require("hardhat");

describe("ArtNFT", function () {
    let artNFT;
    let deployer;
    let addr1;
    let addr2;
    let addrs;

    beforeEach(async function () {
        const ArtNFT = await ethers.getContractFactory("ArtNFT");
        [deployer, addr1, addr2, ...addrs] = await ethers.getSigners();
        artNFT = await ArtNFT.deploy(deployer.address);
        await artNFT.waitForDeployment();
    });

    describe("Deployment", function () {
        // Verifies the contract's owner is correctly set upon deployment.
        it("Should set the right owner", async function () {
            expect(await artNFT.owner()).to.equal(deployer.address);
        });

        // Confirms that minting a new token increases the total supply as expected.
        it("Should mint a new token", async function () {
            await artNFT.mint(1, { value: ethers.parseEther("0.001") });
            expect(await artNFT.totalSupply()).to.equal(1);
        });
    });

    describe("Minting", function () {
        it("Should fail if mint more than 3 tokens", async function () {
            await expect(artNFT.connect(addr1).mint(4, { value: ethers.parseEther("0.004") })).to.be.revertedWith("Can mint between 1 and 3 tokens at a time.");
        });

        it("Should not allow to mint more than 6 tokens for a single address", async function () {
            for (let i = 0; i < 2; i++) {
                await artNFT.connect(addr1).mint(3, { value: ethers.parseEther("0.003") });
            }

            await expect(artNFT.connect(addr1).mint(1, { value: ethers.parseEther("0.001") })).to.be.revertedWith("Purchase would exceed max allowed per address.");
        });

        it("Should not exceed the max supply", async function () {
            it("Should not exceed the max supply", async function () {
                // Получаем максимальное предложение и текущее общее количество токенов как BigNumber
                console.log(artNFT);
                const maxSupply = await artNFT.MAX_SUPPLY();
                const initialSupply = await artNFT.totalSupply();
                const remainingMints = maxSupply.sub(initialSupply);
                const mintAmount = remainingMints.lt(ethers.BigNumber.from(MAX_PER_MINT)) ? remainingMints : ethers.BigNumber.from(MAX_PER_MINT);
                if (remainingMints.gt(0)) {
                    const numTransactions = remainingMints.div(mintAmount).toNumber() + (remainingMints.mod(mintAmount).gt(0) ? 1 : 0);

                    for (let i = 0; i < numTransactions; i++) {
                        const mintThisTransaction = (i === numTransactions - 1 && remainingMints.mod(mintAmount).gt(0)) ? remainingMints.mod(mintAmount) : mintAmount;
                        const valueToSend = MINT_PRICE.mul(mintThisTransaction);

                        // Выполняем майнинг
                        await artNFT.connect(addr1).mint(mintThisTransaction.toNumber(), { value: valueToSend });
                    }
                }
                await expect(artNFT.connect(addr2).mint(1, { value: ethers.parseEther("0.001") }))
                    .to.be.revertedWith("Purchase would exceed max supply of NFTs.");
            });

        });
    });
});
