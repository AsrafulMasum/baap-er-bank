document.getElementById('btn-deposit').addEventListener('click', function(){

  const depositMoneyElement = document.getElementById('deposit-field');
  const depositMoneyString =depositMoneyElement.value;
  const depositMoney = parseFloat(depositMoneyString);

  const depositedMoneyElement =  document.getElementById('deposited-money');
  const depositedMoneyString = depositedMoneyElement.innerText;
  const depositedMoney = parseFloat(depositedMoneyString);

  const totalBalanceElement = document.getElementById('total-balance');
  const totalBalanceString =totalBalanceElement.innerText;
  const totalBalance = parseFloat(totalBalanceString);
  depositMoneyElement.value = '';

  if(isNaN(depositMoney)){
    alert('Enter the amount you want to deposit.')
  }
  else{
    const totalDeposit = depositMoney + depositedMoney;
    depositedMoneyElement.innerText = totalDeposit;
    const newBalance = depositMoney + totalBalance;
    totalBalanceElement.innerText = newBalance;
  }
})

document.getElementById('btn-withdraw').addEventListener('click', function(){

  const withdrawMoneyElement = document.getElementById('withdraw-field');
  const withdrawMoneyString = withdrawMoneyElement.value;
  const withdrawMoney = parseFloat(withdrawMoneyString);
  
  const withdrewMoneyElement = document.getElementById('withdrew-money');
  const withdrewMoneyString = withdrewMoneyElement.innerText;
  const withdrewMoney = parseFloat(withdrewMoneyString);

  const totalBalanceElement = document.getElementById('total-balance');
  const totalBalanceString =totalBalanceElement.innerText;
  const totalBalance = parseFloat(totalBalanceString);
  withdrawMoneyElement.value = '';

  if(isNaN(withdrawMoney)){
    alert('Enter the amount you want to withdraw.')
  }
  else if(totalBalance < withdrawMoney){
    alert("You don't have enough money.")
  }
  else{
    const totalWithdraw = withdrawMoney + withdrewMoney;
    withdrewMoneyElement.innerText = totalWithdraw;
    const newBalance = totalBalance - withdrawMoney;
    totalBalanceElement.innerText = newBalance;
  }
})