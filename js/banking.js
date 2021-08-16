
function getInputValue(inputID){
    const inputField = document.getElementById(inputID);
    const newInputAmount = parseFloat(inputField.value);   
    // Clear input field
    inputField.value = '';
    return newInputAmount;
}
function updateTotalField(totalFieldId ,depositAmount){
    const totalField = document.getElementById(totalFieldId);
    const previousTotal = parseFloat(totalField.innerText);
    totalField.innerText = depositAmount + previousTotal;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
} 
    /* --------------EVENT HANDLING---------- */
    document.getElementById('deposit-button').addEventListener('click', function(){

    const depositAmount = getInputValue('deposit-input');
    if(depositAmount > 0){
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }

    })
    /* --------------WITHDRAW EVENT HANDLING---------- */
    document.getElementById('withdraw-button').addEventListener('click', function(){
        const withdrawAmount = getInputValue('withdraw-input');
        const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount <= currentBalance){
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if(withdrawAmount > currentBalance){
        alert('You cannot withdraw more than what you have in your account!!');
    }
    })