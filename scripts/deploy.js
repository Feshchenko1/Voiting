const hre = require("hardhat"); 
async function main() {
  const [deployer] = await hre.ethers.getSigners(); 
  console.log("Deploying contract with account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Voting = await hre.ethers.getContractFactory("Voting");
  const Voting_ = await Voting.deploy(["Mark", "Mike", "Henry", "Rock"], 90);

  await Voting_.deployed();
  console.log("Contract deployed at:", Voting_.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
