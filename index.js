//showData();
var modal = document.getElementById('modal-window');
var modalBtn = document.getElementById('modal-button');
var closeBtn = document.getElementsByClassName("close-button")[0];
var submitBtn = document.getElementById('submit-button');
modalBtn.addEventListener('click', openModal);

function openModal() {
    modal.style.display= 'block';
}

closeBtn.addEventListener('click', closeModal);

function closeModal() {
    modal.style.display= 'none';
}

submitBtn.addEventListener('click',closeModal);

window.addEventListener('click', clickOutside);

function clickOutside(e) {
    if(e.target == modal) {
        modal.style.display= 'none';
    }
}

function onDelete() {
    var index;
    var table = document.getElementById('myTable');
    for ( var i = 1; i < table.rows.length; i++) {
            table.rows[i].cells[5].onclick = function () {
            index = this.parentElement.rowIndex;
            table.deleteRow(index);
        };
    } 
}

function clearFields() {
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("birthday").value = "";
}

function deleteData(index) {
    getData();
    var table = document.getElementById('myTable');
    console.log(index-1);
    var del = JSON.parse(localStorage.getItem("localData"));
    for(var i = 0; i < del.length; i++) {
        if(del.name == table.rows[i].name) {
            arr.splice[i];
            localStorage.setItem("localData",JSON.stringify(arr));
        }
    }
}

let id;

const tableUsers = document.querySelector('#myTable');
const formSelector = document.querySelector('#myForm');
const renderUser = doc => {
    const tr = `
    <tr data-id='${doc.id}'>
        <td>${doc.data().name}</td>
        <td>${doc.data().surname}</td>
        <td>${doc.data().email}</td>
        <td>${doc.data().gender}</td>
        <td>${doc.data().birthday}</td>
        <td><button class="delete-button">Delete</button></td>
    </tr>`;
    tableUsers.insertAdjacentHTML('beforeend',tr);
}

db.collection('users').get().then(querySnapshot => {
  querySnapshot.forEach(doc => {
    renderUser(doc);
  })
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('users').add({
        name: formSelector.name.value,
        surname: formSelector.surname.value,
        email: formSelector.email.value,
        gender: formSelector.gender.value,
        birthday: formSelector.birthday.value
    });
});
