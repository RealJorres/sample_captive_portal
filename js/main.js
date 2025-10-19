function Redirect(){
    var checkbox = document.getElementById("agree");

    if ( checkbox.checked){
        window.location.href = "https://realjorres.github.io/sample_captive_portal/login.html";
    }
    else{
        Swal.fire({
            title: "Ooops...",
            text: "You must agree to the 'Terms & Conditions.'",
            icon: "error"
        });
    }
}

function ShowPassword(){
    var passwordInput = document.getElementById("password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

function ShowModal(){
    var modal = document.getElementById("modal");
    var container = document.getElementById("container");

    modal.style.display = "flex";
    modal.style.width = "85%";
    modal.style.margin = "10px auto";
    modal.style.padding = "5px";
    modal.style.zIndex = "999";

    container.style.display = "none";
}

function CloseModal(){
    var modal = document.getElementById("modal");
    var checkbox = document.getElementById("agree");

    modal.style.display = "none";
    container.style.display = "flex";

    checkbox.checked = true;
}
