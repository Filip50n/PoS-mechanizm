let transactionQueue = [
  { from: "Jakub", to: "Maciej", amount: 5 },
  { from: "Maciej", to: "Filip", amount: 2 },
  { from: "Dave", to: "Maciej", amount: 10 },
];

function getNextTransactions(max = 2) {
  return transactionQueue.splice(0, max);
}

function addTransaction(tx) {
  transactionQueue.push(tx);
}

module.exports = { getNextTransactions, addTransaction };
