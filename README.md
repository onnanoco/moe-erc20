# MOE Token(ERC20)

- Name: MOE Token
- Symbol: MOE
- Decimals: 18
- TYPE : ERC20
- Initial supply: 1,000,000,000,000 MOE
- Contract address: 0xcBa78d126f0B1FeDa0c538bcAf4C852A7a171099
- Testnet(Goerli) contract address : 0x2b1102952f98AeA0547373661765b427983d8592
- Hardhat
- SOLC version: 0.8.19

## Dependencies

```bash
npm install
cp .env.sample. env
vi .env
```

## Deploy

```bssh
npx hardhat run --network {ethereum||goerli} "scripts/deploy.js"
```

## Verify

```bash
npx hardhat verify --constructor-args arguments.js --contract "contracts/MoeErc20.sol:MoeErc20" --network {ethereum||goerli} {CONTRACT_ADDRESS}
```

