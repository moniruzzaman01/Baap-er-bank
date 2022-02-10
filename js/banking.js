// account information will be handle here
const depositBtn = document.getElementById('deposit-btn')
depositBtn.addEventListener('click', function () {
    const depositField = document.getElementById('deposit-input')
    const depositAmount = depositField.value
    const depositTotal = document.getElementById('deposit-total')
    let previousDepositAmount = depositTotal.innerText;
    depositTotal.innerText = parseInt(previousDepositAmount) + parseInt(depositAmount)

    // update balance
    const previousBalanceField = document.getElementById('balance')
    const previousBalance = previousBalanceField.innerText

    const newBalance = parseInt(previousBalance) + parseInt(depositField.value)
    previousBalanceField.innerText = newBalance;

    // clear input field and reset btn
    depositField.value = '';
    depositBtn.setAttribute('disabled', true)
    depositBtn.classList.remove('bg-red-400')
    depositBtn.classList.add('bg-red-200')
})

const withdrawBtn = document.getElementById('withdraw-btn')
withdrawBtn.addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-input')
    const withdrawAmount = withdrawField.value
    const withdrawTotal = document.getElementById('withdraw-total')
    let previousWithdrawAmount = withdrawTotal.innerText;
    withdrawTotal.innerText = parseInt(previousWithdrawAmount) + parseInt(withdrawAmount)

    // update balance
    const previousBalanceField = document.getElementById('balance')
    const previousBalance = previousBalanceField.innerText

    const newBalance = parseInt(previousBalance) - parseInt(withdrawField.value)
    previousBalanceField.innerText = newBalance;

    // clear input field
    withdrawField.value = '';
    withdrawBtn.setAttribute('disabled', true)
    withdrawBtn.classList.remove('bg-red-400')
    withdrawBtn.classList.add('bg-red-200')
})

// control button activity control
const withdrawField = document.getElementById('withdraw-input')
withdrawField.addEventListener('keyup', function () {
    if (parseInt(withdrawField.value) > 0) {
        withdrawBtn.removeAttribute('disabled')
        withdrawBtn.classList.remove('bg-red-200')
        withdrawBtn.classList.add('bg-red-400')
    } else {
        withdrawBtn.setAttribute('disabled', true)
        withdrawBtn.classList.remove('bg-red-400')
        withdrawBtn.classList.add('bg-red-200')
    }
})

const depositField = document.getElementById('deposit-input')
depositField.addEventListener('keyup', function () {
    if (parseInt(depositField.value) > 0) {
        depositBtn.removeAttribute('disabled')
        depositBtn.classList.remove('bg-red-200')
        depositBtn.classList.add('bg-red-400')
    } else {
        depositBtn.setAttribute('disabled', true)
        depositBtn.classList.remove('bg-red-400')
        depositBtn.classList.add('bg-red-200')
    }
})