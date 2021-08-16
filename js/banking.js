
function getInputValue(inputID){
    const depositField = document.getElementById(inputID);
    const newDepositAmount = parseFloat(depositField.value);
    
    // Clear input field
    depositField.value = '';

    return newDepositAmount;
}
    
    /* --------------DEPOSIT EVENT HANDLING---------- */
document.getElementById('deposit-button').addEventListener('click', function(){

    const newDepositAmount = getInputValue('deposit-input');
    
    // Get current Deposit
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = parseFloat(depositTotal.innerText);

    depositTotal.innerText = newDepositAmount + previousDepositAmount;


    // Adding in balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);

    balanceTotal.innerText = previousBalanceTotal + newDepositAmount;

})

    /* --------------WITHDRAW EVENT HANDLING---------- */
    document.getElementById('withdraw-button').addEventListener('click', function(){

        const newWithdrawAmount = getInputValue('withdraw-input');
        // Get current Withdraw
        const withdrawTotal = document.getElementById('withdraw-total');
        const previousWithdrawAmount = parseFloat(withdrawTotal.innerText);

        withdrawTotal.innerText = newWithdrawAmount + previousWithdrawAmount;

        // Adding in balance
        const balanceTotal = document.getElementById('balance-total');
        const previousBalanceTotal = parseFloat(balanceTotal.innerText);

        balanceTotal.innerText = previousBalanceTotal - newWithdrawAmount;


    })