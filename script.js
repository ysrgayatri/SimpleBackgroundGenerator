var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("btn");

function setGradient(){
    body.style.background = "linear-gradient(to right," 
    + color1.value 
    + "," 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";" ;
}

function selectRandomColor(){
    var x=Math.round(0xffffff * Math.random()).toString(16);
    var y=(6-x.length);
    var z="000000";
    var z1 = z.substring(0,y);
    var randomColor= "#" + z1 + x;
    randomColor.innerHTML = "#" + randomColor;
    return randomColor;

}

function setRandom(){
    rcolor1 = selectRandomColor();
    rcolor2 = selectRandomColor();
    body.style.background = "linear-gradient(to right," 
    + rcolor1
    + "," 
    + rcolor2
    + ")";

    css.textContent = body.style.background + ";" ;
    color1.value = rcolor1;
    color2.value= rcolor2;
      
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click",setRandom);