var modal = document.getElementById('box');

var btn = document.getElementById("button");

var link = document.getElementById('link');

var color = ["#0000ff"];
var i = 0;
document.querySelector("button").addEventListener("click",function(){
    i = i < color.length ? ++i : 0;
    document.querySelector("body").style.background = color[i]
})

btn.onclick = function() {
  modal.style.display = "block";
  link.setAttribute('src', link.getAttribute('data-src'));
}

var box = document.getElementById("close");

box.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}