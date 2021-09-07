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

           /* var del = JSON.parse(localStorage.getItem("localData"));
            del.slice(index-1, 1);
            localStorage.setItem("localData", JSON.stringify(arr));*/
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

var arr = new Array();

function addData() {
    getData();
    arr.push({
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        email: document.getElementById("email").value,
        gender: document.getElementById("gender").value,
        birthday: document.getElementById("birthday").value
    });
    localStorage.setItem("localData", JSON.stringify(arr));
    location.reload();
}

function getData() {
    var str = localStorage.getItem("localData");
    if(str!=null) {
        arr = JSON.parse(str);
    }
}
    
// function showData() {
//     getData();
//     var table = document.getElementById('myTable').getElementsByTagName('tbody')[0];
//     for(i=0; i< arr.length; i++) {
//         var row = table.insertRow();
//         var cell1 = row.insertCell();
//         var cell2 = row.insertCell();
//         var cell3 = row.insertCell();
//         var cell4 = row.insertCell();
//         var cell5 = row.insertCell();
//         var cell6 = row.insertCell();
//         cell1.innerHTML = arr[i].name
//         cell2.innerHTML = arr[i].surname;
//         cell3.innerHTML = arr[i].email;
//         cell4.innerHTML = arr[i].gender;
//         cell5.innerHTML = arr[i].birthday;
//         cell6.innerHTML = `<td><button class="delete-button" onclick="onDelete()">Delete</button></td>`;
//     }
// }

