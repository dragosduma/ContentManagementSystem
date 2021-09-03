var modal = document.getElementById('modal-window');
var modalBtn = document.getElementById('modal-button');
var closeBtn = document.getElementsByClassName("close-button")[0];

modalBtn.addEventListener('click', openModal);

function openModal() {
    modal.style.display= 'block';
}

closeBtn.addEventListener('click', closeModal);

function closeModal() {
    modal.style.display= 'none';
}

window.addEventListener('click', clickOutside);

function clickOutside(e) {
    if(e.target == modal) {
        modal.style.display= 'none';
    }
}