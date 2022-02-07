const hre = require("hardhat");

const DEPLOYED_CONTRACT = "0xE4ff1bf5634642671B9df9336434bd90Fba86fa1";

async function main() {
  console.log("Verifying", DEPLOYED_CONTRACT);
  const addr = DEPLOYED_CONTRACT;
  const args = ["Hello, Hardhat!"];
  await hre.run("verify:verify", { address: addr, constructorArguments: args });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
