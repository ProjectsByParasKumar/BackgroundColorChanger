const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    switch (e.target.id) {
      default:
        return (body.style.backgroundColor = e.target.id);
    }
  });
});
