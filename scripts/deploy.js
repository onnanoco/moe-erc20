require('dotenv').config();
const hre = require('hardhat');

async function main() {
    const MoeErc20 = await hre.ethers.getContractFactory('MoeErc20');
    const moeToken = await MoeErc20.deploy(process.env.TOKEN_NAME, process.env.TOKEN_SYMBOL, process.env.TOKEN_INITIAL_SUPPLY, process.env.GENESIS_ADDRESS);

    await moeToken.deployed();

    console.log(`MOE contract has been deployed : ${moeToken.address}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })