// // welcome screen
// const btn_invitation = document.querySelector('.btn_invitation');
// const welcome_screen = document.querySelector('.welcome_screen');
// const animation_bg = document.querySelector('.animation_bg');
// const main = document.querySelector('.display');
// btn_invitation.addEventListener('click', () => {
//   welcome_screen.classList.add('reavel');
//   animation_bg.classList.add('reavel');
//   gsap.to('.reavel', {
//     clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
//     duration: 0.5,
//     stagger: 0.6,
//   });
//   main.classList.add('display1');
//   const audio = new Audio('/assets/music/lagu.mp3');
//   audio.play();
// });
// welcome screen end

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
const gift = document.querySelector('.send_gift');
const gift_box = document.querySelector('.gift_box');
const close_btn = document.querySelector('.close');
function copyText() {
  /* Copy text into clipboard */
  navigator.clipboard.writeText(sample.textContent);
}

gift.addEventListener('click', () => {
  gift_box.classList.toggle('box_on');
});

close_btn.addEventListener('click', () => {
  gift_box.classList.toggle('box_on');
});
