const { stake } = require("./stakeSystem");
const { createBlock } = require("./blockchain");
const { addTransaction } = require("./transactions");
const { generateRandomTransaction } = require("./transactions");

stake("Maciej", 100);
stake("Jakub", 50);
stake("Filip", 25);

console.log("🚀 Start symulacji PoS\n");

setInterval(() => {
  generateRandomTransaction();
}, 3000);

setInterval(() => {
  createBlock();
}, 5000);
