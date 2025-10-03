const transactionSummary = function (
  currentAccount,
  labelBalance,
  labelSumIn,
  labelSumOut
) {
  const incomes = currentAccount.transactions
    .filter((cur) => {
      return cur > 0;
    })
    .reduce((cur, i) => cur + i, 0);

  const out = currentAccount.transactions
    .filter((cur) => {
      return cur < 0;
    })
    .reduce((cur, i) => cur + i, 0);

  const summary = incomes + out;

  labelBalance.textContent = `${summary}EUR`;
  labelSumIn.textContent = `${incomes}EUR`;
  labelSumOut.textContent = `${Math.abs(out)}EUR`;

  console.log({ incomes, out, summary });

  return { incomes, out, summary };
};

export default transactionSummary;
