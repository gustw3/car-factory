
const hre = require("hardhat");

const CONTRACT_ADRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

async function main() {

  const CarFactory = await hre.ethers.getContractAt("CarFactory", CONTRACT_ADRESS);

  const tx = await CarFactory.create("0x10c446dd6C3dff61A7B4FBD6103Da529Bb23eEe2", "Alpha Romeo");

  await tx.wait();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
