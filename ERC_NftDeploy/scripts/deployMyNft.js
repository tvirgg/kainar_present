const { ethers } = require("hardhat");

async function main() {
    // Retrieve the first signer to use as the contract deployer.
    const [owner] = await ethers.getSigners();

    // Prepare the ArtNFT contract for deployment by compiling its source.
    const ArtNFT = await ethers.getContractFactory("ArtNFT");
    console.log("Deploying ArtNFT...");

    // Deploy the ArtNFT contract, passing the deployer's address as a constructor argument.
    const artNFT = await ArtNFT.deploy(owner.address);

    // Wait for the deployment transaction to complete.
    await artNFT.deployed();
    console.log("ArtNFT deployed to:", artNFT.target);
}

// Run the main function, handling success with a process exit code 0, or catch any errors, logging them and exiting with code 1.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
