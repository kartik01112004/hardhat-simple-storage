# Basic things
hardhat.config is the heart, the brain like hardhat looks for this file first<br>
scripts are for your local environment and tasks are for plugins ~patric <br>
it doesnt matter what you choe both will work just it will be arranged better thsi way!
<br>tests are very important and you need to write good tests1<br>to know which line of your code is not tested use `solidity-coverage`
<br> multiple network will need differnt env variables dont forget to use `.env` file for safer API keys atlest to protect them from being getting uploaded on open source platforms.


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


run:- any of these comands or any other network you like!<br>
`yarn hardhat console --network localhost`<br>
`yarn hardhat console --network sepolia`<br>
`yarn hardhat console --network hardhat`<br>
this allows us to run any command or write any code of our wish without needing to import anything because all of hardhat is alead imported in this console with the comand <br>

Eg:-<br>
```
const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
const simpleStorage = await SimpleStorageFactory.deploy();
```
<h3>and run transactions ..like</h3>
`await simpleStorage.retrieve();`
<br>

# runing tests

this is first line of defence!<br>
We can reffer to [website](rekt.news) for understanding what hacks were done and what we lacked to learn for ourselfs and make good tests.<br>

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
<br>
## Using `chai`<br>
we can use chai to access `assert,expext` to check values <br>
to run a perticular test we can use `yarn hardhat test --grep ______` and in __ fill a keyword from the phrase we have written like _store_ 
<br> so the comand will be `yarn hardhat test --grep store` to run tests that contain store in thee messege<br>

another way to run specific task is to add only after it Eg:- `it.only(){}`
