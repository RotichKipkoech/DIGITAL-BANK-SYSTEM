//initiated the fetch property
function fetchInvestmentData() {
  fetch('db.json')
    .then(response => response.json())
    .then(data => {
      const investmentTable = document.getElementById('investment-table');

      data.accounts.forEach(account => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${account.name}</td>
            <td>${account.type}</td>
            <td>${account.balances.current}</td>
          `;
        investmentTable.querySelector('tbody').appendChild(row);
      });

      const addInvestmentForm = document.getElementById('add-investment-form');
      addInvestmentForm.addEventListener('submit', event => {
        event.preventDefault();

        const accountName = document.getElementById('account-name').value;
        const accountType = document.getElementById('account-type').value;
        const currentBalance = parseFloat(document.getElementById('current-balance').value);

        // Create a new investment object
        const newInvestment = {
          account_id: '', // Generate aunique ID for the new investment
          name: accountName,
          type: accountType,
          balances: {
            current: currentBalance,
            available: currentBalance
          }
        };

        // Add the new investment to the data
        data.accounts.push(newInvestment);

        // Clear the form inputs
        addInvestmentForm.reset();

        // Update the investment table
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${newInvestment.name}</td>
            <td>${newInvestment.type}</td>
            <td>${newInvestment.balances.current}</td>
          `;
        investmentTable.querySelector('tbody').appendChild(newRow);
      });
    })
    .catch(error => {
      console.error('Error fetching investment data:', error);
    });
}

// Call the fetch function to retrieve investment data
fetchInvestmentData();
