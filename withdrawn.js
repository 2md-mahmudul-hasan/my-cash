document.getElementById('withdrwan-btn').addEventListener('click', function(){


  const userWithdrawn = document.getElementById('user-withdrawn')
  const userWithdrawnValue = userWithdrawn.value;
  let userWithdrawnAmount = parseFloat(userWithdrawnValue)



  let totalWithdrawn = document.getElementById('total-withdrawn');
  const totalWithdrawnText = totalWithdrawn.innerText;
  let totalWithdrawnAmount = parseFloat(totalWithdrawnText)


  let netWithdrawn = totalWithdrawnAmount + userWithdrawnAmount
  totalWithdrawn.innerText = netWithdrawn;
  console.log(netWithdrawn)


  // get balnce
  const previousBalance = document.getElementById('balance')
  const balanceText = previousBalance.innerText;
  const balanceAmount = parseFloat(balanceText)

  //net balance

  const netBalance = balanceAmount - netWithdrawn;
  previousBalance.innerText = netBalance;

  userWithdrawn.value = ''
})