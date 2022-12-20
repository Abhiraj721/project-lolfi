function helper(){
    var a=parseInt(main.sumofallsems.value)
    var b=parseInt(main.no_ofsems.value)
    var finalcgpa=a/b
    var get=document.querySelector(".getcgpa")
    if(finalcgpa>10)finalcgpa="invalid input"
    get.innerHTML="<br><h3>Your Cgpa:"+finalcgpa+"</h3>"

}