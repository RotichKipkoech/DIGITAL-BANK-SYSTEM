document.addEventListener('DOMContentLoaded', function () {
  const loanLimitAmount = document.getElementById('loanLimitAmount');
  const borrowAmountInput = document.getElementById('borrowAmount');
  const borrowButton = document.getElementById('borrowButton');
  const repayAmount = document.getElementById('repayAmount');
  const repayInputAmount = document.getElementById('repayInputAmount');
  const repayButton = document.getElementById('repayButton');

  let loanLimit = 5000; // Initial loan limit
  let loanAmount = 0; // Loan amount borrowed

  // Display initial loan limit
  loanLimitAmount.textContent = '$' + loanLimit;

  // Borrow loan
  borrowButton.addEventListener('click', function () {
    const borrowAmount = parseInt(borrowAmountInput.value);
    if (borrowAmount > 0 && borrowAmount <= loanLimit) {
      loanLimit -= borrowAmount;
      loanAmount += borrowAmount;
      loanLimitAmount.textContent = '$' + loanLimit;
      borrowAmountInput.value = '';
      repayAmount.textContent = '$' + loanAmount;
      alert('Loan borrowed successfully!');
    } else {
      alert('Invalid loan amount or loan limit exceeded!');
    }
  });

  // Repay loan
  repayButton.addEventListener('click', function () {
    const repaymentAmount = parseInt(repayInputAmount.value);
    if (repaymentAmount > 0 && repaymentAmount <= loanAmount) {
      loanAmount -= repaymentAmount;
      loanLimit += repaymentAmount;
      loanLimitAmount.textContent = '$' + loanLimit;
      repayAmount.textContent = '$' + loanAmount;
      repayInputAmount.value = '';
      alert('You have repaid $' + repaymentAmount + ' successfully!');
    } else {
      alert('Invalid repayment amount or exceeds loan amount!');
    }
  });
});
