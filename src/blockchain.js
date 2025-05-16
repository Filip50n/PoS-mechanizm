const fs = require('fs');
const { getValidators, printStats } = require("./stakeSystem");
const { getNextTransactions } = require("./transactions");
const { weightedRandom } = require("./utils");

let blockchain = [];
let blockId = 1;
const chartData = []; // store data for each block

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

  const v = validators.find((v) => v.name === proposer.name);
  if (v) {
    v.reputation += 1;
    v.blocks += 1;
  }

  // Add explicit 'transactions' field here!
  chartData.push({
    blockId: block.id,
    proposer: proposer.name,
    transactions: txs,  // ✅ Add this line explicitly!
    validators: validators.map(v => ({ ...v }))
  });

  console.log(`✅ Blok #${block.id} stworzony przez ${block.proposer}`);
  console.log(`📦 Transakcje: ${JSON.stringify(txs)}\n`);

  if (block.id % 5 === 0) {
    printStats();
    exportChartData();
  }
}

function exportChartData() {
  fs.writeFileSync('./chartdata.json', JSON.stringify(chartData, null, 2));
  console.log("📊 Dane do wykresów zapisane w 'chartdata.json'.");
}

module.exports = { createBlock, blockchain };