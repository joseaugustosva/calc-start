function calcular() {
  //resgatando o valor de select das operações
  var operacao = document.getElementById("operacao").value;

  //resgatando o valor dos campos input para o calculo
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;

  //Condição para quando a pessoa não digita algum valor no campo input
  if (num1 == "" || num1 == null) {
    alert("Digitar um número válido no PRIMEIRO campo");
    return false;
  }

  if (num2 == "" || num2 == null) {
    alert("Digitar um número válido no SEGUNDO campo");
    return false;
  }

  //Forçando o tipo da variável
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  //variável resultado
  var resultado = null;

  switch (operacao) {
    case "1": //Adição
      resultado = num1 + num2;
      break;

    case "2": //Subtracao
      resultado = num1 - num2;
      break;

    case "3": //Multiplicação
      resultado = num1 * num2;
      break;

    case "4": //Divisão
      resultado = num1 / num2;
      break;

    default:
      alert("Opção inválida, escolha uma operação!");
      return false;
  }

  document.getElementById("resultado").value = resultado;
}
