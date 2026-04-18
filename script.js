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

// fallback anti stuck
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
  window.open("https://wa.me/895386000337","_blank");
}

function beli(){
  window.open("https://wa.me/895386000337?text=Halo apakah stock akun masih ada?","_blank");
}

function wa(){
  window.open("https://wa.me/895386000337","_blank");
}

function refreshPage(){
  location.reload();
}

// MENU
function toggleMenu(){
  document.getElementById("sidebar").classList.toggle("active");
}

// TESTI SLIDE
let i=0;
setInterval(()=>{
  let t=document.querySelectorAll(".testi-text");
  let l1=document.getElementById("line1");
  let l2=document.getElementById("line2");

  t[i].classList.remove("active");
  i=(i+1)%t.length;
  t[i].classList.add("active");

  if(i==0){
    l1.classList.add("active");
    l2.classList.remove("active");
  }else{
    l2.classList.add("active");
    l1.classList.remove("active");
  }

},3000);

// NOTIF FAKE SMOOTH
let names=["Rizky","Budi","Andi","Dika"];
let produk=["Akun Murah","Akun Sultan"];

setInterval(()=>{
  let el=document.createElement("div");
  el.className="notif";

  let nama=names[Math.floor(Math.random()*names.length)];
  let prod=produk[Math.floor(Math.random()*produk.length)];

  el.innerHTML=`
    <img src="banner.jpg">
    <div>
      <b>${nama}</b><br>
      membeli <span style="color:red">${prod}</span>
    </div>
  `;

  document.body.appendChild(el);

  setTimeout(()=>el.classList.add("show"),100);

  setTimeout(()=>{
    el.classList.remove("show");
    setTimeout(()=>el.remove(),500);
  },3000);

},8000);