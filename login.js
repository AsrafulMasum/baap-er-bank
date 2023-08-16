document.getElementById('login-btn').addEventListener('click', function(){
  const emailValue = document.getElementById('email').value;
  const passValue = document.getElementById('password').value;
  const email = "father@bank.com";
  const pass = "masum";
  if(emailValue === email && passValue === pass){
    window.location.href = 'bank.html'
  }
  else{
    console.log("invalid account")
  }
  
})