var c = new Date().getHours();
console.log(c)
var sky = document.getElementById("day");
sky.style.backgroundImage = `url(day/${Math.ceil(c/2)}.gif)`