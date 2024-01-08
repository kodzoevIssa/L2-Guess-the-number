let name = "";
let number = Math.floor(Math.random() * 100);
let guesses = 0;

const output = document.querySelector("#output");
const promptG = document.querySelector("#prompt");
const input = document.querySelector("#prompt input");
const restart = document.querySelector("#Restart");

restart.addEventListener("click", reset);

function reset() {
  name = "";
  number = Math.floor(Math.random() * 100);
  guesses = 0;

  clearOutput();
  document.body.append(promptG);

  printMessage("Введите своё имя");

  input.focus();
}

promptG.addEventListener("submit", handleSubmit);

printMessage("Введите своё имя");

input.focus();

function handleSubmit(event) {
  event.preventDefault();

  processInput(input.value);

  input.value = "";
}

function printMessage(message) {
  let li = document.createElement("li");

  li.textContent = message;

  output.appendChild(li);
}

function clearOutput() {
  for (let i = 0; i < output.children.length; i++) {
    output.removeChild(output.children[i]);
  }
}

function processInput(input) {
  if (!input) return;

  if (!name) {
    name = input;
    clearOutput();
    printMessage(
      `${input}, Загадано число от 0 до 100. Попробуй отгадать его за наименьшее количество попыток. После каждой попытки я подскажу "мало" или "много".`
    );
    return;
  }

  printMessage(input);

  let guess = Number.parseInt(input);

  if (Number.isNaN(guess)) {
    printMessage("Введите число!");
    return;
  }

  guesses += 1;
  if (guess < 0 || guess >= 101) {
    alert("Такого числа быть не может");
  }

  if (guess > number) {
    printMessage("Много, попробуй еще.");
  } else if (guess < number) {
    printMessage("Мало, попробуй еще.");
  } else {
    printMessage(`Верно, это число ${guess}.`);
    printMessage(`Колличество попыток: ${guesses}.`);
    printMessage("GAME OVER");

    promptG.remove();
  }
}
