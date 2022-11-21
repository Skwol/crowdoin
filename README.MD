This is a code written for udemy Etherium course.

Crowdcoin is a kickstarter clone with etherium contracts used to represent each campaign. User creates campaign (etherium contract) and adds requests for spending money.
Request is something like - "like I want to buy battaries for my project from this provider (address). I will spend x.xx etherium for that". Campaign contributers should be able to approve such request. If 51% of approvers approved the request, campaign author can finalize request and send money to provider.

In order to create campaign user have to click create campaign button with minimum contribution value (wei).

In order to contribute and become an approver user have to select a campaign, write down amount of ether to contribute and hit the contribute button.

In order to run it you need to:

1. Compile solidity contract.
2. Deploy soliduty contracts.
3. Start the npm server.

Compile contract using:

```
NODE_OPTIONS=--openssl-legacy-provider node compile.js
```

Deploy contracts using:

```
NODE_OPTIONS=--openssl-legacy-provider PROVIDER_URL=url MNEMONIC="sadf sdfgs" node compile.js
```

PROVIDER_URL - try something like "https://sepolia.infura.io/v3/{api_key}. Infura is free, but you'll need an account
MNEMONIC - phrase created with metamask account.

Start the npm server with the:

```
FACTORY_ADDRESS=0xd341E6d69F70469e782f201aC377f9a8971Yd7m5 npm run dev
```

FACTORY_ADDRESS is an address printed out during contract deployments. Factory used in the app to allow users create campaign contracts.

Run contract tests:

```
npm run test
```
