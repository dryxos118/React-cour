// ****** SELECTIONNER LES ELEMENTS HTML **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-list");
const list = document.querySelector(".list");
const clearBtn = document.querySelector(".clear");

console.log(grocery);
console.log(list);
console.log(alert);
console.log(form);
console.log(submitBtn);

let editElement;
let editFlag = false;
let editId = "";

// ****** EVENT LISTENERS **********
// soumettre le formulaire
form.addEventListener("submit", addItem);
// supprimer tous les items
clearBtn.addEventListener("click", clearItems);
// charger les items (DOMContentLoaded)
window.addEventListener("DOMContentLoaded", setupItems);
// ****** FONCTIONS **********
// ajouter un item
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    createListItem(id, value);
    //alert
    displayAlert("item ajouter", "succses");
    //show container
    container.classList.add("show");
    //add localStorage
    addToLocalStorage(id, value);
    //retour au default
    setBackToDefault();
  } else if (value && editFlag) {
    editElement.innerHTML = value;
    //alerte
    displayAlert("item edit", "succses");
    //edit local
    editLocalStorage(editId, value);
    //default
    setBackToDefault();
  } else {
    displayAlert("entre une valeur", "fail");
  }
}

// afficher l'alerte
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`${action}`);
  // supprimer l'alerte
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`${action}`);
  }, 1000);
}

function setBackToDefault() {
  grocery.value = "";
  submitBtn.textContent = "submit";
  editElement = "";
  editId = "";
  editFlag = false;
  grocery.focus();
}

// supprimer tous les items
function clearItems() {
  const clear = document.querySelectorAll(".item");

  if (clear.length > 0) {
    clear.forEach(function (item) {
      list.removeChild(item);
    });
  }
  container.classList.remove("show");
  displayAlert("liste clear", "fail");
  setBackToDefault();
  localStorage.removeItem("list");
}

// supprimer un item
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;

  list.removeChild(element);

  if (list.children.length === 0) {
    container.classList.remove("show");
  }
  displayAlert("article enlever", "fail");
  setBackToDefault();
  removeFromLocalStorage(id);
}

// éditer un item
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  //
  editElement = e.currentTarget.parentElement.previousElementSibling;
  //
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editId = element.dataset.id;
  submitBtn.textContent = "edit";
  grocery.focus();
}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
  const local = { id, value };
  let localItem = getLocalStorage();

  localItem.push(local);
  localStorage.setItem("list", JSON.stringify(localItem));
}

function removeFromLocalStorage(id) {
  let localItem = getLocalStorage();

  localItem = localItem.filter(function (item) {
    if (item.id != id) {
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(localItem));
}

function editLocalStorage(id, value) {
  let item = getLocalStorage();

  item = item.map(function (it) {
    if (it.id === id) {
      item.value = value;
    }
    return it;
  });
  localStorage.setItem("list", JSON.stringify(item));
}

function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

// ****** METTRE EN PLACE LES ITEMS **********
// récupérer la liste dans le localStorage ou en créer une vide
function setupItems() {
  let item = getLocalStorage();

  if (item.length > 0) {
    item.forEach(function (it) {
      createListItem(it.id, it.value);
    });
    container.classList.add("show");
  }
}

function createListItem(id, value) {
  const element = document.createElement("article");
  //add classlist
  element.classList.add("item");
  //add id
  element.dataset.id = id;
  //add innerthtml
  element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <button class="edit-btn" type="button">
                <i class="fas fa-edit"></i>
              </button>
              <button class="delete-btn" type="button">
                <i class="fas fa-trash-can"></i>
              </button>
            </div>`;
  const editBtn = element.querySelector(".edit-btn");
  const deleteBtn = element.querySelector(".delete-btn");

  editBtn.addEventListener("click", editItem);
  deleteBtn.addEventListener("click", deleteItem);
  //appenchild
  list.appendChild(element);
}
