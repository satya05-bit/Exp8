function signup(){

    let username =
    document.getElementById("newUser").value;

    let password =
    document.getElementById("newPass").value;

    if(username==="" || password===""){
        alert("Fill all fields");
        return;
    }

    localStorage.setItem("username",username);
    localStorage.setItem("password",password);

    alert("Registration Successful");

    window.location="login.html";
}

function login(){

    let username =
    document.getElementById("username").value;

    let password =
    document.getElementById("password").value;

    let savedUser =
    localStorage.getItem("username");

    let savedPass =
    localStorage.getItem("password");

    if(username===savedUser &&
       password===savedPass){

        localStorage.setItem(
            "loggedIn",
            "true"
        );

        window.location="index.html";
    }
    else{
        alert("Invalid Username or Password");
    }
}