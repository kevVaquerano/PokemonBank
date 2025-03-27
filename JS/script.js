function validarPIN(event){
    event.preventDefault(); //Detiene el envío del formulario

    const pin = document.getElementById("pin").value;

    if(pin == "1234"){
        window.location.href = "html/menu.html"; //Redirige si el pin es correcto
    } else {
        alert("PIN incorrecto"); //Muestra una alerta si el PIN es incorrecto
    }
}
