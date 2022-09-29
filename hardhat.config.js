require("@nomicfoundation/hardhat-toolbox");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: "0.8.17",
    networks: {
      goerli: {
        url: "https://restless-magical-pond.ethereum-goerli.discover.quiknode.pro/0835360bb4dc22e1838cfb8bb1d9580f63c6e618/",
        accounts: ["1165418f39a4f1523ea2c6684525d53660afee233830d516327870516db89f4c"]
      },
    },
};