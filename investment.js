// //initiated the fetch property
// function fetchInvestmentData() {
//   fetch('db.json')
//     .then(response => response.json())
//     .then(data => {
//       const investmentTable = document.getElementById('investment-table');

//       data.accounts.forEach(account => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${account.name}</td>
//             <td>${account.type}</td>
//             <td>${account.balances.current}</td>
//           `;
//         investmentTable.querySelector('tbody').appendChild(row);
//       });

//       const addInvestmentForm = document.getElementById('add-investment-form');
//       addInvestmentForm.addEventListener('submit', event => {
//         event.preventDefault();

//         const accountName = document.getElementById('account-name').value;
//         const accountType = document.getElementById('account-type').value;
//         const currentBalance = parseFloat(document.getElementById('current-balance').value);

//         // Create a new investment object
//         const newInvestment = {
//           id: '', // Generate aunique ID for the new investment
//           name: accountName,
//           type: accountType,
//           balances: {
//             current: currentBalance,
//             available: currentBalance
//           }
//         };

//         // Add the new investment to the data
//         data.accounts.push(newInvestment);

//         // Clear the form inputs
//         addInvestmentForm.reset();

//         // Update the investment table
//         const newRow = document.createElement('tr');
//         newRow.innerHTML = `
//             <td>${newInvestment.name}</td>
//             <td>${newInvestment.type}</td>
//             <td>${newInvestment.balances.current}</td>
//           `;
//         investmentTable.querySelector('tbody').appendChild(newRow);
//       });
//     })
//     .catch(error => {
//       console.error('Error fetching investment data:', error);
//     });
// }

// // Call the fetch function to retrieve investment data
// fetchInvestmentData();


// Function to fetch investment data
function fetchInvestmentData() {
  fetch('http://localhost:3000/accounts') // Fetch data from the 'accounts' endpoint
    .then(response => response.json())
    .then(data => {
      const investmentTable = document.getElementById('investment-table');

      data.forEach(account => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${account.name}</td>
            <td>${account.type}</td>
            <td>${account.balances.current}</td>
            <td><button onclick="deleteInvestment('${account.id}')">Delete</button></td>
          `;
        row.id = account.id; // Set the ID of the row to the account ID
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
          id: '', // Will be assigned by the server
          name: accountName,
          type: accountType,
          balances: {
            current: currentBalance,
            available: currentBalance
          }
        };

        // Add the new investment to the data by making a POST request to the 'accounts' endpoint
        fetch('http://localhost:3000/accounts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newInvestment)
        })
          .then(response => response.json())
          .then(data => {
            // Clear the form inputs
            addInvestmentForm.reset();

            // Update the investment table with the new investment
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${data.name}</td>
                <td>${data.type}</td>
                <td>${data.balances.current}</td>
                <td><button onclick="deleteInvestment('${data.id}')">Delete</button></td>
              `;
            newRow.id = data.id; // Set the ID of the row to the account ID
            investmentTable.querySelector('tbody').appendChild(newRow);
          })
          .catch(error => {
            console.error('Error adding new investment:', error);
          });
      });
    })
    .catch(error => {
      console.error('Error fetching investment data:', error);
    });
}

// Function to delete an investment
function deleteInvestment(accountId) {
  // Send a DELETE request to the specific account endpoint to delete the investment
  fetch(`http://localhost:3000/accounts/${accountId}`, {
    method: 'DELETE'
  })
    .then(() => {
      // Remove the corresponding row from the investment table
      const row = document.getElementById(accountId);
      row.remove();
    })
    .catch(error => {
      console.error('Error deleting investment:', error);
    });
}

// Call the fetch function to retrieve investment data
fetchInvestmentData();
