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

function onCreate() {
    var formData = readFormData();
    if(formData!=null) {
            insertNewRecord(formData);
    }
    clearFields();
}

function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["surname"] = document.getElementById("surname").value;
    formData["email"] = document.getElementById("email").value;
    formData["gender"] = document.getElementById("gender").value;
    formData["birthday"] = document.getElementById("birthday").value;
        return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.surname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.gender;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.birthday;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<td><button class="delete-button" onclick="onDelete()">Delete</button></td>`
}

function clearFields() {
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("birthday").value = "";
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
