const containerEl = document.querySelector(".container");

const careers = [
  "a Java Full Stack Developer: Skilled in front-end, back-end Java, and SQL.",
  "currently interning at ArcusInfotech as a Full Stack Java Developer since May 2024.",
  "a Portfolio Enhancer: Improving my portfolio with a clean, minimalistic design."
];

let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `<h1>I am ${careers[careerIndex].slice(0, characterIndex)}</h1>`;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }

  setTimeout(updateText, 150); // Adjust speed as per your preference
}
