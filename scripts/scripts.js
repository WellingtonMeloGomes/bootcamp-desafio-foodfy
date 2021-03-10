const modalOverlay = document.querySelector('.modal-overlay');
const items = document.querySelectorAll('.item');

for (let item of items) {
    item.addEventListener("click", function(){
        modalOverlay.querySelector('.modal-content-image').querySelector('img').src = item.querySelector('img').src;
        modalOverlay.querySelector('.modal-content-title').textContent = item.querySelector('.item-content').querySelector('h1').textContent;
        modalOverlay.querySelector('.modal-content-autor').textContent = item.querySelector('.item-content').querySelector('h2').textContent;

        modalOverlay.classList.add("active");
    });
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active');
});