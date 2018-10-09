
var number = document.getElementById("number");
var button = document.getElementById("button");

button.onclick = function (){
  number.innerHTML = Math.floor(Math.random()*5+1);
}