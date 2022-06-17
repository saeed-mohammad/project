let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    // console.log("click");
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.innerText);
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "←":
        display.innerText = display.innerText.slice(0, -1);
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Invalid";
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});

// buttons.map(function (button) {
//   button.addEventListener("click", function (e) {
//     console.log("click");
//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.innerText);
//   });
// });
