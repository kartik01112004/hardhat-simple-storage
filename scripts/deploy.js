//imports
const { ethers, run, network } = require("hardhat")

async function main() {
    const SimpleStorageFactory =
        await ethers.getContractFactory("SimpleStorage")
    console.log("Deploying contract...")
    const simpleStorage = await SimpleStorageFactory.deploy()
    // await simpleStorage.deployed()
    console.log(`Deployed conract to : ${simpleStorage.target}`)
    //hardhat gives RPC url and private key by itself
    if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
        console.log("Waiting for block txes...")
        await simpleStorage.deploymentTransaction().wait(6) //error
        await verify(simpleStorage.target, [])
    }

    const currentValue = await simpleStorage.retrieve()
    console.log(`Current value is ${currentValue}`)

    //updating currentVlue
    const transactionResponse = await simpleStorage.store(7)
    await transactionResponse.wait(1)
    const updatedValue = await simpleStorage.retrieve()
    console.log(`Updated value is ${updatedValue}`)
}

async function verify(contractAddress, args) {
    console.log("Verifying the contract....")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verfied")) {
            console.log("Already verified!")
        } else {
            console.log(e)
        }
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
