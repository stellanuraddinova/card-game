const filmNames = [
  "Black Mirror: Bandersnatch",
  "Divergent",
  "Inception",
  "Interstellar",
  "Lucy",
  "Maze Runner",
];
const cards = document.querySelectorAll(".cards");
let score = 0;

function updateScore() {
  document.getElementById("score").innerText = score;
  localStorage.setItem("score", score);
}

function getRandomFilm() {
  const filmIndex = Math.floor(Math.random() * filmNames.length);
  return filmNames[filmIndex];
}

function showRandomFilm() {
  const randomFilm = getRandomFilm();
  document.getElementById("filmNames").innerText = randomFilm;
  return randomFilm;
}
showRandomFilm();
function shuffleCards() {
  const parent = cards[0].parentNode;
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    parent.appendChild(parent.removeChild(cards[j]));
  }
}
function initGame() {
  let currentFilm = showRandomFilm();

  cards.forEach((card) => {
    card.addEventListener("click", function () {
      const cardImage = this.querySelector(".back img").alt;
      this.querySelector(".card").classList.toggle("flip");

      if (cardImage === currentFilm) {
        score += 1;
        updateScore();
        shuffleCards();
        currentFilm = showRandomFilm();
      }
    });
  });
}
if (localStorage.getItem("score")) {
  score = parseInt(localStorage.getItem("score"), 10);
  updateScore();
}
initGame();
