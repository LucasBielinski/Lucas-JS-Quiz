var start = document.getElementById("strt")
var questionSection = document.getElementById ("question-container")

start.addEventListener('click', begin)
function begin() {
console.log("started")
start.classList.add("hidden")
questionSection.classList.remove("hidden")
}

function newQuestion() {

}

function answer() {

}