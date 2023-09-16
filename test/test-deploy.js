const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

describe("SimpleStorage", function () {
    let SimpleStorageFactory
    let simpleStorage
    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await simpleStorageFactory.deploy()
    })

    it("shuld start with a favorite number of 0", async function () {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = 0
        //assert
        //expect
        assert.equal(currentValue.toString(), expectedValue)
    })
    it("should update when we call store", async function () {
        const expectedValue = "7"
        const transactionResponce = await simpleStorage.store(expectedValue)
        await transactionResponce.wait(1)

        const currentValue = await simpleStorage.retrieve()
        assert.equal(currentValue.toString(), expectedValue)
        //expect(currentValue.toString()).to.equal(expectedValue)
    })
    it("should update when we add a person", async function () {
        const person = "kartik"
        const faveN = 10
        const transactionResponce = await simpleStorage.addPerson(person, faveN)
        await transactionResponce.wait(5)
    })
})
