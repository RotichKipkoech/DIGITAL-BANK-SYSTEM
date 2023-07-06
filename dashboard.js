// Get the logged-in user from session data
const loggedInUser = sessionStorage.getItem('loggedInUser');

// Fetch account transactions 
const transactions = fetchAccountTransactions(loggedInUser);

// Display latest transactions in the UI
const transactionsList = document.getElementById('transactions-list');
transactions.forEach(transaction => {
  const listItem = document.createElement('li');
  listItem.textContent = `${transaction.date} - ${transaction.description} - ${transaction.amount}`;
  transactionsList.appendChild(listItem);
});

// Fetch account transactions 
function fetchAccountTransactions(username) {
  
  // Return an array of transactions
  return [
    { date: '2023-07-01', description: 'Deposit', amount: '$1000' },
    { date: '2023-06-30', description: 'Withdrawal', amount: '$500' },
    { date: '2023-06-29', description: 'Online Payment', amount: '$50' }
  ];
}