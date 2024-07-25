function fetchEvent(){fetch(`http://localhost:3000/posts/${id}`)  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    render(data)
  });
}
  // Получаем элементы модального окна и кнопки
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const span = document.querySelector(".close");
const btnClose1 = document.querySelector(".close1");
const btnClose2 = document.querySelector(".close2");
let id = ''
const textEl = document.querySelector('.modal-text')
const span1 = document.querySelector('.span1')
const span2 = document.querySelector('.span2')
const title = document.querySelector('.modal-title')
// Открываем модальное окно при клике на кнопку


btn.addEventListener('click',onOpenClick)
function onOpenClick(){
  getRandom()
  fetchEvent()
  modal.style.display = "block";
}

span.addEventListener('click',onCloseButtom)
btnClose1.addEventListener('click',onCloseButtom)
btnClose2.addEventListener('click',onCloseButtom)


 function onCloseButtom(){
    modal.style.display = "none";
}




// Закрываем модальное окно при клике вне его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function getRandom() {
    id = Math.floor(Math.random() * 10) + 1; // Генерируем случайное число от 1 до 10
    console.log(id);
}

function render(event){
textEl.textContent = event.description 
span1.textContent = event.solution1
span2.textContent = event.solution2
title.textContent = event.title

}