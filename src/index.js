function displayPoem(response) {
  console.log("Poem generated");
  new Typewriter("#poem-location", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();

  //build api url
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "3bt55of44c88990a4f0ababb8d8f6206";
  let prompt = `User instructions: Generate a Spanish poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem in HTML. Response format should include <p>Poem</p> and trim any surrounding code. Makes usre to follow the user instructions. Sign the poem with SheCodes AI, wrap with <strong> element.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  //make a call to the api

  axios.get(apiUrl).then(displayPoem);
  //display the generated poem
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
