//Authentication function
export const authenticateUser = function (
  username,
  pin,
  accounts,
  labelWelcome,
  containerApp,
  loginForm
) {
  let currentAccount = accounts.find(cur => {
    return cur.username === username && cur.pin === pin;
  });

  if (!currentAccount) {
    alert('Invalid username or pin');
    return;
  } else {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 1;
    loginForm.style.display = 'none';
    return currentAccount;
  }
};
