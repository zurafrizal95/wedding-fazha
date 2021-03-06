// welcome screen
const btn_invitation = document.querySelector('.btn_invitation');
const welcome_screen = document.querySelector('.welcome_screen');
const animation_bg = document.querySelector('.animation_bg');
const main = document.querySelector('.display');
btn_invitation.addEventListener('click', () => {
  welcome_screen.classList.add('reavel');
  animation_bg.classList.add('reavel');
  gsap.to('.reavel', {
    clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
    duration: 0.5,
    stagger: 0.6,
  });
  main.classList.add('display1');
  const audio = new Audio('/assets/music/music.mp3');
  audio.play();
});
// welcome screen end

// cowndont timer
let countDownDate = new Date('Jul 22, 2022 18:00:00').getTime();

// membuat pembungkus timer
const count_downd = document.getElementById('countdownd');
const hari = document.querySelector('.hari');
const jam = document.querySelector('.jam');
const menit = document.querySelector('.menit');
const detik = document.querySelector('.detik');

// Memperbarui hitungan mundur setiap 1 detik
let x = setInterval(function () {
  // Untuk mendapatkan tanggal dan waktu hari ini
  let now = new Date().getTime();

  // Temukan jarak antara sekarang dan tanggal hitung mundur
  let distance = countDownDate - now;

  // Perhitungan waktu untuk hari, jam, menit dan detik
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Keluarkan hasil dalam elemen dengan id = "demo"
  // document.getElementById('demo').innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
  hari.innerHTML = days;
  jam.innerHTML = hours;
  menit.innerHTML = minutes;
  detik.innerHTML = seconds;
}, 1000);
// cowndount timer end

// swipper js galery
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // auto play
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
});
// swiper end

// comment system firebase
const form = document.getElementById('comments');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  db.collection('comments').add({
    name: form.name.value,
    comment: form.comment.value,
  });
  form.name.value = '';
  form.comment.value = '';
});

// get date time

// reading from db
const div = document.querySelector('.cont');

renderList = (doc) => {
  let main_div = document.createElement('div');
  let card_body = document.createElement('div');
  let name = document.createElement('h5');
  let comment = document.createElement('p');
  main_div.setAttribute('class', 'card mt-3');
  card_body.setAttribute('class', 'card_body');
  name.setAttribute('class', 'card-title');
  comment.setAttribute('class', 'card-text');
  name.innerHTML = `${doc.data().name}<ion-icon name="checkmark-done-circle-outline"></ion-icon>`;
  comment.textContent = doc.data().comment;
  card_body.appendChild(name);
  card_body.appendChild(comment);
  main_div.appendChild(card_body);
  div.appendChild(main_div);
};

db.collection('comments').onSnapshot((snap) => {
  let changes = snap.docChanges();
  changes.forEach((change) => {
    if (change.type == 'added') {
      renderList(change.doc);
    }
  });
});

// gift box
const sample = document.querySelector('.sample');
const gift_icon = document.querySelector('.gift_icon');
const gift_box = document.querySelector('.gift_box');
const close_btn = document.querySelector('.close');
const back_top = document.querySelector('.back_top');
function copyText() {
  /* Copy text into clipboard */
  navigator.clipboard.writeText(sample.textContent);
}

const navBar = document.querySelector('.navBar');
// function scroll
window.onscroll = function () {
  func_scroll();
};
// function scroll end

function func_scroll() {
  if (window.pageYOffset >= 1) {
    navBar.classList.add('on');
    back_top.classList.add('on');
  } else {
    navBar.classList.remove('on');
    back_top.classList.remove('on');
  }
}

gift_icon.addEventListener('click', () => {
  gift_box.classList.toggle('box_on');
});

close_btn.addEventListener('click', () => {
  gift_box.classList.toggle('box_on');
});
