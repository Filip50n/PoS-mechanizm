const validators = [];

function stake(name, amount) {
  const existing = validators.find((v) => v.name === name);
  if (existing) {
    existing.stake += amount;
  } else {
    validators.push({ name, stake: amount, reputation: 100, blocks: 0 });
  }
}

function getValidators() {
  return validators;
}

function printStats() {
  console.log("📊 Statystyki walidatorów:");
  console.log("──────────────────────────");

  const totalBlocks = validators.reduce((sum, v) => sum + v.blocks, 0);
  validators.forEach((v) => {
    const share =
      totalBlocks > 0 ? ((v.blocks / totalBlocks) * 100).toFixed(2) : 0;
    console.log(`👤 ${v.name}`);
    console.log(`   🔹 Stake: ${v.stake}`);
    console.log(`   🏅 Reputacja: ${v.reputation}`);
    console.log(`   🧱 Bloki: ${v.blocks} (${share}%)\n`);
  });
}

module.exports = { stake, getValidators, printStats };
