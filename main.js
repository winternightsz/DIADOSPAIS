const mensagem = document.getElementById("mensagem");
const textoMensagem = document.getElementById("texto-mensagem");
const botaoIniciar = document.getElementById("botao-iniciar");

// Texto da mensagem que será animada
const texto = "Você é o melhor pai do mundo?";

// Velocidade da animação do texto (em milissegundos)
const velocidadeAnimacao = 100;

// Função para animar o texto da mensagem
function animarTexto() {
	let i = 0;
	const intervalo = setInterval(() => {
		textoMensagem.textContent += texto[i];
		i++;
		if (i > texto.length - 1) {
			clearInterval(intervalo);
			botaoIniciar.classList.remove("escondido");
		}
	}, velocidadeAnimacao);
}

// Adicionar evento de clique ao botão "Iniciar"
botaoIniciar.addEventListener("click", () => {
	// Redirecionar para a página desejada
	window.location.href = "novapagina.html";
});

// Chamar a função de animação do texto
animarTexto();
