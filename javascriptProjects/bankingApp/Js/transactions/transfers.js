const transfer = function (
  currentAccount,
  totalAmount,
  accounts,
  username,
  amount
) {
  let receiver = accounts.find((acc) => acc.username === username);
  if (!receiver) {
    alert("no account found with this username");
    return;
  } else {
    if (amount >= totalAmount) {
      alert("insufficient amount");
      return;
    } else {
      if (receiver?.username === currentAccount.username) {
        alert("You cannot transfer money to your own self");
        return;
      } else {
        currentAccount.transactions.push(Number(-amount));
        receiver.transactions.push(Number(amount));
        alert(`sucessfully transferred ${amount} to ${receiver.owner}`);
        return;
      }
    }
  }
};

export default transfer;
