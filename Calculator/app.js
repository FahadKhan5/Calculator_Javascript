const screen = document.querySelector(".calculator-screen");
const buttons = document.querySelectorAll(".calculator-keys button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.value;

    if (value === "all-clear") {
      screen.value = "0";
    } else if (value === "rmv") {
      screen.value = screen.value.slice(0, -1);
    } else if (value === "=") {
      try {
        const result = eval(screen.value);
        screen.value = result;
      } catch (error) {
        screen.value = "Error";
      }
    } else {
      if (screen.value === "0") {
        screen.value = value;
      } else {
        screen.value += value;
      }
    }
  });
});

if (screen.value === "") {
  screen.value = "0";
}