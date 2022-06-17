let string = "";
let buttons = document.getElementsByTagName("button");

Array.from(buttons).forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.innerText == "=") {
      try {
        string = eval(string);
        document.querySelector("input").value = string;
      } catch {
        document.querySelector("input").value = "invalid";
      }
    } else if (e.target.innerText == "←") {
      string = document.querySelector("input").value.slice(0, -1);
      document.querySelector("input").value = string;
    } else if (e.target.innerText == "C") {
      string = "";
      document.querySelector("input").value = string;
    } else {
      string += e.target.innerText;
      document.querySelector("input").value = string;
    }
  });
});
