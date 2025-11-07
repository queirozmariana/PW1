function calcularIdade() {
  const anoNascimento = document.getElementById("ano").value;
  const anoAtual = new Date().getFullYear();
  const resultado = document.getElementById("resultado");

  if (anoNascimento === "" || anoNascimento > anoAtual) {
    resultado.textContent = "Por favor, insira um ano válido.";
    resultado.style.color = "red";
  } else {
    const idade = anoAtual - anoNascimento;
    resultado.textContent = `Você tem ${idade} anos.`;
    resultado.style.color = "#007bff";
  }
}
