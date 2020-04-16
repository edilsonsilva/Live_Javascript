var cnpjOriginal = "";
var cnpj12 = "";
var cnpj4 = "";
var cnpj5 = "";
var cnpj8 = "";
var contador5 = 5;
var contador9 = 9;
var contador6 = 6;
var resultado = 0;
var resto = 0;

cnpjOriginal = prompt("Digiteo o cnpj sem pontos ou barras");
cnpj12 = cnpjOriginal.substring(0, 12);
console.log(cnpj12);

cnpj4 = cnpj12.substring(0, 4);
cnpj8 = cnpj12.substring(4, 12);

console.log("Os 4 primeiros " + cnpj4);
console.log("Os 8 restantes " + cnpj8);

for (var i = 0; i <= 3; i++) {
  resultado += cnpj4[i] * contador5;
  contador5--;
}

for (var i = 0; i <= 7; i++) {
  resultado += cnpj8[i] * contador9;
  contador9--;
}

console.log(resultado);
resto = resultado % 11;

if (resto < 2) {
  cnpj12 += "0";
} else {
  cnpj12 += "" + (11 - resto);
}
console.log(cnpj12);

//--------Segundo cálculo do cnpj---------------
resultado = 0;
cnpj5 = cnpj12.substring(0, 5);
cnpj8 = cnpj12.substring(5, 13);

console.log("Os 5 primeiros " + cnpj5);
console.log("Os 8 restantes " + cnpj8);

for (var i = 0; i <= 4; i++) {
  resultado += cnpj5[i] * contador6;
  contador6--;
}

contador9 = 9;
for (var i = 0; i <= 7; i++) {
  resultado += cnpj8[i] * contador9;
  contador9--;
}

console.log(resultado);
resto = resultado % 11;

if (resto < 2) {
  cnpj12 += "0";
} else {
  cnpj12 += "" + (11 - resto);
}
console.log(cnpj12);

if (cnpjOriginal == cnpj12) {
  alert("CNPJ Válido!");
} else {
  alert("CNPJ Inválido!");
}
