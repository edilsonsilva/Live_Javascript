function alterar() {
  document.getElementById("saida").innerHTML = "<h1>Texto de Exemplo</h1>";
  document.getElementById("saida").style.fontFamily = "arial";
  document.getElementById("saida").style.width = "400px";
  document.getElementById("saida").style.height = "300px";
  document.getElementById("saida").style.backgroundColor = "yellow";
}

function verificaSaida() {
  var s = document.getElementById("saida");
  if (s.style.backgroundColor == "yellow") {
    s.style.backgroundColor = "blue";
  } else {
    s.style.backgroundColor = "yellow";
  }
}

function verificaTexto() {
  var texto = prompt("Digite sua data de aniversário");

  //   if (texto.length < 8) {
  //     alert("Digite o seu nome completo");
  //   } else {
  //     alert("Obrigado Sr(a). " + texto);
  //   }

  alert("Você nasceu no mes " + texto.substring(3, 5));
}
