function login(){

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if(email && password){

    document.getElementById("loginPage").style.display = "none";

    document.getElementById("dashboard").classList.remove("hidden");

  } else {

    alert("Please enter email and password");

  }

}
