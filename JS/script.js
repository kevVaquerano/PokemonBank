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

//Esta función es para regresar a la pantalla login, nos servirá en todas las pantallas
function salir() {
  window.location.href = "login.html";
}

// Saludo dinámico para el menú
window.addEventListener("DOMContentLoaded", function () {
  const saludoTag = document.getElementById("saludo");
  if (saludoTag) {
    const nombreUsuario = "Laura"; //nombre del usuario
    const hora = new Date().getHours(); //esta variable ayuda a detectar la hora para hacer el saludo dinámico
    let saludo = "";

    if (hora >= 5 && hora < 12) saludo = "Buenos días"; //esta es ya la validación, si la hora es entre 5 a 12 el saludo será "Buenos días"+nombre de usuario
    else if (hora >= 12 && hora < 18) saludo = "Buenas tardes";// si la hora es de 12 a 18 (6pm) el saludo será "Buenas tardes"+nombre de usuario
    else saludo = "Buenas noches";//si la hora es de 18 a 4 el saludo será "Buenas noches"+nombre de usuario

    saludoTag.textContent = `${saludo}, ${nombreUsuario}`;//acá ordeno el saludo
  }
});

//función para confirmar el depósito
function confirmarDeposito(event) {
  event.preventDefault();

  const monto = parseFloat(document.getElementById("monto").value);//acá leo la variable monto del archivo html y lo guarda

  if (monto > 0) {//si el monto es mayor que 0 aparece el mensaje de éxito y hace la pregunta para continuar la operación o regresar al login"
    document.getElementById("mensajeExito").classList.remove("d-none");
    document.getElementById("preguntaOperacion").classList.remove("d-none");
    document.getElementById("monto").value = "";//esto me ayuda a limpiar el campo de "monto" luego de la operación
  }
}

//al elegir "si" en la pregunta de operación, me redirige a la pantalla menu
function irAlMenu() {
  window.location.href = "menu.html";
}

//en la pantalla menu, al darle clic al botón "Depositar Dinero" me redirige a la pantalla depositar
function deposito(){
    window.location.href="Depositar.html";
}
