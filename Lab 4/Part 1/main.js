const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const characters = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const places = ["the soup kitchen", "Disneyland", "the White House"];
const events = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and slithered away"];

function returnRandomStoryString() {
  const randomCharacter = randomValueFromArray(characters);
  const randomPlace = randomValueFromArray(places);
  const randomEvent = randomValueFromArray(events);

  return `It was 94 Fahrenheit outside, so ${randomCharacter} went for a walk. When they got to ${randomPlace}, they stared in horror for a few moments, then ${randomEvent}. Bob saw the whole thing, but was not surprised — ${randomCharacter} weighs 300 pounds, and it was a hot day.`;
}

function generateStory() {
  let newStory = returnRandomStoryString();

  if (customName.value !== "") {
    newStory = newStory.replace("Bob", customName.value);
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14) + " stone";
    const temperature = Math.round((94 - 32) * (5 / 9)) + " Celsius";

    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 Fahrenheit", temperature);
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}

generateBtn.addEventListener("click", generateStory);