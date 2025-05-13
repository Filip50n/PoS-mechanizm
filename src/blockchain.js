const { getValidators } = require("./stakeSystem");
const { getNextTransactions } = require("./transactions");
const { weightedRandom } = require("./utils");

let blockchain = [];
let blockId = 1;

function createBlock() {
  const validators = getValidators();
  if (validators.length === 0) {
    console.log("⛔ Brak walidatorów!");
    return;
  }

  const proposer = weightedRandom(validators);
  const txs = getNextTransactions();

  const block = {
    id: blockId++,
    proposer: proposer.name,
    transactions: txs,
    timestamp: new Date().toISOString(),
  };

  blockchain.push(block);

  console.log(`✅ Blok #${block.id} stworzony przez ${block.proposer}`);
  console.log(`📦 Transakcje: ${JSON.stringify(txs)}\n`);
}

module.exports = { createBlock, blockchain };
