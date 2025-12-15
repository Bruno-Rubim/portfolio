const texts = {
  back: {
    en: "Back",
    pt: "Voltar",
  },
  "portfolio-title": {
    en: "Bruno Rubim's portfolio",
    pt: "Portifólio de Bruno Rubim",
  },
  "welcome-1": {
    en: "Hi, welcome to my portfolio! Here is where you can find overviews of my work in different projects.",
    pt: "Olá, bem vind@ ao meu portifólio! Aqui você encontra alguns de meus trabalhos em projetos diferentes.",
  },
  "welcome-2": {
    en: "They will be separated in different sections, depending which area I worked on.",
    pt: "Eles estão separados em diferentes seções, de acordo com a área de trabalho na qual eu atuei.",
  },
  "welcome-3": {
    en: "Some projects will be featured in multiple sections given that my work on them involved different areas of art and design.",
    pt: "Alguns projetos estarão em multiplas seções, dado que meu trabalho neles envolveu áreas diferentes de arte e design.",
  },
  "welcome-4": {
    en: "Currently, the only populated section is Game Design",
    pt: "Atualmente, a única seção com conteúdo é Game Design.",
  },
  "web-title": {
    en: "Web Design/Development",
    pt: "Projetos/Design Web",
  },
  "art-title": {
    en: "Visual Art",
    pt: "Arte Visual",
  },
  "gamedesign-title": {
    en: "Game Design",
    pt: "Design de Jogos",
  },
  "gamedev-title": {
    en: "Game Development",
    pt: "Desenvolvimento de Jogos",
  },
  "gamedesign-intro": {
    en: "My works of Game Design",
    pt: "Meus trabalhos de Game Design",
  },
  "perito-title": {
    en: "Perito dos E-mails (E-mail expert)",
    pt: "Perito dos E-mails",
  },
  "perito-note": {
    en: "Note: The project and game are currently only avaliable in brazilian portuguese.<br>Due to issues in hosting the platform may have long loading times.",
    pt: "Nota: Por contas de problemas com hospedagem, a plataforma pode demorar para carregar.",
  },
  "perito-1": {
    en: "This was part of my final project as a system development student at <a href=''>IFPR</a>, an educational web game made with javascript to teach about malicious e-mails.",
    pt: "Esse foi parte do meu trabalho final como aluno do curso Tecnólogo em Análise e Desenvolvimento de Sistemas no <a href=''>IFPR</a>, um jogo web feito em javascript para ensinar sobre e-mails maliciosos.",
  },
  "perito-2": {
    en: "The player is faced with a sequence of levels, each with a list of e-mails they must classify according to the taught rules. Each level introduces new rules and the e-mails become increasingly subtle, having a sense of progression and allowing them to reach the subtleness of their real life counterparts.",
    pt: "O jogador se depara com uma sequência de níveis, cada com uma lista de e-mails que eles devem classificar de acordo com as regras ensinadas. Cada nível introduz novas regras e os e-mails ficam mais sutis, dando uma progressão e permitindo que os e-mails chegem à sutileza dos encontrados na vida real.",
  },
  "perito-3": {
    en: "E-mails are composed of elements: the sender's name, e-mail address and picture, as well as the text content of the e-mail. Pointing out suspicious elments according to the criterea taught through the game results in higher scores at the end of the level.",
    pt: "E-mails são compostos de elementos: o nome do remetente, endereço de e-mail e foto, além do conteúdo de texto do e-mail. Apontar elementos suspeitos de acordo com os critérios ensinados durante o jogo resulta em uma pontuação maior no final do nível.",
  },
  "perito-4": {
    en: "To engage the players, the platform where we featured the game was built with a leaderboard. The sum of the highscore of each completed level resuletd on the value shown on the leaderbord, incentivizing players to perfect their skills on analyzing and spotting suspicious elements.",
    pt: "Para o engajamento dos jogadores, a plataforma que fizemos possúi um placar de pontuações. A soma da pontuação recorde em cada nível resulta no valor inserido no placar, incentivando os jogadores a aperfeiçoar suas abilidades de analize e identificar elementos suspeitos.",
  },
};

let leng = localStorage.getItem("language");
if (!leng) {
  leng = "en";
}

function translate() {
  for (const key in texts) {
    const element = document.querySelector("#" + key);
    if (!element) {
      continue;
    }
    element.innerHTML = texts[key][leng];
  }
}

function setLanguage(language) {
  leng = language;
  localStorage.setItem("language", language);
  translate();
}

translate();
