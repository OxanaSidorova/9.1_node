# Instruction for testing calculateBonus function

## Instruction about installation and tests running on Jest

### Prepare he package node.js and framework Jest

1. Check if the package node.js was install. Run the command node -v
2. Initialise the project: npm init and install it with the command nom install —save-dev jest
3. Editing package.json to run it from the command line

### Preparation and running tests
1. Create a function for testing 9.2 .js
2. Create a file with extension test.js = 9.2.test.js
3. Export testing function with command: module.export = calculateBonus
4.Import tests with the function: const calculateBonus = require(“./9.2”)
5. Create testing functions :
   - first test checks the condition “if sum >50” then bonus =50
   - second: if sum < 50, then bonus = sum
   - third: if sum <50, then bonus <50.
6. Run the test with command nom run test 




