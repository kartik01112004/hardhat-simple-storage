const { ethers } = require("hardhat")

describe("SimpleStorage", function () {
    let SimpleStorageFactory
    let simpleStorage
    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await simpleStorageFactory.deploy()
    })

    it("shuld start with a favorait number of 0", async function () {
        const currentValue = await simpleStorage.retrieve()
    })
})
