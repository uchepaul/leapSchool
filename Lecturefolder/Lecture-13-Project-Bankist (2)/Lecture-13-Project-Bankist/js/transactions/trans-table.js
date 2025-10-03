export const displayTransactions = (currentAccount, containerMovements) => {
  currentAccount.transactions.forEach((cur, i) => {
    const html = `
<div class="movements__row">
   <div class="movements__type movements__type--deposit">
   ${i} ${cur > 0 ? 'deposit' : 'withdrawal'}
   </div>
   <div class="movements__date">3 days ago</div>
   <div class="movements__value">${cur}€</div>
</div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
