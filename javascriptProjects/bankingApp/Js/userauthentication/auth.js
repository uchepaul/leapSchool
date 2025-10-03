// AuthentificationFunction
export const userauth = function (
  username,
  pin,
  accounts,
  labelWelcome,
  containerApp,
  loginForm
) {
  let currentAccount = accounts.find((acc) => {
    return acc.username === username && acc.pin === pin;
  });

  if (!currentAccount) {
    alert("enter a valid username or pin");
    return;
  } else {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 1;
    loginForm.style.display = "block";
    return currentAccount;
  }
};
