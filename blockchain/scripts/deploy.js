async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const CryptoBank = await ethers.getContractFactory("CrptoBank");
  const cryptoBank = await CryptoBank.deploy();

  console.log("CryptoBank address:", cryptoBank.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });