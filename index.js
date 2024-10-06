var checkBox = document.querySelector("input");
var bgColor = document.querySelector("body");
var dark = localStorage.getItem("darkTrue");
// show dark mode on loading...
if (dark === "true") {
  bgColor.style.backgroundColor = "#262626";
  checkBox.checked = true;
}
// checkbox checked event and dark mode add.
document.querySelector("input").addEventListener("click", () => {
  localStorage.setItem("darkTrue", checkBox.checked);
  if (checkBox.checked == true) {
    bgColor.style.backgroundColor = "#282828";
  } else {
    bgColor.style.backgroundColor = "#fff";
  }
});