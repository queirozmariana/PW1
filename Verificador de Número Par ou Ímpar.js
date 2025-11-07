function verificarNumero() {
  const numero = document.getElementById("numero").value;
  const resultado = document.getElementById("resultado");

  if (numero === "") {
    resultado.textContent = "Por favor, digite um número.";
    resultado.style.color = "red";
  } else {
    if (numero % 2 === 0) {
      resultado.textContent = `O número ${numero} é PAR.`;
      resultado.style.color = "#43e97b";
    } else {
      resultado.textContent = `O número ${numero} é ÍMPAR.`;
      resultado.style.color = "#38f9d7";
    }
  }
}


