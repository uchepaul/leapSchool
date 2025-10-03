"use Strict";
import { userauth } from "./Js/userauthentication/auth.js";
import { displayTransactions } from "./Js/transactions/trans-table.js";
import transactionSummary from "./Js/transactions/trans-sum.js";
import transfer from "./Js/transactions/transfers.js";

// BANKIST APP

//Acoounts Data
const account1 = {
  owner: "Jerry Smith",
  username: "jerry10",
  transactions: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  username: "davis10",
  transactions: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  username: "thomas10",
  transactions: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  username: "sarah10",
  transactions: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const loginForm = document.querySelector(".login");
const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
//Starting the App with Initial Values

const currencies = {
  USD: "United States dollar",
  EUR: "Euro",
  GBP: "Pound sterling",
};

const euroToUsd = 0.86;

inputLoginUsername.value = "jerry10";
inputLoginPin.value = "1111";

//Current Account currently logged in

let currentAccount = {};

// Event handler to Login
btnLogin.addEventListener("click", function (pre) {
  // Prevent form from submitting
  pre.preventDefault();

  //Get user data
  let user = inputLoginUsername.value;
  let pin = Number(inputLoginPin.value);

  //Check if user and pin are entered

  if (user === "" || pin === "") {
    alert("Please enter username and pin");
    return;
  }

  //Authenticate user

  currentAccount = userauth(
    user,
    pin,
    accounts,
    labelWelcome,
    containerApp,
    loginForm
  );

  // Clear inputs
  inputLoginUsername.value = inputLoginPin.value = "";
  inputLoginPin.blur();
});

//Event Handler To Transfer Money
btnTransfer.addEventListener("click", function (a) {
  // Prevent form from submitting
  a.preventDefault();

  // Get transfer data
  let username = inputTransferTo.value;
  let amount = Number(inputTransferAmount.value);
  const totalAmount = Number(
    labelBalance.textContent.replace("EUR", "").trim()
  );

  if (username === "" || !amount) {
    alert("enter a valid user or amount");
    return;
  } else if (amount < 0) {
    alert("enter a valid amount");
  } else {
    transfer(currentAccount, totalAmount, accounts, username, amount);
  }

  //Display Transactions
  displayTransactions(currentAccount, containerMovements);

  //Display Summary
  transactionSummary(currentAccount, labelBalance, labelSumIn, labelSumOut);

  inputTransferTo.value = inputTransferAmount.value = "";
});
