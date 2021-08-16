/*     function doubleIt(num){
        const result = num *2;
        return result
    }

    const first = doubleIt(5);

    const second = doubleIt(7); */

function getInputValue(){
    const depositField = document.getElementById('deposit-input');
    const newDepositAmount = parseFloat(depositField.value);
    
    // Clear input field
    depositField.value = '';

    return newDepositAmount;
}
    
    /* --------------DEPOSIT EVENT HANDLING---------- */
document.getElementById('deposit-button').addEventListener('click', function(){

    const newDepositAmount = getInputValue();
    
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
        const withdrawField = document.getElementById('withdraw-input');
        const newWithdrawAmount = parseFloat(withdrawField.value);

        // Get current Withdraw
        const withdrawTotal = document.getElementById('withdraw-total');
        const previousWithdrawAmount = parseFloat(withdrawTotal.innerText);

        withdrawTotal.innerText = newWithdrawAmount + previousWithdrawAmount;

        // Adding in balance
        const balanceTotal = document.getElementById('balance-total');
        const previousBalanceTotal = parseFloat(balanceTotal.innerText);

        balanceTotal.innerText = previousBalanceTotal - newWithdrawAmount;

        // Ckear input field
        withdrawField.value = '';
    })