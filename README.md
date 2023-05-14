# MOEスマートコントラクト

- Name: MOE Token
- Symbol: MOE
- Decimals: 18
- Initial supply: 1,000,000,000,000 MOE
- Contract address: 0xcBa78d126f0B1FeDa0c538bcAf4C852A7a171099
- Hardhatを使用します。
- Proxyを使用してアップグレードすることができます。
- SOLC version: 0.8.19

## Dependencies

```bash
npm install
cp .env.sample. env
vi .env
```

## Deploy

```bssh
npx hardhat run --network {ethereum|sepolia} "scripts/deploy.js"
```

## Verify

```bash
npx hardhat verify --constructor-args arguments.js --contract "contracts/MoeErc20.sol:MoeErc20" --network {ethereum|sepolia} {CONTRACT_ADDRESS}
```

