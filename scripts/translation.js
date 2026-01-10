const IFPRLINK = "<a href='https://ifpr.edu.br/' target='_blank'>IFPR</a>";

const texts = {
  wip: {
    en: "[Content for this section is in progress]",
    pt: "[O conteúdo desta seção está em progresso]",
  },
  back: {
    en: "Back",
    pt: "Voltar",
  },
  "portfolio-title": {
    en: "Bruno Rubim's portfolio",
    pt: "Portifólio de Bruno Rubim",
  },
  "welcome-1": {
    en: "Hi, welcome to my portfolio! Here is where you can find overviews of my work in different projects, written in both English and Brazilian Portuguese.",
    pt: "Olá, bem vind@ ao meu portifólio! Aqui você encontra alguns de meus trabalhos em projetos diferentes, escritos em Português Brasileiro e Inglês.",
  },
  "welcome-2": {
    en: "They will be separated in different sections, depending which area I worked on.",
    pt: "Eles estão separados em diferentes seções, de acordo com a área que trabalhei.",
  },
  "welcome-3": {
    en: "Some projects will be featured in multiple sections given that my work on them involved different areas of art and design.",
    pt: "Alguns projetos estarão em multiplas seções, dado que meu trabalho neles envolveu áreas diferentes de arte e design.",
  },
  "welcome-4": {
    en: "Currently, the only populated sections are Game Design and Game Development",
    pt: "Atualmente, as únicas seções com conteúdo são Design de Jogos e Desenvolvimento de Jogos.",
  },
  "web-title": {
    en: "Web Design/Development",
    pt: "Projetos/Design Web",
  },
  "art-title": {
    en: "Visual Art",
    pt: "Arte Visual",
  },
  "art-link": {
    en: "See Visual Art",
    pt: "Ver Arte Visual",
  },
  "gamedesign-title": {
    en: "Game Design",
    pt: "Design de Jogos",
  },
  "gamedev-title": {
    en: "Game Development",
    pt: "Desenvolvimento de Jogos",
  },
  "gamedev-link": {
    en: "See Game Development",
    pt: "Ver Desenvolvimento do jogo",
  },
  "gamedesign-intro": {
    en: "My works of Game Design",
    pt: "Meus trabalhos de Game Design",
  },
  "gamedesign-link": {
    en: "See Game Design",
    pt: "Ver Design do jogo",
  },
  "perito-title": {
    en: `<a href="https://cibernauta-frontend.vercel.app/game/1" target="_blank">Perito dos E-mails (E-mail expert)</a>`,
    pt: `<a href="https://cibernauta-frontend.vercel.app/game/1" target="_blank">Perito dos E-mails</a>`,
  },
  "perito-note": {
    en: "Notes:<br>The platform requires a login to access the game.<br>The project and game are currently only avaliable in brazilian portuguese.<br>Due to issues in hosting the platform may have long loading times.",
    pt: "Notas:<br>A plataforma requer um login para acessar o jogo.<br>Por contas de problemas com hospedagem, a plataforma pode demorar para carregar.",
  },
  "perito-gen-1": {
    en: `This was part of my final project as a system development student at ${IFPRLINK}, an educational web game that ran on Javascript to teach about malicious e-mails.`,
    pt: `Esse foi parte do meu trabalho final como aluno do curso Tecnólogo em Análise e Desenvolvimento de Sistemas no ${IFPRLINK}, um jogo web feito em Javascript para ensinar sobre e-mails maliciosos.`,
  },
  "perito-design-1": {
    en: "The player is faced with a sequence of levels, each with a list of e-mails they must classify according to the taught rules. Each level introduces new rules and the e-mails become increasingly subtle, having a sense of progression and allowing them to reach the subtleness of their real life counterparts.",
    pt: "O jogador se depara com uma sequência de níveis, cada com uma lista de e-mails que eles devem classificar de acordo com as regras ensinadas. Cada nível introduz novas regras e os e-mails ficam mais sutis, dando uma progressão e permitindo que os e-mails chegem à sutileza dos encontrados na vida real.",
  },
  "perito-design-2": {
    en: "E-mails are composed of elements: the sender's name, e-mail address and picture, as well as the text content of the e-mail. Pointing out suspicious elments according to the criterea taught through the game results in higher scores at the end of the level.",
    pt: "E-mails são compostos de elementos: o nome do remetente, endereço de e-mail e foto, além do conteúdo de texto do e-mail. Apontar elementos suspeitos de acordo com os critérios ensinados durante o jogo resulta em uma pontuação maior no final do nível.",
  },
  "perito-design-3": {
    en: "To engage the players, the platform where we featured the game was built with a leaderboard. The sum of the highscore of each completed level resuletd on the value shown on the leaderbord, incentivizing players to perfect their skills on analyzing and spotting suspicious elements.",
    pt: "Para o engajamento dos jogadores, a plataforma que fizemos possúi um placar de pontuações. A soma da pontuação recorde em cada nível resulta no valor inserido no placar, incentivando os jogadores a aperfeiçoar suas abilidades de analize e identificar elementos suspeitos.",
  },
  "perito-dev-1": {
    en: "Both to have an easy way to use systems of front/back end communication already learned at the course, as well as make use of skills I developed while experimenting with Javascript on my own time, with projects like Disc-Bot and Worm Sweeper, it was decided this project would run in Javascript (written in Typescript). For this a system comparable to a crude game engine was designed.",
    pt: `Tanto para ter um fácil acesso aos sistemas de comunicação com front/back já aprendidos no curso, quanto usar fazer uso das habilidades que desenvolvi durante experimentos com Javascript no meu tempo pessoal, com projetos como Disc-Bot e Worm Sweeper, foi decidido que esse projeto rodaria em Javascript (escrito em Typescript). Para isso, um sistema comparável á uma game engine rudimentar foi projetada.`,
  },
  "perito-dev-2": {
    en: `What follows is a diagram and explanation of a simplified version of this system. The finished product features multiple sublcasses and aditional objects but this is the barebones of the structure and logic.`,
    pt: `O que segue são um diagrama e explicações de uma versão simplificada desse sistema. O produto final possúi multiplas subclasses e objetos adicionais mas esse é o básico da estrutura e lógica.`,
  },
  "perito-dev-3": {
    en: `The game is made up of "GameObject"s, each holding information such as their HTML image element used as a "Sprite", 2d coordinates, the dimentions of their hitbox and interaction functions. Using a canvas HTML element to render the visuals, a "CanvasObject" was made to have custom functions to draw sprites of said element. "Scenes" were also made to hold an array of GameObjects, those would make up the game's different screens, such as the desktop screen, or the level selection screen.`,
    pt: `O jogo é composto de "Objetos de Jogo", cada um guarda informações como seu elemento de imagem HTML usado como um "Sprite", coordenadas 2d, as dimensções de sua hitbox e funções de interação. Usando um elmento de canvas para renderizar os visuais, um "Objeto de Canvas" foi feito para guardar funções customizadas para desenhar sprites de elementos. "Cenas" foram também feitas para guardar uma lista de Objetos de Jogo, que compõe as diferentes telas do jogo, como a tela da área de trabalho ou a de seleção de níveis.`,
  },
  "perito-dev-4": {
    en: `A class called "GameState" holds a few properties and functions, most importantly "currentScene" that represents the Scene the player would be interacting with at any given moment. It also has acces to the savesService, being able to load and update the player's save data on the platform.<br>Another object, called "InputState", using eventListeners hold the player's input stuate, such as which keys were pressed, held down or not at all, mouse clicks, mouse movement, etc.`,
    pt: `Uma classe chamada "Estado de Jogo" guarda algumas propriedades e funções, mais importante sendo a "Cena Atual" que representa a Cena cjua qual o jogador estará interagindo em qualquer momento do jogo. Ele também tem acesso à service de salvamento, podendo carregar e atualizar os dados do salvamento com a plataforma.<br>Outro objeto chamado "Estado de Input" usa eventListeners para guardar o estado de input do jogador, como quais teclas estão pressionadas, seguradas, soltas, cliques do mouse, movimento do mouse, etc.`,
  },
  "perito-dev-5": {
    en: `Those in combination with an "updateGameState" function update the GameObjects in a gameState's currentScene, checking things like if the mouse had clicked, its position was within any GameObject's hitbox and then calling the object's interaction function, which could affect the gameState.<br>Another function is "renderScene" which goes through a scene's list of gameObjects and calls their render function with a given canvasObject, rendering the current frame of the game.`,
    pt: `Estes objetos junto com uma função "atualizar Estado de Jogo" atualizam os Objetos de Jogo da Cena Atual de um Estado de Jogo, verificando coisas como se o mouse clicou, se sua posição estava dentro da hitbox de um Objeto de Jogo e então chamando a função de interação do objeto, que poderia afetar o Estado de Jogo.<br>Outra função é "Renderizar Cena" que passa pela lista de Objetos de Jogo de uma cena e chama sua função de renderizar com um dado Objeto de Canvas, renderizando o frame atual do jogo.`,
  },
  "perito-dev-6": {
    en: `A file called "gameManager" creates a gameState, as well as a canvasObject with the given HTML canvas element reference. With both instances it starts a loop using requestAnimationFrame, where it calls the functions to update the gameState instance and to render its currentScene using the canvasObject.`,
    pt: `Um arquivo chamado "Gerenciador do Jogo" cria um Estado de Jogo e um Objeto de Canvas com uma dada referência de um elemento HTML de canvas. Com ambas instâncias um loop é iniciado usando requestAnimationFrame, que chama as funções para atualizar o Estado de Jogo e renderizar sua Cena Atual usando o Objeto de Canvas.`,
  },
  "perito-art-1": {
    en: `The game takes place inside a 2000's style computer, reminiscent of operating systems like <a href="https://en.wikipedia.org/wiki/Windows_XP" target="_blank">Windows XP</a>. Pixel art was chosen as the medium with a total screen size of 352x256. The game's actual screen size can scale up (without decimal values) to 3 times its size, keeping it pixel perfect but still being easily visible on the screen. For collor palette it was chosen <a href="https://www.tumblr.com/go-crag-go/151152049181/grafxkids-today-land-palette-release" target="_blank">"GrafxKid’s Today Land"</a>, with some small aditions, both for its pleasing color tones and simmilarity to the chosen visual style.`,
    pt: `O jogo se situa em um computador do estilo de 2000, com um visual similar de sistemas opreacionais como <a href="https://pt.wikipedia.org/wiki/Windows_XP" target="_blank">Windows XP</a>. O meio de arte foi escolhido como pixel art em uma tela de 352x256 de tamanho total. O tamanho real da tela do jogo pode ser escalado (sem valores decimais) até 3 vezes seu tamanho, se mantendo "pixel perfect" (sem esticar os pixels) mas ainda facilmente visível na tela. Para a palheta de cores foi escolhido <a href="https://www.tumblr.com/go-crag-go/151152049181/grafxkids-today-land-palette-release" target="_blank">"Today Land de GrafxKid’s"</a>, com algumas pequenas adições, tanto para cores agradáveis e similaridade com o estilo visual escolhido para o jogo.`,
  },
  "perito-art-2": {
    en: `The game was devided into several screens, those being the desktop, saves, level selection, email, score and configuration screens.`,
    pt: `O jogo é dividido em várias "telas", sendo a área de trabalho, salvamento de progresso, seleção de níveis, emails, pontuação e configurações.`,
  },
  "perito-art-desktop": {
    en: `On the desktop screen, icons representing different actions and travel between screens are featured in a solid blue background.`,
    pt: `Na tela da área de trabalho existem ícones representando diferentes ações e mudança entre cenas em um fundo azul.`,
  },
  "perito-art-icon-mail": {
    en: `Icon for the level selection screen<br>A mail envelope with the 3 buttons of e-mail classification used during levels.`,
    pt: `Ícone para a tela de seleção de nível<br>Um envelope de correspondência com os 3 botões de classificação de emails usados nos níveis.`,
  },
  "perito-art-icon-saves": {
    en: `Icon for the save selection screen<br>A box with user avatars icons, similar to that screen's visual design.`,
    pt: `Ícone para a tela de seleção e salvamento de progresso.<br>Uma caia com ícones de avatares de usuários, similiar ao estilo visual da tela em questão.`,
  },
  "perito-art-icon-save": {
    en: `Icon for manual saving<br>A floppy disc, commonly associated with saving data.`,
    pt: `Ícone para o salvamento manual<br>Um disquete, comumente associado com salvamento de dados.`,
  },
  "perito-art-icon-options": {
    en: `Icon for the options screen<br>A set of gears, commonly used for settings and options.`,
    pt: `Ícone para a tela de opções<br>Engrenagens, comumente usado para configurações e preferências.`,
  },
  "perito-art-saves": {
    en: `Derived from profile selection in old computers and how often diferent save slots are used as the different saves of different players, the save selection screen is a blue background with avatar icons, each avatar representing a save slot. An empty save being represented in gray and used saves with bright colors.`,
    pt: `Inspirado por seleções de perfil em computadores antigos e como salvamentos de progressos diferentes são comumente usados como progressos de jogadores diferentes, a tela de salvamento de progresso é um fundo azul escuro com ícones de avatares, cada avatar representando um espaço de progresso. Um progresso vazio sendo representado em cinza e salvamentos com progresso com cores vivas distintas.`,
  },
  "perito-art-levels": {
    en: `In reference to an e-mail inbox, the levels are displayed like new emails, each unlocked level appearing like a new email at the top of the list. Levels also have a slot for a completion badge, being empty when a level has not been completed, having a green check mark to show that a level has been completed, or a shiny shield medal for when a level has been completed without errors.`,
    pt: `Fazendo referência à uma caixa de entrada de sistemas de email, os níveis aparecem como novos emails, cada  nível desbloqueado aparecendo como um novo email na lista. Níveis também possuem um espaço para uma medalha de progresso, estando vazio para um nível ainda não completo, uma marca verde para um nível que foi concluído, ou uma medalha brilhante para um nível que foi concluído sem erros.`,
  },
  "cibernauta-title": {
    en: `<a href="https://cibernauta-frontend.vercel.app" target="_blank">Cibernauta</a>`,
    pt: `<a href="https://cibernauta-frontend.vercel.app" target="_blank">Cibernauta</a>`,
  },
  "wormsweeper-title": {
    en: `<a href="https://bruno-rubim.github.io/worm_sweeper" target="_blank">Worm Sweeper</a>`,
    pt: `<a href="https://bruno-rubim.github.io/worm_sweeper" target="_blank">Worm Sweeper</a>`,
  },
  "miniscale-title": {
    en: `<a href="https://poryphyr73.itch.io/mini-scale" target="_blank">Mini-Scale</a>`,
    pt: `<a href="https://poryphyr73.itch.io/mini-scale" target="_blank">Mini-Scale</a>`,
  },
  "website-title": {
    en: `Personal Website`,
    pt: `Website Pessoal`,
  },
  "snc-title": {
    en: `Site and Circuit`,
    pt: `Site and Circuit`,
  },
  "dbirl-title": {
    en: `Death Battle in Real Life`,
    pt: `Batalha até a Morte na Vida Real`,
  },
  "discbot-title": {
    en: `DiscBot`,
    pt: `DiscBot`,
  },
};

let leng = localStorage.getItem("language");
if (!leng) {
  leng = "en";
}

/**
 * Checks for elements with its id as a keys in the texts object and replaces its innerHTML with the corresponding string and current set language
 */
function translate() {
  for (const key in texts) {
    const element = document.querySelector("#" + key);
    if (!element) {
      continue;
    }
    element.innerHTML = texts[key][leng];
  }
}

const altImages = {
  "perito-dev-diagram": {
    en: "img/mail_game/dev_diagram_0.png",
    pt: "img/mail_game/dev_diagram_0_pt.png",
  },
};

function altImage() {
  for (const key in altImages) {
    const image = document.querySelector("#" + key);
    if (!image) {
      continue;
    }
    image.src = altImages[key][leng];
  }
}

function setLanguage(language) {
  leng = language;
  localStorage.setItem("language", language);
  translate();
  altImage();
}

translate();
altImage();
