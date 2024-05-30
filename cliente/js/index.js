function enviar(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let url = "https://api-flask-appcontactos-c64d569c62b0.herokuapp.com/usuario?email="+email+"&password="+password;
    fetch(url, {
        method: 'GET',
    })
    .then(res => res.json())
    .then(res => {
        if (res.result != 0){
            localStorage.setItem("id",res.result) //Se crea un localstorage para guardar el "id" del usuario
            location.href = "main.html";
        } else {
            Swal.fire({
                title: "Login",
                text: "Credenciales incorrectas",
                icon: "error"
            });
        }
    });
}