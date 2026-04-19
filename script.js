document.addEventListener("DOMContentLoaded", function(){

// ==========================
// LOADING (PUNYAMU ASLI DIPERTAHANKAN)
// ==========================
let p = document.getElementById("progress");
let load = document.getElementById("loading");
let w = 0;

let int = setInterval(()=>{
  w += 5;
  if(p) p.style.width = w + "%";

  if(w >= 100){
    clearInterval(int);
    if(load) load.style.display = "none";
    checkPopup();
  }
},50);

setTimeout(()=>{
  if(load) load.style.display="none";
  checkPopup();
},3000);


// ==========================
// FIX MENU BURGER (SUDAH OTOMATIS AMAN)
// ==========================
const sidebar = document.getElementById("sidebar");

window.toggleMenu = function(){
  if(sidebar){
    sidebar.classList.toggle("active");
  }
};


// ==========================
// FAKE SYSTEM (TAMBAHAN FITUR FULL)
// ==========================
const names = [
  "Hasbi","Candra","Rendy","Ridho","Dwi","Asep","Supri","Yanto","Ocha",
  "Bayu","Fajar","Hendra","Wawan","Ilham","Rizal","Teguh","Arif","Joko",
  "Dian","Rina","Sari","Putri","Lestari","Wati","Nanda","Aulia","Farhan",
  "Dedi","Rizky","Umar","Prana"
];

const reasons = [
  "barang sesuai deskripsi 👍",
  "kualitas mantap 🔥",
  "pengiriman cepat 🚀",
  "worth it banget",
  "packing rapi",
  "recommended!",
  "sesuai spek 💯",
  "admin responsif"
];

const products = [
  "Akun Sultan","Akun Murah","Akun Premium",
  "Akun GG","Akun Full Spek"
];


// ==========================
// TESTIMONI LIVE
// ==========================
setInterval(()=>{
  const name = names[Math.floor(Math.random()*names.length)];
  const reason = reasons[Math.floor(Math.random()*reasons.length)];

  const testi = document.getElementById("testiText");
  if(testi){
    testi.innerText = `"${reason}" - ${name}`;
  }

}, 2500);


// ==========================
// USER LIVE COUNTER
// ==========================
let user = 120;

let userBox = document.getElementById("liveUser");
if(!userBox){
  userBox = document.createElement("div");
  userBox.id = "liveUser";
  userBox.style.marginTop = "10px";
  userBox.style.fontSize = "13px";

  const testi = document.querySelector(".testi");
  if(testi) testi.appendChild(userBox);
}

setInterval(()=>{
  user += Math.floor(Math.random()*3);
  userBox.innerText = `👥 ${user} orang sedang melihat`;
}, 3000);


// ==========================
// FAKE BUY POPUP
// ==========================
const popup = document.createElement("div");
popup.style.position = "fixed";
popup.style.bottom = "20px";
popup.style.left = "20px";
popup.style.background = "#132c4d";
popup.style.color = "#fff";
popup.style.padding = "10px 15px";
popup.style.borderRadius = "15px";
popup.style.display = "none";
popup.style.zIndex = "9999";
document.body.appendChild(popup);

function showBuy(){
  const name = names[Math.floor(Math.random()*names.length)];
  const product = products[Math.floor(Math.random()*products.length)];

  popup.innerText = `${name} membeli ${product}`;
  popup.style.display = "block";

  setTimeout(()=>{
    popup.style.display = "none";
  },3000);
}

function loop(){
  showBuy();
  setTimeout(loop, Math.random()*4000 + 4000);
}

loop();

});


// ==========================
// POPUP ASLI (PUNYAMU TETAP)
// ==========================
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

// BUTTONS
function join(){
  window.open("https://wa.me/6285813517292","_blank");
}

function beli(){
  window.open("https://wa.me/6285813517292?text=Halo%20apakah%20stock%20akun%20masih%20ada?","_blank");
}

function wa(){
  window.open("https://wa.me/6285813517292","_blank");
    }
// =====================
// TESTI BERGANTIAN
// =====================
let testi = [
'"Cepat & Aman" - Supri',
'"Trusted Banget" - Yanto',
'"Murah & Aman" - Dedi',
'"Proses Cepat" - Umar'
];

let testiIndex = 0;

setInterval(()=>{
  testiIndex++;
  if(testiIndex >= testi.length){
    testiIndex = 0;
  }

  let t = document.getElementById("testiText");
  if(!t) return;

  t.style.opacity = 0;

  setTimeout(()=>{
    t.innerText = testi[testiIndex];
    t.style.opacity = 1;
  },300);

},3000);


// =====================
// FAKE BUY
// =====================
setInterval(()=>{
  let fb = document.createElement("div");
  fb.className = "fake-buy";
  fb.innerText = "🔥 Seseorang baru saja membeli akun!";
  document.body.appendChild(fb);

  setTimeout(()=>{
    fb.classList.add("show");
  },100);

  setTimeout(()=>{
    fb.remove();
  },4000);

},10000);
