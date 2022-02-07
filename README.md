# Moonscan Verify

Greeter contract has been deployed to Moonbase (testnet) at: `0xE4ff1bf5634642671B9df9336434bd90Fba86fa1`

## Deploy

To deploy sample contract (Greeter):

```
export PK={YOUR_PRIVATE_KEY}
yarn
npx hardhat compile
npx hardhat run --network testnet script/deploy.js
```

## Verify

To verify contract (Greeter):

```
export MOONSCAN_API_KEY={YOUR_MOONSCAN_API_KEY}
npx hardhat run --network testnet script/verify.js
```

Used to get this Error:
```
(node:51535) UnhandledPromiseRejectionWarning: NomicLabsHardhatPluginError: Invalid API Key
    at verifyContract (project/node_modules/@nomiclabs/hardhat-etherscan/src/etherscan/EtherscanService.ts:68:11)
    at processTicksAndRejections (internal/process/task_queues.js:95:5)
```

But now it seems that we're getting a different issue:
```
Verifying 0xE4ff1bf5634642671B9df9336434bd90Fba86fa1
Nothing to compile
Compiling 1 file with 0.8.4
NomicLabsHardhatPluginError: Failed to send contract verification request.
Endpoint URL: https://api-moonbase.moonscan.io/api
Reason: The Etherscan API responded that the address 0xE4ff1bf5634642671B9df9336434bd90Fba86fa1 does not have bytecode.
This can happen if the contract was recently deployed and this fact hasn't propagated to the backend yet.
Try waiting for a minute before verifying your contract. If you are invoking this from a script,
try to wait for five confirmations of your contract deployment transaction before running the verification subtask.
    at verifyContract (project/moonscan-verify/node_modules/@nomiclabs/hardhat-etherscan/src/etherscan/EtherscanService.ts:56:11)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at attemptVerification (project/moonscan-verify/node_modules/@nomiclabs/hardhat-etherscan/src/index.ts:443:20)
    at SimpleTaskDefinition.action (project/moonscan-verify/node_modules/@nomiclabs/hardhat-etherscan/src/index.ts:741:48)
    at Environment._runTaskDefinition (project/moonscan-verify/node_modules/hardhat/src/internal/core/runtime-environment.ts:217:14)
    at Environment.run (project/moonscan-verify/node_modules/hardhat/src/internal/core/runtime-environment.ts:129:14)
    at SimpleTaskDefinition.verifySubtask [as action] (project/moonscan-verify/node_modules/@nomiclabs/hardhat-etherscan/src/index.ts:281:28)
    at Environment._runTaskDefinition (project/moonscan-verify/node_modules/hardhat/src/internal/core/runtime-environment.ts:217:14)
    at Environment.run (project/moonscan-verify/node_modules/hardhat/src/internal/core/runtime-environment.ts:129:14)
    at main (project/moonscan-verify/scripts/verify.js:9:3)

```