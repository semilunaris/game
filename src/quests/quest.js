// Получаем элементы модального окна и кнопки
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const spanClose = document.querySelector(".close");
const btnClose1 = document.querySelector(".close1");
const btnClose2 = document.querySelector(".close2");
const textEl = document.querySelector('.modal-text');
const span1 = document.querySelector('.span3');
const span2 = document.querySelector('.span4');

let quantity = 1;
let random = 1; // Задайте случайное значение, если требуется

function fetchEvent() {
  fetch('http://localhost:3000/posts/29')
    .then(response => response.json())
    .then(data => {
      switch (quantity) {
        case 1:
          render(data);
          break;
        case 2:
          render2(data);
          break;
        default:
          if (random === 1) {
            render3(data);
          } else {
            render4(data);
          }
      }
    })
    .catch(error => console.error('Error fetching data:', error));
}

function render(event) {
  textEl.textContent = event.description1;
  span1.textContent = event.solution1;
  span2.textContent = event.solution2;
  quantity++;
}

function render2(event) {
  textEl.textContent = event.description2;
  span1.textContent = event.solution4;
  span2.textContent = event.solution3;
  quantity++;
}

function render3(event) {
  textEl.textContent = event.result1;
  span1.textContent = event.solution5;
  span2.textContent = event.solution6;
  quantity++;
}

function render4(event) {
  textEl.textContent = event.result2;
  span1.textContent = event.solution5;
  span2.textContent = event.solution6;
  quantity++;
}

btnClose1.addEventListener('click', onStopQuest);
btnClose2.addEventListener('click', fetchEvent);

function onStopQuest() {
  modal.style.display = "none";
}

btn.addEventListener('click', () => {
  fetchEvent();
  modal.style.display = "block";
});

// Закрытие модального окна при нажатии на крестик
spanClose.addEventListener('click', () => {
  modal.style.display = "none";
});

// Закрытие модального окна при клике вне окна
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});