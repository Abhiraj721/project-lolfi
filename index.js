var isplaying=false;
var num=0
var vol=0.5;
var checkrain=0;
document.querySelector(".playbtn").innerHTML="<i class='fa fa-play'></i>"
var x=new Audio("/beats/beat"+0+".mp3");
var a=0;

x.addEventListener("ended", function() {
    console.log("um")
    if(num>10)num=1
    else num++;
    console.log(num)
    x=new Audio("/beats/beat"+num+".mp3");
    x.play()
});

var checkedValue = document.querySelector('.messageCheckbox').checked;
 console.log(checkedValue)
 var y=new Audio("/beats/rain.mp3");
 function onInput(element){
    checkrain++;
    y.volume=vol
    if(checkrain%2==0){
       y.pause()
    }
    else y.play()
 }
 function rainvolume(val){
     vol=val/100
    y.volume=val/100
 }
function changebeatback(){
    console.log("im ahere")
    if(num<0)num=10
    else num--
    x.pause()
    x=new Audio("/beats/beat"+num+".mp3");
    x.play()
}
function changebeatforw(){
    if(num>10)num=1
    else num++
    x.pause()
    x=new Audio("/beats/beat"+num+".mp3");
    x.play()
}

function main(){
a++;
console.log(a);

if(a%2==0)isplaying=true
    if(isplaying==false){
        console.log("ddddd")
        document.querySelector(".playbtn").innerHTML="<i class='fa fa-pause'></i>"
      x.play();
      
    }
    else if(isplaying==true){
       audiopause();

    }
}

function sliderChange(val) {
    console.log(val/100)
    x.volume=val/100
    }
function audiopause(){
    x.pause();
    document.querySelector(".playbtn").innerHTML="<i class='fa fa-play'></i>"
    isplaying=false
}
////dragelement
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}