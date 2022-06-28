// change color of the subtitles when mouse goes to the subtitle
document.querySelector(".subtitles").addEventListener("mouseover",myFunction1)

document.querySelector(".subtitles").addEventListener("mouseout",myFunction2)

function myFunction1() {
   document.querySelector(".subtitles").style.color = "black"
}
function myFunction2() {
    document.querySelector(".subtitles").style.color = "white"
 }

document.querySelector(".subtitles2").addEventListener("mouseover",myFunction3)

document.querySelector(".subtitles2").addEventListener("mouseout",myFunction4)

function myFunction3() {
   document.querySelector(".subtitles2").style.color = "black"
}
function myFunction4() {
    document.querySelector(".subtitles2").style.color = "white"
 }

 // set alert ever 2 mins thanking for visiting page
 setInterval(thankyou,120000)
function thankyou () {
alert("thanks for visiting my first portfolio! Contact me for a free website!")
}
thankyou()

// when mouse goes into nav section pop photo
document.querySelector(".backimo").addEventListener("mouseenter",myFunction5)

function myFunction5() {
    document.querySelector("#headpic").style.opacity = 1 
}

document.querySelector(".backimo").addEventListener("mouseleave",myFunction6)

function myFunction6() {
    document.querySelector("#headpic").style.opacity = 0
}

// add event listener to all navs
const jsLife = document.querySelector("#lifecodes")

document.querySelector(".myBtn").addEventListener("click",function(){

    jsLife.style.opacity = 1
}) 


