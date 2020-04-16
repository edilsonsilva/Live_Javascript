//variável guarda apenas 1 dado por vez
//var nomes = "João, Paulo, Vanessa";
//Array é um conjunto de dados sobre um determinado
//assunto.
var produtos = ["Calça", "R$ 150", "Azul", "Jeans"];
var btn = document.getElementById("executar");
btn.onclick = function () {
  var pr = document.getElementById("display");
  pr.innerHTML += "<br>Nome: " + produtos[0];
  pr.innerHTML += "<br>Preço: " + produtos[1];
  pr.innerHTML += "<br>Cor: " + produtos[2];
  pr.innerHTML += "<br>Tecido: " + produtos[3];
};

var btn2 = document.getElementById("mostrar");
var display = document.getElementById("display");
var clientes = [
  ["Nome", "Email", "Telefone", "Idade"],
  ["Bruna", "bruna@terra.com.br", "9956-6633", "20"],
  ["Fabio", "fabio@uol.com.br", "9996-6666", "23"],
  ["Paula", "paula@uol.com.br", "99855-5656", "18"],
];

btn2.onclick = function () {
  var tabela = "<table>";

  for (var lin = 0; lin <= 3; lin++) {
    if (lin == 0) {
      tabela += "<tr class=primeiro>";
    } else {
      tabela += "<tr class=segundo>";
    }

    for (var col = 0; col <= 3; col++) {
      tabela += "<td>" + clientes[lin][col] + "</td>";
    }
    tabela += "</tr>";
  }
  tabela += "</table>";
  display.innerHTML = tabela;
};
