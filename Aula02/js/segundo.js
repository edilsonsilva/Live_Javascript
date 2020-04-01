var imagem = prompt(
  "Digite foto1 ou foto2 e veja o resultado. Obs.: Não coloque espaço"
);
imagem = imagem.toLowerCase();

if (imagem == "foto1") {
  document.getElementById("corpo").style.backgroundImage = "url(img/foto1.jpg)";
} else if (imagem == "foto2") {
  document.getElementById("corpo").style.backgroundImage = "url(img/foto2.jpg)";
} else {
  document.getElementById("corpo").style.backgroundImage = "url(img/foto3.jpg)";
}
