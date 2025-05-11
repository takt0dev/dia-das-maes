const mensagem = `> Seu filho nerd tem que te dar um presente nerd, né? KKKK

> Mas agora falando sério...

> Mãe, você é o meu código-fonte. 💻❤️

> A origem de tudo o que sou, e o motivo pelo qual quero ser sempre alguém melhor.

> Você me ensinou a ser forte, gentil, dedicado e a nunca desistir, mesmo quando tudo parece difícil.

> Obrigado por todos os dias em que me ouviu, me abraçou, me levantou.

> Por todo amor, por todo carinho, e por estar sempre do meu lado, mesmo quando eu erro.

> Você é a mulher mais incrível do mundo, e eu tenho muito orgulho de ser seu filho.

> Feliz Dia das Mães! Eu te amo muito! 💖`;

const btn = document.getElementById("btn");
const mensagemElement = document.getElementById("mensagem");
const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
const musica = document.getElementById("musica");

btn.addEventListener("click", () => {
  btn.style.display = "none";
  escreverMensagem(mensagem, mensagemElement);
  mensagemElement.classList.remove("hidden");
  slider.classList.remove("hidden");
  musica.play();
  iniciarSlider();
});

function escreverMensagem(texto, elemento) {
  let i = 0;
  const intervalo = setInterval(() => {
    elemento.textContent += texto[i];
    i++;
    if (i >= texto.length) {
      clearInterval(intervalo);
    }
  }, 40);
}

let index = 0;
function iniciarSlider() {
  setInterval(() => {
    slides.forEach(slide => slide.classList.remove("ativo"));
    slides[index].classList.add("ativo");
    index = (index + 1) % slides.length;
  }, 3000); // Troca a cada 3 segundos
}

// Corações infinitos
function criarCoracao() {
  const coracao = document.createElement('div');
  coracao.classList.add('heart');
  coracao.style.left = `${Math.random() * 100}vw`;
  document.body.appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, 5000);
}

setInterval(criarCoracao, 200);
