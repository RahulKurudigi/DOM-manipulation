let form = document.getElementById("addForm");
let items = document.getElementById("items");

//add Item
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let newItem = document.getElementById("newItem");

  //Create new li element
  var li = document.createElement("li");
  li.className = "list-group-item";
  let value = document.createTextNode(newItem.value);
  li.appendChild(value);
  items.appendChild(li);

  //Create del button element
  var deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-danger btn-sm float-right delete";
  let value1 = document.createTextNode("X");
  deleteButton.appendChild(value1);
  li.appendChild(deleteButton);
  items.appendChild(li);
});

//Delete Item
items.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("delete")) {
    if (confirm("Are you sure ?")) {
      var li = event.target.parentElement;
      items.removeChild(li);
    }
  }
});
