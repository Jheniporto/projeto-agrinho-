function mensagem() {

  alert(
    "Bem-vindo ao projeto AgroTech!"
  );

}

function certa() {

  document.getElementById("resultado").innerHTML =
  "✅ Muito bem! Você escolheu a resposta correta.";

}

function errada() {

  document.getElementById("resultado").innerHTML =
  "❌ Resposta incorreta. Preserve o meio ambiente!";

}
