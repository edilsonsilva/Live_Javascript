function dataExemplo() {
  var dt = prompt("Digite a data completa do seu aniversário");
  //  1  2   3  4   5   6   7  8  9  10 Quantidade

  //  2  3  /   0   4   /   2  0  0  0  Data

  //  0  1  2   3   4   5   6  7  8  9  Posição

  if (dt.length < 10 || dt.length > 10) {
    alert("Você deve inserir a data completa");
  } else {
    var dia = dt.substring(0, 2);
    var mes = dt.substring(3, 5);
    var ano = dt.substring(6, 10);
    console.log(mes);

    switch (mes) {
      case "01":
        mes = "Janeiro";
        break;
      case "02":
        mes = "Fevereiro";
        break;
      case "03":
        mes = "Março";
        break;
      case "04":
        mes = "Abril";
        break;
      case "05":
        mes = "Maio";
        break;
      default:
        mes = "Inexistente";
        break;
    }
    alert("Você nasceu em " + dia + " de " + mes + " de " + ano);
  }
}
