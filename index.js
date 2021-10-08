let colors = ["red", "yellow", "green"];
let colorElement = document.getElementById("colors");
let i = 0;
setInterval(() => {
  console.log("asass");
  colorElement.style.backgroundColor = colors[i];
  i++;
  if (i === colors.length) i = 0;
}, 2000);
