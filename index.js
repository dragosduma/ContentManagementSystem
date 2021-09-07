var modal = document.getElementById("modal-window");
var modalBtn = document.getElementById("modal-button");
var closeBtn = document.getElementsByClassName("close-button")[0];
var submitBtn = document.getElementById("submit-button");

modalBtn.addEventListener("click", openModal);
submitBtn.addEventListener("click", closeModal);
window.addEventListener("click", clickOutside);
closeBtn.addEventListener("click", closeModal);

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function clickOutside(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

function clearFields() {
  document.getElementById("name").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("birthday").value = "";
}

let id;

const tableUsers = document.querySelector("#myTable");
const formSelector = document.querySelector("#myForm");

const renderUser = (doc) => {
  const tr = `
    <tr data-id='${doc.id}'>
        <td>${doc.data().name}</td>
        <td>${doc.data().surname}</td>
        <td>${doc.data().email}</td>
        <td>${doc.data().gender}</td>
        <td>${doc.data().birthday}</td>
        <td><button class="delete-button">Delete</button></td>
    </tr>`;
  tableUsers.insertAdjacentHTML("beforeend", tr);

  const btnDelete = document.querySelector(
    `[data-id='${doc.id}'] .delete-button`
  );
  btnDelete.addEventListener("click", () => {
    db.collection("users")
      .doc(`${doc.id}`)
      .delete()
      .then(() => {
        console.log("Document deleted!");
      })
      .catch((err) => {
        console.log("Error removing odcument", err);
      });
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("users").add({
    name: formSelector.name.value,
    surname: formSelector.surname.value,
    email: formSelector.email.value,
    gender: formSelector.gender.value,
    birthday: formSelector.birthday.value,
  });
  clearFields();
});

db.collection("users").onSnapshot((snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === "added") {
      renderUser(change.doc);
    }
    if (change.type === "removed") {
      let tr = document.querySelector(`[data-id='${change.doc.id}']`);
      let tbody = tr.parentElement;
      tableUsers.removeChild(tbody);
    }
  });
});
