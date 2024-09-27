function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem-location", {
    strings:
      "Por estas razones y por muchas más, hoy te envío mi más cálido abrazo.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
