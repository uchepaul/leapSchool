const transactionSummary = function (
  currentAcount,
  labelBalance,
  labelSumIn,
  labelSumOut
) {
  const incomes = currentAcount.transactions
    .filter(cur => {
      return cur > 0;
    })
    .reduce((acc, cur) => acc + cur, 0);

  const out = currentAcount.transactions
    .filter(cur => {
      return cur < 0;
    })
    .reduce((acc, cur) => acc + cur, 0);

  const summary = incomes + out;

  labelBalance.textContent = `${summary} EUR`;
  labelSumIn.textContent = `${incomes} EUR`;
  labelSumOut.textContent = `${Math.abs(out)} EUR`;

  return { incomes, out, summary };
};

export default transactionSummary;
