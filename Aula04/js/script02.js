// As estruturas de repetição repetem um trecho de cógido específico
//For - While - Do While
/*
 1 - Início da variável
 2 - Condição para repetição
 3 - Corpo de execução
 4 - Incrementação ou decrementação:
        x++ -> incrementação de 1
        x-- -> decrementação de 1

        x+= 3 -> incrementação de valor 3
        x -= 3 -> decrementação de valor 3
*/
function contador() {
  for (var i = 1; i <= 10; i++) {
    console.log(i);
  }
}

function contadorWhile() {
  var i = 1;
  while (i <= 10) {
    console.log(i);
    i++;
  }
}

function contadorDoWhile() {
  var i = 0;
  do {
    console.log(i);
    i++;
  } while (i <= 10);
}
