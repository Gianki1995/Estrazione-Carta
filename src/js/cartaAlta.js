let buttonTag = document.querySelector("button#gioca");
let messTag = document.querySelector("h2#messaggio");
let youCard = document.querySelector("div#you span");
let cpuCard = document.querySelector("div#cpu span");
let borderTag = document.querySelector("main");
let pathImages = "../../assets/img/";

youCard.innerHTML = "";
cpuCard.innerHTML = "";

messTag.innerHTML = "Clicca il pulsante per giocare...";

buttonTag.addEventListener("click", game);
function game() {
  let youNewNum = Math.floor(Math.random() * 10 + 1);
  let cpuNewNum = Math.floor(Math.random() * 10 + 1);

  let nameCardYou = "card" + youNewNum;
  let nameCardCpu = "card" + cpuNewNum;

  youCard.style.backgroundImage = `url(${pathImages}${nameCardYou}.webp)`;
  cpuCard.style.backgroundImage = `url(${pathImages}${nameCardCpu}.webp)`;


  if (youNewNum > cpuNewNum) {
    messTag.style.color = "#4EB711";
    messTag.innerHTML = "Complimenti! <br> Hai vinto!";
    youCard.style.outline = "10px solid #4EB711";
    youCard.style.opacity = "100%";
    cpuCard.style.outline = "0";
    cpuCard.style.opacity = "50%";
    borderTag.style.borderColor = "#4EB711";
  } else if (youNewNum < cpuNewNum) {
    messTag.style.color = "red";
    messTag.innerHTML = "Ritenta! <br> Sarai più fortunato!";
    youCard.style.outline = "0";
    youCard.style.opacity = "50%";
    cpuCard.style.outline = "10px solid red";
    cpuCard.style.opacity = "100%";
    borderTag.style.borderColor = "red";
  } else {
    messTag.style.color = "#c6c6c6";
    messTag.innerHTML =
      "Parità! <br> Sai come si dice... Mal comune, mezzo gaudio";
    youCard.style.outline = "10px solid #c6c6c6";
    youCard.style.opacity = "50%";
    cpuCard.style.outline = "10px solid #c6c6c6";
    cpuCard.style.opacity = "50%";
    borderTag.style.borderColor = "#c6c6c6";
  }
}
