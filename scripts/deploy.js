
const hre = require("hardhat");

async function main() {

  const CarFactory = await hre.ethers.getContractFactory("CarFactory");
  const carFactory = await CarFactory.deploy();

  await carFactory.deployed();

  console.log(
    `Contract deployed to ${carFactory.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
