<template>
    <div>
        <div class="connect-wallet" @click="connectWallet()">连接钱包</div>
    </div>
</template>

<style scoped>
.connect-wallet {
    width: fit-content;
    height: 30px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #000;
    color: #fff;
    text-align: center;
    line-height: 30px;
    border-radius: 5px;
    cursor: pointer;
}
</style>

<script>
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

export default {
    name: "ConnectWallet",
    props: {
        msg: String,
    },
    data() {
        return {
            // account,
            web3: null,
            web3Modal: null
        }
    },
    created() {
        this.web3Modal = this.createWeb3Modal();
        
    },
    methods: {
        createWeb3Modal() {
            const providerOptions = {
                walletconnect: {
                    package: WalletConnectProvider,
                    options: {
                        infuraId: process.env.INFURA_ID,
                    },
                },
            };

            return new Web3Modal({
                network: "mainnet",
                cacheProvider: true,
                providerOptions,
            });
        },
        async connectWallet() {
            if (!this.web3Modal || !this.web3) {
                this.web3Modal = this.createWeb3Modal();
                const provider = await this.web3Modal.connect();
                this.web3 = new Web3(provider);
            }
            const accounts = await this.web3.eth.getAccounts();
            console.log(accounts);
        },
        async disconnectWallet() {
            if (!this.web3Modal || !this.web3) return;
            await this.web3Modal.clearCachedProvider();
            this.web3 = null;
            this.web3Modal = null;
        },
    },
};
</script>