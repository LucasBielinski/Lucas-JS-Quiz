var start = document.getElementById("strt")
var questionSection = document.getElementById ("question-container")

var qEl = document.getElementById ('question')
var aEl = document.getElementById ('answers')
var resp = document.getElementById ('response')
var totalTime = 20;
var timer = document.getElementById ("timer")


var randomQuestion, questionIndex

start.addEventListener('click', begin)
start.addEventListener('click', alarm)
function begin() {
start.classList.add("hidden")
randomQuestion = questions.sort(() => Math.random() -.5)
questionIndex = 0
questionSection.classList.remove("hidden")
newQuestion()
}

function newQuestion() {
    reset()
switchQuestion(randomQuestion[questionIndex])
}
function switchQuestion(question) {
qEl.innerText = question.question
questionIndex++
question.answers.forEach(answer => {
    var bttn = document.createElement('button')
    bttn.innerText = answer.text
    bttn.classList.add ('ansbttn')
    if (answer.correct) {
        bttn.dataset.correct = answer.correct
    }
    bttn.addEventListener('click', pickAnswer)
    aEl.appendChild(bttn)
})
}

function reset() {
    while (aEl.firstChild)
    aEl.removeChild
    (aEl.firstChild)
}


function pickAnswer(t) {
var picked = t.target
var correct = picked.dataset.correct
if (correct) {
    newQuestion() 
    resp.innerText = ('correct')
} else {
   console.log('wrong') 
   resp.innerText='Try again'
}
}

var timeRemaning = setInterval(alarm, 1000);

function alarm () {
    
    if (totalTime === -1) {
    console.log ("time is up")
    clearTimeout (timeRemaning)
} else {
    timer.innerText = totalTime + " time remaining"
    totalTime--; }

}

var questions = [
    {
      question: 'what is the logic of a program?',
      answers: [
        {text: 'JavaScript', correct: true},
        {text: 'CSS', correct: false},
        {text: 'HTML', correct: false},
        {text: 'Scratch', correct: false}
      ]
    },
    {
        question: 'what does an array hold?',
        answers: [
            {text: 'boolean', correct: false},
            {text: 'string', correct: false},
            {text: 'numbers', correct: false},
            {text: 'all', correct: true},
        ]
    }, 
    {
        question: 'to see your script in the console, type console._',
        answers: [
            {text: 'see', correct: false},
            {text: 'do', correct: false},
            {text: 'go', correct: false},
            {text: 'log', correct: true},
        ]
    },
    {
        question: 'what is an object?',
        answers: [
            {text: 'a box', correct: false},
            {text: 'collection of properties', correct: true},
            {text: 'nothing', correct: false},
            {text: 'an element', correct: false},
        ]
    },

]