//Modal element
var modal = document.getElementById('modal-window');
//Open modal button
var modalBtn = document.getElementById('modal-button');
//Close modal button
var closeBtn = document.getElementById("close-button");

modalBtn.addEventListener('click', openModal);

function openModal() {
    modal.style.display= 'block';
}