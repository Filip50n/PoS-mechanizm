const validators = [];

function stake(name, amount) {
  const existing = validators.find((v) => v.name === name);
  if (existing) {
    existing.stake += amount;
  } else {
    validators.push({ name, stake: amount });
  }
}

function getValidators() {
  return validators;
}

module.exports = { stake, getValidators };
