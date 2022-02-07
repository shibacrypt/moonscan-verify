const hre = require("hardhat");

const DEPLOYED_CONTRACT = "0xE4ff1bf5634642671B9df9336434bd90Fba86fa1";

async function main() {
  const deployer = (await ethers.getSigners())[0];
  console.log(`Network: ${network.name}`);
  console.log(`Deployer: ${deployer.address}`);
  console.log(`Deployed Contract: ${DEPLOYED_CONTRACT}`);

  const greeter = await hre.ethers.getContractAt("Greeter", DEPLOYED_CONTRACT);
  const greet = await greeter.greet();

  console.log("Greeter response:", greet);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
