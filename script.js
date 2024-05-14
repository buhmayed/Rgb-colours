// RGB Colors
document.getElementById("previewBtn").addEventListener("click", rgbpreview);

function rgbpreview() {
  let rvalue = +document.getElementById("redBG").value;
  let gvalue = +document.getElementById("greenBG").value;
  let bvalue = +document.getElementById("blueBG").value;

  let rgbString = "rgb(" + rvalue + ", " + gvalue + ", " + bvalue + ")";

  document.getElementById("btn").innerHTML = rgbString;
  document.getElementById("display").style.background = rgbString;
}
