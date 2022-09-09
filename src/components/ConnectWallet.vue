<template>
    <div>
        <b-button variant="success" @click="connectWallet()">Button</b-button>
    </div>
</template>

<script>
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

export default {
    name: "ConnectWallet",
    props: {
        msg: String,
    },
    methods: {
        async connectWallet() {
            const providerOptions = {
                walletconnect: {
                    package: WalletConnectProvider,
                    options: {
                        infuraId: "c4335580538b43eaaff51310979903c8",
                    },
                },
            };

            const web3Modal = new Web3Modal({
                network: "mainnet",
                cacheProvider: true,
                providerOptions,
            });

            const provider = await web3Modal.connect();
            const web3 = new Web3(provider);
            const accounts = await web3.eth.getAccounts();
            console.log(accounts);
        },
    },
};
</script>