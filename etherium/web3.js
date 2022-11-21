import Web3 from 'web3'

let web3;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    // we are inside browser with injected web3
    web3 = new Web3(window.ethereum);
} else {
    const provider = new Web3.providers.HttpProvider(
        'https://sepolia.infura.io/v3/60dfc82fd8f04357a21df1305d965f1e'
    );
    web3 = new Web3(provider);
}

export default web3;