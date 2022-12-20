var isplaying=false;
var num=0
var vol_rain=0.5;
var vol_nature=0.5;
var vol_wf=0.2;
var checkrain=0;
var checkwf=0;
var checknature=0;
document.querySelector(".playbtn").innerHTML="<img src='https://app.lofi.co/icons/new/play.svg' >"
var x=new Audio("/beats/beat"+0+".mp3");
var a=0;
var temp=0;
let details = navigator.userAgent;
let regexp = /android|iphone|kindle|ipad/i;
let isMobileDevice = regexp.test(details);
if(temp==0)gettime()
x.addEventListener("ended", function() {
    console.log("um")
    if(num>10)num=1
    else num++;
    console.log(num)
    x=new Audio("/beats/beat"+num+".mp3");
    x.play()
});
function gettime(){
  temp++;
  var date=new Date();
  console.log("f")
  var time =date.getHours();
 var str=""
if(date.getMinutes()<=9)str="0"
  document.querySelector(".time").innerHTML=time+" : "+str+date.getMinutes()
}
setInterval(gettime,1000)
var checkedValue = document.querySelector('.messageCheckbox').checked;
 console.log(checkedValue)
 var y=new Audio("/beats/rain.mp3");
 y.addEventListener("ended", function() {
  y.play()
});
 function onInputrain(element){
    checkrain++;
    y.volume=vol_rain
    if(checkrain%2==0){
       y.pause()
    }
    else y.play()
 }
 function rainvolume(val){
     vol_rain=val/100
    y.volume=val/100
 }
 var z=new Audio("/beats/nature.mp3")
 z.addEventListener("ended", function() {
  z.play()
});
 function onInputnature(element){
checknature++;
z.volume=vol_nature
if(checknature%2==0)z.pause()
else z.play()
 }
 function naturevolume(val){
  vol_nature=val/100
 z.volume=val/100
}
var t=new Audio("/beats/waterfall.webm");
 t.addEventListener("ended", function() {
  t.play()
});
 function onInputwf(element){
    checkwf++;
    t.volume=vol_wf
    if(checkwf%2==0){
       t.pause()
    }
    else t.play()
 }
 function wfvolume(val){
     vol_wf=val/250
    t.volume=val/250
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
        document.querySelector(".playbtn").innerHTML="<img src='https://app.lofi.co/icons/new/pause.svg' >"
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
    document.querySelector(".playbtn").innerHTML="<img src='https://app.lofi.co/icons/new/play.svg' >"
    isplaying=false
}
////dragelement
if(isMobileDevice==false){
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
}
else{
  window.onload = function() {
    // find the element that you want to drag.
    var box = document.getElementById('mydiv');
    
    /* listen to the touchMove event,
    every time it fires, grab the location
    of touch and assign it to box */
    
    box.addEventListener('touchmove', function(e) {
      // grab the location of touch
      var touchLocation = e.targetTouches[0];
      
      // assign box new coordinates based on the touch.
      mydiv.style.left = touchLocation.pageX + 'px';
      mydiv.style.top = touchLocation.pageY + 'px';
    })
    
    /* record the position of the touch
    when released using touchend event.
    This will be the drop position. */
    
    box.addEventListener('touchend', function(e) {
      // current box position.
      var x = parseInt(mydiv.style.left);
      var y = parseInt(mydiv.style.top);
    })
    
  }
}