const $screen = document.getElementById("screen");
const $button = document.querySelectorAll("span");

const $operator = document.querySelector(".operator");
const $clear = document.getElementById("clear");
const $equals = document.getElementById("equals");

$button.forEach((button) => {
  button.addEventListener("click", () => {
    const $buttonValue = button.textContent;
    $screen.textContent = $screen.textContent + button.textContent;
    const numbers = math($screen.textContent);

    $clear.addEventListener("click", () => {
      $screen.textContent = "";
    });
  });
});

function math(string) {
  let mathed = parseFloat(string, 10);
  return mathed;
}
