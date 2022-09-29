let perguntas = [
  {
    titulo: "Gato 🐱",
    alt: ["Gat", "Cat", "Gate", "Catt"],
    correta: 1,
  },
  {
    titulo: "Fire 🔥",
    alt: ["Fogo", "Fila", "Fazer", "Água"],
    correta: 0,
  },
  {
    titulo: "Água 💦",
    alt: ["Walter", "Watter", "Wether", "Water"],
    correta: 3,
  },
  {
    titulo: "Leite 🥛",
    alt: ["Latter", "Latt", "Mik", "Milk"],
    correta: 3,
  },
  {
    titulo: "Carro 🚗",
    alt: ["Car", "Carr", "Motor", "Automottor"],
    correta: 0,
  },
  {
    titulo: "Pedra 🗿",
    alt: ["Pedd", "Padder", "Stone", "Stave"],
    correta: 3,
  },
  {
    titulo: "Árvore 🌳",
    alt: ["Leaves", "Tree", "Three", "Rock"],
    correta: 1,
  },
  {
    titulo: "Bottle 🍾",
    alt: ["Bolhas", "Bolha", "Bola", "Garrafa"],
    correta: 3,
  },
];
let app = {
  start: function () {
    this.Atualpos = 0;
    this.Totalpontos = 0;
    let alts = document.querySelectorAll(".alter");
    alts.forEach((element, index) => {
      element.addEventListener("click", () => {
        this.checaResposta(index);
      });
    });
    this.atualizaPontos();
    app.mostraquestao(perguntas[this.Atualpos]);
  },

  mostraquestao: function (q) {
    this.qatual = q;
    //mostrando título
    let titleDiv = document.getElementById("titulo");
    titleDiv.textContent = q.titulo;
    //mostrando alternativas
    let alts = document.querySelectorAll(".alter");
    alts.forEach(function (element, index) {
      element.textContent = q.alt[index];
    });
  },

  Proximaperg: function () {
    this.Atualpos++;
    if (this.Atualpos == perguntas.length) {
      this.Atualpos = 0;
    }
  },

  checaResposta: function (user) {
    if (this.qatual.correta == user) {
      console.log("Correta");
      this.Totalpontos++;
      this.mostraresposta(true);
    } else {
      console.log("Errada");
      this.mostraresposta(false);
    }
    this.atualizaPontos();
    this.Proximaperg();
    this.mostraquestao(perguntas[this.Atualpos]);
  },
  atualizaPontos: function () {
    let scoreDiv = document.getElementById("pontos");
    scoreDiv.textContent = `Sua pontuacao: ${this.Totalpontos}`;
  },

  mostraresposta: function (correto) {
    let resultDiv = document.getElementById("result");
    let result = "";
    // formate a mensagem a ser exibida
    if (correto) {
      result = "Resposta Correta!";
    } else {
      // obtenha a questão atual
      let pergunta = perguntas[this.Atualpos];
      // obtenha o índice da resposta correta da questão atual
      let cindice = pergunta.correta;
      // obtenha o texto da resposta correta da questão atual
      let ctexto = pergunta.alt[cindice];
      result = `Incorreto! Resposta Correta: ${ctexto}`;
    }
    resultDiv.textContent = result;
  },
};

app.start();
