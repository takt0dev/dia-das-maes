const botao = document.getElementById('btn');
const mensagem = document.getElementById('mensagem');
const musica = document.getElementById('musica');

const texto = `> Seu filho nerd tem que te dar um presente nerd, né? KKKK

> Mas agora falando sério...

> Mãe, você é o meu código-fonte. 💻❤️

> A origem de tudo o que sou, e o motivo pelo qual quero ser sempre alguém melhor.

> Você me ensinou a ser forte, gentil, dedicado e a nunca desistir, mesmo quando tudo parece difícil.

> Obrigado por todos os dias em que me ouviu, me abraçou, me levantou.

> Por todo amor, por todo carinho, e por estar sempre do meu lado, mesmo quando eu erro.

> Você é a mulher mais incrível do mundo, e eu tenho muito orgulho de ser seu filho.

> Feliz Dia das Mães! Eu te amo muito! 💖`;


botao.addEventListener('click', () => {
  escreverMensagem(texto);
  tocarMusica();
  criarCorações();
  botao.disabled = true;
});

function escreverMensagem(texto) {
  let i = 0;
  mensagem.textContent = '';
  mensagem.classList.remove('hidden');

  const intervalo = setInterval(() => {
    mensagem.textContent += texto[i];
    i++;
    if (i === texto.length) clearInterval(intervalo);
  }, 40);
}

function tocarMusica() {
  musica.play();
}

function criarCorações() {
  for (let i = 0; i < 30; i++) {
    const coracao = document.createElement('div');
    coracao.className = 'heart';
    coracao.style.left = Math.random() * 100 + 'vw';
    coracao.style.animationDuration = 4 + Math.random() * 4 + 's';
    document.body.appendChild(coracao);

    setTimeout(() => {
      coracao.remove();
    }, 8000);
  }
}
