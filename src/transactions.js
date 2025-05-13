const transactionQueue = [];

function getNextTransactions(max = 2) {
  return transactionQueue.splice(0, max);
}

function addTransaction(tx) {
  transactionQueue.push(tx);
}

function generateRandomTransaction() {
  const users = ["Maciej", "Jakub", "Michał", "Ewa", "Filip"];
  const from = users[Math.floor(Math.random() * users.length)];
  let to = users[Math.floor(Math.random() * users.length)];
  while (to === from) {
    to = users[Math.floor(Math.random() * users.length)];
  }

  const amount = Math.floor(Math.random() * 10) + 1;

  const tx = { from, to, amount };
  addTransaction(tx);
  console.log(`🔄 Wygenerowano transakcję: ${from} ➡️ ${to} : ${amount}`);
}

module.exports = {
  getNextTransactions,
  addTransaction,
  generateRandomTransaction,
};
