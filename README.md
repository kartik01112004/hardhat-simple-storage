# Sample Hardhat Project

yarn hardhat run scripts/deploy.js --network hardhat<br>

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.<br>

Try running some of the following tasks:<br>

```shell<br>
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
yarn hardhat run scripts/deploy.js --network hardhat
# to run on a perticular network here hardhat!

yarn hardhat verify --network mainnet DEPLOYED_CONTRACT_ADDRESS "Constructor argument 1"
# to deploy a verified contract from the terminal

```
# The hardhat console


run:- anyof these comands or any other network you like!<br>
`yarn hardhat console --network localhost`<br>
`yarn hardhat console --network sepolia`<br>
`yarn hardhat console --network hardhat`<br>
this allows us to run any command or write any code of our wish without needing to import anything because all of hardhat is alead imported in this console with the comand <br>

Eg:-<br>
```
const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
const simpleStorage = await SimpleStorageFactory.deploy();
```
<h6>and run transactions ..like</h6>
```
await simpleStorage.retrieve();
```<br>

# runing tests

tis is first line of defence!<br>
We can reffer to [website](rekt.news) for understanding what hacks wee done and what lacked to learn for ourselfs and amke good tests.<br>

```
describe("SimpleStorage",function (){
  beforeEach()

  it()
  it()
  it()

  describe("Something",function (){
    beforeEach()

    it()
    it()        
    it()
  })
})
```
_these are nested describes_
