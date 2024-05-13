# MOE Token(ERC20)

- Name: MOE Token
- Symbol: MOE
- Decimals: 18
- Type: ERC20
- Initial supply: 1,000,000,000,000 MOE
- Contract address: 0xcBa78d126f0B1FeDa0c538bcAf4C852A7a171099
- Testnet(Sepolia) contract address: 0x2b1102952f98AeA0547373661765b427983d8592
- Hardhat
- SOLC version: 0.8.19

## Env.

```bash
npm install
cp .env.sample. env
vi .env
```

## Deploy

```bssh
npx hardhat run --network {ethereum||sepolia} "scripts/deploy.js"
```

## Verify

```bash
npx hardhat verify --constructor-args arguments.js --contract "contracts/MoeErc20.sol:MoeErc20" --network {ethereum||sepolia} {CONTRACT_ADDRESS}
```

