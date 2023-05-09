import { ethers, upgrades } from 'hardhat';

// TO DO: Place the address of your proxy here!
const proxyAddress = '0x644c430157B4E8a11A48a032B3666Cfd636679d1';

async function main() {
  const VendingMachine = await ethers.getContractFactory('VendingMachineV3');
  const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachine);
  await upgraded.deployed();

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxyAddress
  );

  console.log("The current contract owner is: " + await upgraded.owner());
  console.log('Implementation contract address: ' + implementationAddress);
}

main();
