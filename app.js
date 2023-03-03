"use strict";

const jokeEl = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

const generateJoke = async () => {
  try {
    const response = await fetch("https://icanhazdadjoke.com", {
      headers: { Accept: "application/json" },
    });

    const data = await response.json();
    jokeEl.innerHTML = data.joke;
  } catch (err) {
    console.log(err);
  }
};

jokeBtn.addEventListener("click", generateJoke);

generateJoke();
