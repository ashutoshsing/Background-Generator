var css=document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient")
//listening to an event where the color code changes to the input entered by the userr

function setGradient(){
	body.style.background = "linear-gradient(to right," + color1.value +", " + color2.value + ")";
}

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);