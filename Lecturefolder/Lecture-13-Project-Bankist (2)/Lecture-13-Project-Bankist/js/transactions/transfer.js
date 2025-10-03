const transfer = function (currentAccount, accounts, username, amount) {
  let reciever = accounts.find(cur => cur.username === username);
  if (!reciever) {
    alert('No account found with this username');
    return;
  } else {
    if (reciever?.username === currentAccount.username) {
      alert('You cannot transfer money to your own account');
      return;
    } else {
      if (
        amount >= currentAccount.transactions.reduce((acc, cur) => acc + cur, 0)
      ) {
        alert('Insufficient balance');
        return;
      } else {
        currentAccount.transactions.push(Number(-amount));
        reciever.transactions.push(Number(amount));
        alert(`Successfully transferred ${amount} to ${reciever.owner}`);
        return;
      }
    }
  }
};

export default transfer;
