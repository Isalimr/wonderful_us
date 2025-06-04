function verificarLogin(event) {
  event.preventDefault();

  const usuario = document.getElementById("usuario").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (usuario === "Dear" && senha === "11/05") {
    window.location.href = "http://127.0.0.1:5500/wonderful_us.html";
  } else {
    document.getElementById("mensagem").style.display = "block";
  }
}
