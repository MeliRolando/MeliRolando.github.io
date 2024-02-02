// Filtro de galeria
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// boton desplegable educacion
function educacion() {
  var x = document.getElementById("educacion-mostrar");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// boton experiencia
function experiencia() {
  var x = document.getElementById("experiencia-mostrar");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// boton habilidades
function habilidades() {
  var x = document.getElementById("habilidades-mostrar");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// Dropdown del porfolio en su version responsive
//Cuando el usuario hace clic en el botón alternar entre ocultar y mostrar el contenido 
function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

//Cierra el menú desplegable si el usuario hace clic fuera de él.
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//Formspree.io recurso
var form = document.getElementById("my-form");

    async function handleSubmit(event) {
        event.preventDefault();
        var status = document.getElementById("my-form-status");
        var data = new FormData(event.target);

        // Validar el formulario antes de enviar
        var valid = validateForm();

        if (valid) {
            try {
                var response = await fetch(event.target.action, {
                    method: form.method,
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    status.innerHTML = "Mensaje enviado con éxito";
                    form.reset();
                } else {
                    var responseData = await response.json();
                    if ('errors' in responseData) {
                        status.innerHTML = responseData.errors.map(error => error[""]).join(", ");
                    } else {
                        status.innerHTML = "Se produjo un error en el servidor.";
                    }
                }
            } catch (error) {
                status.innerHTML = "Se produjo un error al enviar el formulario.";
            }
        }
    }

    form.addEventListener("submit", handleSubmit);

    const nombre = document.getElementById("name");
    const email = document.getElementById("email");
    const pass = document.getElementById("message");
    const myform = document.getElementById("my-form");
    const parrafo = document.getElementById("warnings");

    function validateForm() {
        let warnings = "";
        let valid = true;
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (nombre.value.length < 4) {
            warnings += `El nombre es muy corto <br>`;
            valid = false;
        }

        if (!regexEmail.test(email.value)) {
            warnings += `El email no es válido <br>`;
            valid = false;
        }

        if (pass.value == '') {
            warnings += `El campo de mensaje está vacío`;
            valid = false;
        }

        parrafo.innerHTML = warnings;

        return valid;
    }

    myform.addEventListener("submit", e => {
        e.preventDefault();
        validateForm();
    });
     

//Scrollear hacia arriba al refrescar la pantalla
$(document).ready(function(){
  $(this).scrollTop(0);
});