document.getElementById('login-btn').addEventListener('click', function(){
const userEmail = document.getElementById('user-email').value;
const userPassword = document.getElementById('user-password').value;


if(userEmail === "murad@gamil.com" && userPassword === "123"){
  window.location.href = "cash.html";
}else{
  console.log('invalid user')
}
})