// некоторый код был взят с сайтов по типу stack overflow, но 92% писал я
function run() {
    let runString = document.getElementById('runString');
    if (!runString) return;

    let strings = [
        'сlose the page. there\'s nothing here.',
    ]

    let sec = 450,
        brSec = 150,
        i = 0,
        ai = 0,
        w = undefined;

    setInterval(() => {
        if (i == 3 && ai == 23) return;
        if (!w) w = strings[i].split('');

        runString.innerHTML = runString.innerHTML + w[ai];
        ai++;
        if (ai + 1 == w.length + 1) {
            ai = 0;
            i++;
            w = strings[i];
            setTimeout(() => runString.innerHTML = runString.innerHTML + "<br>", brSec);
        }
    }, sec);
}

run();

var phrases = [
    "шз теперь СО ЗВУКОМ!",
    "ЧИГОООО",
    "да",
    "aka manul",
    "schzguy",
    "я бос7",
    "чт",
    "ЧТОО?!?!?!?!?",
    "never gonna give you up"
  ];

  function getRandomPhrase() {
    var randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
  }

  var randomTextElement = document.getElementById("randomText");
  randomTextElement.innerText = getRandomPhrase();



  let num = Math.floor(Math.random() * 11);
  let favIco = document.querySelector('#fav-ico');
  
  function setFavIcon(number) {
    let img = new Image();
    img.onload = function() {
      favIco.href = "img/icon-" + number + ".png";
    };
    img.onerror = function() {
      let randomReplacement = Math.floor(Math.random() * 11);
      favIco.href = "img/icon-" + randomReplacement + ".png";
    };
    img.src = "img/icon-" + number + ".png";
  }
  
  setFavIcon(num);

function steam(event) {
    if (event.key === "1") {
        window.location.href = "https://steamcommunity.com/profiles/76561198982549080";
    }
}

document.addEventListener("keydown", steam);

function discord(event) {
  if (event.key === "2") {
      window.location.href = "https://discord.com/users/155513386258530304";
  }
}

document.addEventListener("keydown", discord);

function github(event) {
  if (event.key === "3") {
      window.location.href = "https://github.com/notmanul/";
  }
}

document.addEventListener("keydown", github);

function github(event) {
  if (event.key === "4") {
      window.location.href = "bio.html";
  }
}

document.addEventListener("keydown", github);

let characterIndex = 0;
const characterImages = [
    "character-0.png"
];

const characterImg = document.getElementById("character");

characterImg.addEventListener("click", () => {
    characterIndex++;
    if (characterIndex >= characterImages.length) {
        characterIndex = 0;
    }
    characterImg.src = "img/" + characterImages[characterIndex];
});

  