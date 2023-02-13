document.getElementById('deposit-btn').addEventListener('click', function(){
  console.log('btn click')
  const depositField = document.getElementById('deposit-field');
  const depositFieldValue = depositField.value;
  const newDepositAmount = parseFloat(depositFieldValue);

  //total deposit
  const oldDeposit = document.getElementById('total-deposit')
  const totalDepositText = oldDeposit.innerText;
  const totalDepositAmount = parseFloat(totalDepositText)

  const totalDeposit = totalDepositAmount + newDepositAmount;
  oldDeposit.innerText = totalDeposit;


  // net balance
  const netBalance = document.getElementById('net-balance')
  const netBalanceInnerText = netBalance.innerText;
  const netBalanceAmount = parseFloat(netBalanceInnerText)

  const totalBalance = netBalanceAmount + totalDeposit;
  netBalance.innerText = totalBalance


  depositField.value='';

})