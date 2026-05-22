function login(){

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email !== "" && password !== ""){

        document.getElementById("loginPage").style.display = "none";

        document.getElementById("dashboard").classList.remove("hidden");

    }

    else{

        alert("Please enter email and password");

    }

}
