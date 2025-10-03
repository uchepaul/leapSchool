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

  //falsey values: undefined, null, 0, '', NaN
  //truthy values: anything else

  if (!currentAccount) {
    alert('Invalid username or pin');
    return;
  } else {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 1;
    loginForm.style.display = 'block';
    return currentAccount;
  }
};
