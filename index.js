//Modal element
var modal = document.getElementById('modal-window');
//Open modal button
var modalBtn = document.getElementById('modal-button');
//Close modal button
var closeBtn = document.getElementsByClassName("close-button")[0];

modalBtn.addEventListener('click', openModal);

function openModal() {
    modal.style.display= 'block';
}

closeBtn.addEventListener('click', closeModal);

function closeModal() {
    modal.style.display= 'none';
}