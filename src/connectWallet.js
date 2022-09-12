import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider,
        options: {
            infuraId: process.env.INFURA_ID,
        },
    },
};

const web3Modal = new Web3Modal({
    network: "mainnet",
    cacheProvider: true,
    providerOptions,
});

var web3;

async function connectWallet() {
    if (!web3) {
        const provider = await web3Modal.connect();
        web3 = new Web3(provider);
    }
    return await web3.eth.getAccounts();
}

async function disconnectWallet() {
    if (!this.web3) return;
    await web3Modal.clearCachedProvider();
    web3 = null;
}

export { web3, connectWallet, disconnectWallet };