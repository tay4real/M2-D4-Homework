const memberList = {
  name: [],
};

const isMemberList = () => {
  if (user.difficultyLevel !== "" && user.numberOfQuestions !== "") {
    return true;
  } else {
    return false;
  }
};

/****************  Helper Functions ********************/

// returns Total Number of Questions from Question Bank
const getTotalNumberOfQuestions = (array) => {
  return array.length;
};

// Shuffles an array
const shuffle = (array) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const createListItems = () => {
  return document.createElement("li");
};

/****************  Add Member  ********************/
const addNewStriver = () => {
  let striverList = document.querySelector("#general-list");

  let striverInput = document.getElementById("new-striver");
  let newList = createListItems();
  newList.className = "list-group-item";

  if (striverInput.value !== "") {
    // add imput to member List
    memberList.name.push(striverInput.value);

    // add new member to list
    newList.innerText = striverInput.value;
    striverInput.value = "";

    striverList.appendChild(newList);
  }
};

function addStriverButton() {
  let addButton = document.getElementById("add-striver");
  addButton.addEventListener("click", addNewStriver);
}

function addButton() {
  let addButton = document.getElementById("add-striver");
  addButton.addEventListener("click", addNewStriver);
}

window.onload = function () {
  addButton();
};
