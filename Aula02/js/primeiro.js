var cor = "";

cor = prompt("Digite a cor vermelho ou azul");

cor = cor.toLowerCase();

if (cor == "azul") {
  document.bgColor = "blue";
} else if (cor == "vermelho") document.bgColor = "red";
else document.bgColor = "white";
