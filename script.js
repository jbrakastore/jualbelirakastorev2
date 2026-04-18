document.addEventListener("DOMContentLoaded", function(){

// LOADING
let p = document.getElementById("progress");
let load = document.getElementById("loading");
let w = 0;

let int = setInterval(()=>{
  w += 5;
  p.style.width = w + "%";

  if(w >= 100){
    clearInterval(int);
    load.style.display = "none";
    checkPopup();
  }
},50);

// fallback
setTimeout(()=>{
  load.style.display="none";
  checkPopup();
},3000);

});

// POPUP
function checkPopup(){
  let t = localStorage.getItem("hidePopupTime");
  let now = new Date().getTime();

  if(!t || now > t){
    document.getElementById("popup").style.display="flex";
  }
}

function closePopup(){
  let c = document.getElementById("hideBox");

  if(c.checked){
    let time = new Date().getTime() + (5*60*60*1000);
    localStorage.setItem("hidePopupTime", time);
  }

  document.getElementById("popup").style.display="none";
}

// BUTTON
function join(){
  window.open("https://wa.me/6285813517292","_blank");
}

function beli(){
  window.open("https://wa.me/6285813517292?text=Halo%20apakah%20stock%20akun%20masih%20ada?","_blank");
}

function wa(){
  window.open("https://wa.me/6285813517292","_blank");
}

// MENU
function toggleMenu(){
  document.getElementById("sidebar").classList.toggle("active");
}
