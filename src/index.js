const { stake } = require("./stakeSystem");
const { createBlock } = require("./blockchain");
const { addTransaction } = require("./transactions");

stake("Maciej", 100);
stake("Jakub", 50);
stake("Filip", 25);

addTransaction({ from: "Eve", to: "Jakub", amount: 7 });
addTransaction({ from: "Maciej", to: "Dave", amount: 3 });
addTransaction({ from: "Filip", to: "Eve", amount: 9 });

console.log("🚀 Start symulacji PoS\n");

setInterval(() => {
  createBlock();
}, 5000);
