/* REGEX */
const validateCpf = new RegExp("[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}");
const validEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");

/* FUNCTIONS */

function handleSubmit(item) {
  let alertSuccess = document.getElementById("alertSuccess");
  let alertError = document.getElementById("alertError");
  let cpfField = document.getElementById("cpf").value;
  let emailField = document.getElementById("email").value;
  let passwordField = document.getElementById("password").value;
  let selectField = document.getElementById("state").value;
  let dateField = document.getElementById("date").value;
  let nameField = document.getElementById("name").value;
  console.log(typeof dateField);
  console.log(
    cpfField,
    emailField,
    passwordField,
    selectField,
    nameField,
    dateField
  );
  if (
    cpfField != "" &&
    emailField != "" &&
    passwordField != "" &&
    dateField != "" &&
    nameField != ""
  ) {
    alertSuccess.style.opacity = 1;
    console.log("oi");
    setTimeout(() => {
      alertSuccess.style.opacity = 0;
    }, 2000);
    return;
  } else {
    alertError.style.opacity = 1;
    setTimeout(() => {
      alertError.style.opacity = 0;
    }, 2000);
    return;
  }
}
function cpf(v) {
  v = v.replace(/\D/g, "");
  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  return v;
}

function mascaraData(val) {
  var pass = val.value;
  var expr = /[0123456789]/;

  for (i = 0; i < pass.length; i++) {
    var lchar = val.value.charAt(i);
    var nchar = val.value.charAt(i + 1);

    if (i == 0) {
      if (lchar.search(expr) != 0 || lchar > 3) {
        val.value = "";
      }
    } else if (i == 1) {
      if (lchar.search(expr) != 0) {
        var tst1 = val.value.substring(0, i);
        val.value = tst1;
        continue;
      }

      if (nchar != "/" && nchar != "") {
        var tst1 = val.value.substring(0, i + 1);

        if (nchar.search(expr) != 0)
          var tst2 = val.value.substring(i + 2, pass.length);
        else var tst2 = val.value.substring(i + 1, pass.length);

        val.value = tst1 + "/" + tst2;
      }
    } else if (i == 4) {
      if (lchar.search(expr) != 0) {
        var tst1 = val.value.substring(0, i);
        val.value = tst1;
        continue;
      }

      if (nchar != "/" && nchar != "") {
        var tst1 = val.value.substring(0, i + 1);

        if (nchar.search(expr) != 0)
          var tst2 = val.value.substring(i + 2, pass.length);
        else var tst2 = val.value.substring(i + 1, pass.length);

        val.value = tst1 + "/" + tst2;
      }
    }

    if (i >= 6) {
      if (lchar.search(expr) != 0) {
        var tst1 = val.value.substring(0, i);
        val.value = tst1;
      }
    }
  }

  if (pass.length > 10) val.value = val.value.substring(0, 10);
  return true;
}

/* DOM MANIPULATE */

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

let dateField = document.getElementById("date").value;
