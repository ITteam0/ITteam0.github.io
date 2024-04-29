var passwordMH;
var confirm_passwordMH;
var counterSignUpMH = 0;

function validatePasswordMH(){

  passwordMH = document.getElementById("password");
  confirm_passwordMH = document.getElementById("repeatPassword");

  if(passwordMH.value != confirm_passwordMH.value){
    document.getElementById('checkPassMH').style.color = 'red';
    document.getElementById('checkPassMH').innerHTML = "Password Doesn't Match";
    document.getElementById('submit').disabled = true;
    document.getElementById('submit').style.opacity = (0.4);
  } 
  else {
    document.getElementById('checkPassMH').style.color = 'green';
    document.getElementById('checkPassMH').innerHTML = "Password Matches";
    document.getElementById('submit').disabled = false;
    document.getElementById('submit').style.opacity = (1);
  }
}

function appearSignUPMH()
{
  ++counterSignUpMH;
  if(counterSignUpMH % 2 == 0) {
    document.getElementById('eyeMH').innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
    confirm_passwordMH.type = 'password';
  }
  else {
    document.getElementById('eyeMH').innerHTML = '<i class="fa-regular fa-eye"></i>';
    confirm_passwordMH.type = 'text';
  }
}
