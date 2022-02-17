// input value handle
function inputValueHandle(inputId) {
  const inputBox = document.getElementById(inputId);
  let inputValue = inputBox.value;
  // checked input error
  if (inputValue == '') {
    errorMsgHandle("Error: Please Enter value");
  }
  else if (inputValue >= 0) {
    inputValue = parseFloat(inputValue);
  }
  else if (inputValue < 0) {
    errorMsgHandle("Error: The Amount of money can't be negative");
  }
  else {
    errorMsgHandle("Error: The Amount of money can't be Text");
  }
  // inputBox.value = '';
  return inputValue;
}
// set input value
function setValue(id, setAmount) {
  const resultText = document.getElementById(id);
  resultText.innerText = setAmount;
}
// error msg
function errorMsgHandle(text) {
  const errorMsg = document.getElementById('error-msg');
  errorMsg.innerText = text;
  setTimeout(() => {
    errorMsg.innerText = '';
  }, 3000);
}
// calculate
document.getElementById('calculate-btn').addEventListener('click', function () {
  // get value
  const income = inputValueHandle('income');
  const foodExpense = inputValueHandle('food');
  const rentExpense = inputValueHandle('rent');
  const clothesExpense = inputValueHandle('clothes');
  // calculate handle
  if (typeof income == 'number' && typeof foodExpense == 'number' && typeof rentExpense == 'number' && typeof clothesExpense == 'number') {
    const totalExpense = foodExpense + rentExpense + clothesExpense;
    const restBalance = income - totalExpense;
    if (restBalance < 0) {
      errorMsgHandle('*Error: Expenditure is more than income*')
    }
    else {
      setValue('total-expenses', totalExpense);
      setValue('balance', restBalance);
    }
  }
})
// saving
document.getElementById('Saving-btn').addEventListener('click', function () {
  const saveingPercentages = inputValueHandle('save');
  const balanceAmount = document.getElementById('balance').innerText;
  const balance = parseFloat(balanceAmount);
  if (balance == 0) {
    errorMsgHandle("*Error: You have no balance*")
  }
  else if (saveingPercentages <= 100) {
    const saving = balance * (saveingPercentages / 100);
    const remainingAmount = balance - saving;
    setValue('saving-amount', saving);
    setValue('remaining-balance', remainingAmount)
  }
  else {
    errorMsgHandle("*Error: The percentage can't exceed 100*")
  }
})