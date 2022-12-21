var isplaying=false;
var num=0
var vol_rain=0.5;
var vol_nature=0.5;
var vol_wf=0.2;
var checkrain=0;
var checkwf=0;
var checknature=0;
var gifcount=0;
var greeting=0;
document.querySelector(".playbtn").innerHTML="<img src='https://app.lofi.co/icons/new/play.svg' >"
var x=new Audio("/beats/beat"+0+".mp3");
var a=0;
var temp=0;
let mixer_visi=0;
let scenes_visi=0;
let details = navigator.userAgent;
let regexp = /android|iphone|kindle|ipad/i;
let isMobileDevice = regexp.test(details);
var gif_arr=["https://i.gifer.com/Mf08.gif","https://i.gifer.com/xK.gif","https://i.gifer.com/fyrV.gif","https://i.gifer.com/7wkh.gif","https://i.gifer.com/EdfH.gif","https://i.gifer.com/2qQQ.gif","https://i.gifer.com/fyrS.gif",]
let currtime=0;
if(isMobileDevice==true){
  document.querySelector(".container").style.width="240px"
document.querySelector(".container").style.height="260px"
document.querySelector(".container").style.fontSize="10px"
}
if(temp==0)gettime()
x.addEventListener("ended", function() {
    console.log("um")
    if(num>10)num=1
    else num++;
    console.log(num)
    x=new Audio("/beats/beat"+num+".mp3");
    x.play()
});
function showgreeting(){
  greeting++;
  var quotes=[
    {
        "quote": "Be yourself; everyone else is already taken.",
        "author": "Oscar Wilde",
        "profession": "Irish poet",
        "topics": [
            "Inspirational",
            "Advice",
            "Humor"
        ]
    },
  {
        "quote": "To live is the rarest thing in the world. Most people exist, that is all.",
        "author": "Oscar Wilde",
        "profession": "Irish poet",
        "topics": [
            "Philosophy",
            "Humor"
        ]
    },
    {
        "quote": "True friends stab you in the front.",
        "author": "Oscar Wilde",
        "profession": "Irish poet",
        "topics": [
            "Philosophy",
            "People"
        ]
    },
    {
        "quote": "Women are made to be Loved, not understood.",
        "author": "Oscar Wilde",
        "profession": "Irish poet",
        "topics": [
            "Philosophy",
            "Humor"
        ]
    },
    {
        "quote": "Be the change that you wish to see in the world.",
        "author": "Mahatma Gandhi",
        "profession": "Indian leader",
        "topics": [
            "Inspirational",
            "Philosophy",
            "Advice"
        ]
    },
    {
        "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        "author": "Mahatma Gandhi",
        "profession": "Indian leader",
        "topics": [
            "Inspirational",
            "Life",
            "Advice"
        ]
    },
    {
        "quote": "No one can make you feel inferior without your consent.",
        "author": "Eleanor Roosevelt",
        "profession": "Former First Lady of the United States",
        "topics": [
            "Wisdom"
        ]
    },
    {
        "quote": "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
        "author": "Eleanor Roosevelt",
        "profession": "Former First Lady of the United States",
        "topics": [
            "Wisdom",
            "People"
        ]
    },
    {
        "quote": "Do what you feel in your heart to be right - for you'll be criticized anyway.",
        "author": "Eleanor Roosevelt",
        "profession": "Former First Lady of the United States",
        "topics": [
            "Wisdom",
            "Advice"
        ]
    },
    {
        "quote": "Do one thing every day that scares you.",
        "author": "Eleanor Roosevelt",
        "profession": "Former First Lady of the United States",
        "topics": [
            "Wisdom",
            "Life"
        ]
    },
    {
        "quote": "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate; only love can do that.",
        "author": "Martin Luther King",
        "profession": "American minister",
        "topics": [
            "Inspirational",
            "Wisdom",
            "Love"
        ]
    },
    {
        "quote": "Our lives begin to end the day we become silent about things that matter.",
        "author": "Martin Luther King",
        "profession": "American minister",
        "topics": [
            "Inspirational",
            "Life"
        ]
    },
    {
        "quote": "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        "author": "Martin Luther King",
        "profession": "American minister",
        "topics": [
            "People",
            "Life"
        ]
    },
  ]
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var date=new Date();
  var day=weekday[date.getDay()]
var month_name=month[date.getMonth()]
var date_num=date.getDate()
var currhour=date.getHours()
var random=Math.floor(Math.random()*12)
if(greeting%2!=0){
  document.querySelector(".container").style.backgroundColor="#0b0c0c"
  if(currhour<12)document.querySelector(".container .greetings").innerHTML="Good Morning🌄"
else if(currhour<=18){
  document.querySelector(".container .greetings").innerHTML="Good Afternoon🌇"
}
else if(currhour<=21)document.querySelector(".container .greetings").innerHTML="Good Evening🌆"
else document.querySelector(".container .greetings").innerHTML="Good Night🌉"
document.querySelector(".dayandtime").innerHTML="Its "+day+" , "+month_name+" "+date_num
console.log(quotes.length)
document.querySelector(".quote").innerHTML=quotes[random].quote+"-"+quotes[random].author
}else{
   document.querySelector(".container").innerHTML=" <b> <h3 id='greet' class='greetings'></h3></b>"+
"<h4 class='dayandtime'></h4>"+
"<h5 class='quote'></h5>"
document.querySelector(".container").style.backgroundColor=""
}
console.log(greeting)
}
function scenes_menu(element){
  console.log(element)
 document.querySelector("body").style.backgroundImage="url("+element+")"
 Hide(Bar)

}
var gif_arr=["https://i.gifer.com/Mf08.gif","https://i.gifer.com/xK.gif","https://i.gifer.com/fyrS.gif","https://i.gifer.com/58yR.gif"]
for (let i = 1; i < 10; i++) {
  document.getElementById("gifs").innerHTML+="<div class='col col-lg-4 col-sm-6' id='scenes_id'><img id='scenes01' onClick='scenes_menu(this.src)' class='scenes_gif' src='/bg/img"+i+".gif' ></div> "
 
  
}
document.getElementById("Bar").style.visibility="hidden";
document.getElementById("mydiv").style.visibility="hidden";
document.querySelector("body").style.fontFamily="'Silkscreen', cursive";
function Hide(HideID) 
{
  HideID.style.visibility = "hidden"; 
  if(HideID.id=="mydiv")mixer_visi--;
  else scenes_visi--;
}
function scenes(){
scenes_visi++;
if(scenes_visi%2==1)document.querySelector(".scenes").style.visibility="visible";
else document.querySelector(".scenes").style.visibility="hidden";
}
function gettime(){
  temp++;
  var date=new Date();
  console.log("f")
  var time =date.getHours();
 var str=""
if(date.getMinutes()<=9)str="0"
  document.querySelector(".time").innerHTML=time+" : "+str+date.getMinutes()
  currtime=time+" : "+str+date.getMinutes()
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
 function mixer(){
  mixer_visi++;
  console.log(mixer_visi)
  if(mixer_visi%2==1)document.getElementById("mydiv").style.visibility="visible"
  else document.getElementById("mydiv").style.visibility="hidden"
 }
 function wfvolume(val){
     vol_wf=val/250
    t.volume=val/250
 }
function changebeatback(){
    console.log("im ahere")
    if(num<0)num=17
    else num--
    x.pause()
    x=new Audio("/beats/beat"+num+".mp3");
    x.play()
}
function changebeatforw(){
    if(num>17)num=1
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
   console.log("d")
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
  // window.onload = function() {
  //   // find the element that you want to drag.
  //   var box = document.getElementById('mydiv');
    
  //   /* listen to the touchMove event,
  //   every time it fires, grab the location
  //   of touch and assign it to box */
    
  //   box.addEventListener('touchmove', function(e) {
  //     // grab the location of touch
  //     var touchLocation = e.targetTouches[0];
      
  //     // assign box new coordinates based on the touch.
  //     mydiv.style.left = touchLocation.pageX + 'px';
  //     mydiv.style.top = touchLocation.pageY + 'px';
  //   })
    
  //   /* record the position of the touch
  //   when released using touchend event.
  //   This will be the drop position. */
    
  //   box.addEventListener('touchend', function(e) {
  //     // current box position.
  //     var x = parseInt(mydiv.style.left);
  //     var y = parseInt(mydiv.style.top);
  //   })
    
  // }
}