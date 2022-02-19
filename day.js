var c = new Date().getHours();
var sky = document.getElementById("day");
sky.style.backgroundImage = `url(day/${Math.ceil(c/2)}.gif)`;
