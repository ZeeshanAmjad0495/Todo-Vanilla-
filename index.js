let numberOfTasks = 0;
let numberOfTaskSpans = 0;
function addTask() {
  let task = document.createElement("li");

  let taskValue = document.getElementById("taskInput").value;
  let text = document.createTextNode(taskValue);

  let key = document.createAttribute("id");
  numberOfTasks++;
  key.value = numberOfTasks;
  task.setAttributeNode(key);

  task.appendChild(text);
  document.getElementById("tasks").appendChild(task);

  taskStyle = document.createAttribute("style");
  taskStyle.value = "background-color:lightgray;border-style: outset;";
  task.setAttributeNode(taskStyle);

  let completeButton = document.createElement("span");

  let completeButtonId = document.createAttribute("id");
  numberOfTaskSpans++;
  completeButtonId.value = "span" + numberOfTaskSpans;
  completeButton.setAttributeNode(completeButtonId);

  let completeButtonFunction = document.createAttribute("onClick");
  completeButtonFunction.value = "strikeOut(" + key.value + ")";
  completeButton.setAttributeNode(completeButtonFunction);

  completeButtonSign = document.createTextNode("Mark Complete");
  completeButton.appendChild(completeButtonSign);

  let completeButtonSignStyle = document.createAttribute("style");
  completeButtonSignStyle.value =
    "background-color:yellow;border-style:outset;";
  completeButton.setAttributeNode(completeButtonSignStyle);

  document.getElementById("tasks").appendChild(completeButton);

  let editButton = document.createElement("span");

  let editButtonId = document.createAttribute("id");
  editButtonId.value = "edit" + numberOfTaskSpans;
  editButton.setAttributeNode(editButtonId);

  let editButtonFunction = document.createAttribute("onClick");
  editButtonFunction.value = "edit(" + editButtonId.value + ")";
  editButton.setAttributeNode(editButtonFunction);

  editButtonSign = document.createTextNode("Edit");
  editButton.appendChild(editButtonSign);

  let editButtonSignStyle = document.createAttribute("style");
  editButtonSignStyle.value = "background-color:pink;border-style:outset;";
  editButton.setAttributeNode(editButtonSignStyle);

  document.getElementById("tasks").appendChild(editButton);

  let deleteButton = document.createElement("span");

  let deleteButtonId = document.createAttribute("id");
  deleteButtonId.value = "delete" + numberOfTaskSpans;
  deleteButton.setAttributeNode(deleteButtonId);

  let deleteButtonFunction = document.createAttribute("onClick");
  deleteButtonFunction.value =
    "removeTask(" +
    key.value +
    "," +
    completeButtonId.value +
    "," +
    deleteButtonId.value +
    "," +
    editButtonId.value +
    ")";
  deleteButton.setAttributeNode(deleteButtonFunction);

  deleteButtonSign = document.createTextNode("Delete");
  deleteButton.appendChild(deleteButtonSign);

  let deleteButtonSignStyle = document.createAttribute("style");
  deleteButtonSignStyle.value = "background-color:red;border-style:outset;";
  deleteButton.setAttributeNode(deleteButtonSignStyle);

  document.getElementById("tasks").appendChild(deleteButton);
}

function removeTask(id, cBId, dlId, eId) {
  let task = document.getElementById(id);
  task.parentNode.removeChild(cBId);

  task = document.getElementById(id);
  task.parentNode.removeChild(dlId);

  task = document.getElementById(id);
  task.parentNode.removeChild(eId);

  task = document.getElementById(id);
  task.parentNode.removeChild(task);
}

function strikeOut(id) {
  let task = (document.getElementById(id).style.textDecoration =
    "line-through");
}
