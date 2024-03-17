const validateCpf = new RegExp("[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}");
const validEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");

function cpf(v) {
  v = v.replace(/\D/g, "");
  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  return v;
}

let form = document.getElementById("form_prevent");
form.addEventListener("click", (e) => e.preventDefault());
let cpfField = document.getElementById("cpf");

cpfField.addEventListener("keyup", function () {
  let valor = cpfField.value;
  console.log(valor);

  cpfField.value = cpf(cpfField.value);
  if (!validateCpf.test(document.getElementById("cpf").value)) {
    console.log("oi");
    document.getElementById("errorCpf").innerHTML = "Cpf inválido!";
    if (document.getElementById("cpf").value == "") {
      document.getElementById("errorCpf").innerHTML = "";
    }
  } else {
    document.getElementById("errorCpf").innerHTML = "";
  }
});

let emailField = document.getElementById("email");

emailField.addEventListener("keyup", function () {
  let valor = emailField.value;
  console.log(valor);
  if (!validEmail.test(document.getElementById("email").value)) {
    console.log("oi");
    document.getElementById("errorEmail").innerHTML = "Email inválido!";
    if (document.getElementById("email").value == "") {
      document.getElementById("errorEmail").innerHTML = "";
    }
  } else {
    document.getElementById("errorEmail").innerHTML = "";
  }
});

let passwordField = document.getElementById("password");

passwordField.addEventListener("keyup", function () {
  let valor = passwordField.value;
  console.log(valor);
  if (document.getElementById("password").value.length < 4) {
    console.log("oi");
    document.getElementById("errorPassword").innerHTML =
      "Senha precisa ter mais de 4 digitos.";
    if (document.getElementById("password").value == "") {
      document.getElementById("errorPassword").innerHTML = "";
    }
  } else {
    document.getElementById("errorPassword").innerHTML = "";
  }
});

const states = ["Rio Grande do Sul", "Paraná", "Santa Catarina"];
let selectField = document.getElementById("state");
let statesString = "";
states.map((state) => {
  console.log(statesString);
  statesString = `${statesString}<option value = ${state} >${state}</option>`;
});
selectField.innerHTML = statesString;

function mostraAlgo (){
    let alertSuccess = document.getElementById('alertSuccess')
    alertSuccess.style.opacity = 1;
    setTimeout(() => {
        alertSuccess.style.opacity = 0;
    }, 2000);
}