document.getElementById('withdrwan-btn').addEventListener('click', function(){


  const userWithdrawn = document.getElementById('user-withdrawn')
  const userWithdrawnValue = userWithdrawn.value;
  const userWithdrawnAmount = parseFloat(userWithdrawnValue)
  console.log(userWithdrawnAmount)


  const totalWithdrawn = document.getElementById('total-withdrawn').innerText;

  const totalWithdrawnAmount = parseFloat(totalWithdrawn)
  console.log(totalWithdrawnAmount)

  const netWithdrawn = totalWithdrawnAmount + userWithdrawnAmount;

  totalWithdrawn.innerText = netWithdrawn;
  userWithdrawn.value = ''
})