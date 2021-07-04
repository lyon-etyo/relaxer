const container = document.querySelector(".container");
const text = document.querySelector("#text");

const totalTime =  7500;
const breatheTime = totalTime / 5 * 2;
const holdTime = totalTime / 5;

breatheAnimation();

setInterval(() => {
  breatheAnimation();
}, totalTime);

async function breatheAnimation() {
  // Start phase "Breathe in"
  text.textContent = "Breath In!";
  container.className = "container grow";

  // Second phase "Hold"
  const hold = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hold")
    }, breatheTime);
  });
  text.textContent = await hold;

  // THird phase "Breathe out"
  const breatheOut = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Breathe Out!")
    }, holdTime);
  });
  text.textContent = await breatheOut;
  container.className = "container shrink";
}