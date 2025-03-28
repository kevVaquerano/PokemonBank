//Esta función me ayuda a verificar si el pin es correcto
function validarPIN(event){
    event.preventDefault(); //Detiene el envío del formulario

    const pin = document.getElementById("pin").value;

    if(pin == "1234"){
        window.location.href = "menu.html"; //Redirige a "MENU" si el pin es correcto
    } else {
        alert("PIN incorrecto"); //Muestra una alerta si el PIN es incorrecto
        document.getElementById("pin").value = "";
    }
}

function salir() {
  window.location.href = "login.html";
}

// Saludo dinámico para el menú
window.addEventListener("DOMContentLoaded", function () {
  const saludoTag = document.getElementById("saludo");
  if (saludoTag) {
    const nombreUsuario = "Laura";
    const hora = new Date().getHours();
    let saludo = "";

    if (hora >= 5 && hora < 12) saludo = "Buenos días";
    else if (hora >= 12 && hora < 18) saludo = "Buenas tardes";
    else saludo = "Buenas noches";

    saludoTag.textContent = `${saludo}, ${nombreUsuario}`;
  }
});

