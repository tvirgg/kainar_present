const { ethers } = require("hardhat");

async function main() {//деплой
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    const Token = await ethers.getContractFactory("ArtTokenTest");

    const walletAddresses = [// Адреса кошельков для минта
        '0x3caaaE1CB306467cb684083Ec67F523abc0CB442',
        '0x92025d9e74dCAaC27B7a8D456bF5408662184133',
        '0x7A4bb4d8326B8c0D06338Ee5A591312f5B44A560'
    ];

    const token = await Token.deploy(deployer.address, walletAddresses);
    console.log("Token address:", token.runner.address);
    console.log("Token Contract:", token.target);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
