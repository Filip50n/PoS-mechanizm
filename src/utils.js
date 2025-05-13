function weightedRandom(validators) {
  const total = validators.reduce((sum, v) => sum + v.stake, 0);
  let r = Math.random() * total;

  for (const v of validators) {
    if (r < v.stake) return v;
    r -= v.stake;
  }

  return validators[validators.length - 1];
}

module.exports = { weightedRandom };
