function weightedRandom(validators) {
  const total = validators.reduce((sum, v) => sum + v.stake * v.reputation, 0);
  let r = Math.random() * total;

  for (const v of validators) {
    const weight = v.stake * v.reputation;
    if (r < weight) return v;
    r -= weight;
  }

  return validators[validators.length - 1];
}

module.exports = { weightedRandom };
