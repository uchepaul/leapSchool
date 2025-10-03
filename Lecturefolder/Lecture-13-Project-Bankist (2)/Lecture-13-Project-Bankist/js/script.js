'use strict';
import { authenticateUser } from './authentication/auth.js';
import { displayTransactions } from './transactions/trans-table.js';
import transactionSummary from './transactions/trans-summary.js';
import transfer from './transactions/transfer.js';

// BANKIST APP

//Acoounts Data
const account1 = {
  owner: 'Jerry Smith',
  username: 'jerry10',
  transactions: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  username: 'davis10',
  transactions: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  username: 'thomas10',
  transactions: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  username: 'sarah10',
  transactions: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const loginForm = document.querySelector('.login');
const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////

const currencies = {
  USD: 'United States dollar',
  EUR: 'Euro',
  GBP: 'Pound sterling',
};

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 0.86;

/////////////////////////////////////////////////
//Starting the App with Initial Values
inputLoginUsername.value = '';
inputLoginPin.value = '';

//Current Account currently logged in
let currentAccount = {};

// Event handler to Login
btnLogin.addEventListener('click', function (bay) {
  // Prevent form from submitting
  bay.preventDefault();

  // Get user data
  let user = inputLoginUsername.value;
  let pin = Number(inputLoginPin.value);

  //Check if user and pin are entered
  if (user === '' || pin === '') {
    alert('Please enter both username and pin');
    return;
  }
  //Authenticate user
  currentAccount = authenticateUser(
    user,
    pin,
    accounts,
    labelWelcome,
    containerApp,
    loginForm
  );

  //Display Transactions
  displayTransactions(currentAccount, containerMovements);
  //Display Summary
  transactionSummary(currentAccount, labelBalance, labelSumIn, labelSumOut);

  //Display current date
  let today = new Date();
  let day = `${today.getDate()}`.padStart(2, 0);
  let month = `${today.getMonth() + 1}`.padStart(2, 0);
  let year = today.getFullYear();
  labelDate.textContent = `${day}/${month}/${year}`;
});

// Event handler to Transfer money
btnTransfer.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  // Get transfer data
  let username = inputTransferTo.value;
  let amount = Number(inputTransferAmount.value);

  //Check if user and amount are entered
  if (username === '' || amount === '') {
    alert('Please enter both username and amount');
    return;
  } else if (amount <= 0) {
    alert('Please enter a valid amount');
    return;
  } else {
    transfer(currentAccount, accounts, username, amount);

    //Display Transactions
    displayTransactions(currentAccount, containerMovements);
    //Display Summary
    transactionSummary(currentAccount, labelBalance, labelSumIn, labelSumOut);
    inputTransferTo.value = '';
    inputTransferAmount.value = '';
  }
});
