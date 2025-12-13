const texts = {
  "portfolio-title": {
    en: "Bruno Rubim's portfolio",
    pt: "Portifólio de Bruno Rubim",
  },
  "welcome-1": {
    en: "Hi, welcome to my portfolio! Here is where you can find overviews of my work in different projects.",
    pt: "Olá, bem vind@ ao meu portifólio! Aqui você encontra alguns de meus trabalhos em projetos diferentes.",
  },
  "welcome-2": {
    en: "They will be separated in different sections, depending which area of my work is of most interest.",
    pt: "",
  },
  "welcome-3": {
    en: "Some projects will be featured in multiple sections given that my work on them involved different areas of art and design.",
    pt: "",
  },
  "game-design-intro": {
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
    en: "This was part of my final project as a system development student at <a href=''>IFPR</a>, an educational web game made with javascript to teach about malicious emails.",
    pt: "",
  },
  "perito-2": {
    en: "The player is faced with a sequence of levels, each with a list of emails they must classify according to the taught rules. Each level introduces new rules and emails become increasingly subtle, having a sense of progression and allowing them to reach the subtleness of their real life counterparts.",
    pt: "",
  },
  "perito-3": {
    en: "E-mails were composed of elements, the sender's name, e-mail address and picture, as well as the text content of the e-mail. Pointing out suspicious elments according to the criterea taught through the game results in higher scores at the end of the level.",
    pt: "",
  },
  "perito-4": {
    en: "To engage the players, the platform where we featured the game was built with a leaderboard. The sum of the highscore of each completed level resuletd on the value shown on the leaderbord, incentivizing players to perfect their skills on analyzing and spotting suspicious elements.",
    pt: "",
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
