
var start = document.getElementById("strt")
var questionSection = document.getElementById ("question-container")

var qEl = document.getElementById ('question')
var aEl = document.getElementById ('answers')
var resp = document.getElementById ('response')
var totalTime = 20;
var timer = document.getElementById ("timer")
var timeRemaning
var form = document.getElementById ('form')
var submitBttn = document.getElementById ('sbmit')
var score = document.getElementById ('timedisplay')
var nameInput = document.getElementById ('name')
var randomQuestion, questionIndex
// begins the game, 
start.addEventListener('click', begin)
function begin() {
// hides the start button 
start.classList.add("hidden")
// sorts questions at random
randomQuestion = questions.sort(() => Math.random() -.5)
questionIndex = 0
// unhides hidden class
questionSection.classList.remove("hidden")
timeRemaning = setInterval(alarm, 1000);
newQuestion()
}
// calls new question
function newQuestion() {
    reset()
    // ends game if no more questions
    if (questionIndex >= randomQuestion.length){
        gameEnd()
    }
switchQuestion(randomQuestion[questionIndex])
}
//sets up new question
function switchQuestion(question) {
qEl.innerText = question.question
questionIndex++
// adds buttons for anwers
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
// magic, resets answers
function reset() {
    while (aEl.firstChild)
    aEl.removeChild
    (aEl.firstChild)
}

// allows answers to be picked
function pickAnswer(t) {
var picked = t.target
var correct = picked.dataset.correct
if (correct) {
    newQuestion() 
    resp.innerText = ('correct')
} else {
   console.log('wrong') 
   resp.innerText='Try again, -3 seconds'
   totalTime -= 3;
}
}


// if the timer runs out the game ends
function alarm () {
    if (totalTime <=0 ) {
    console.log ("time is up")
    gameEnd ()
    clearTimeout (timeRemaning)
} else {
    timer.innerText = totalTime + " time remaining"
    totalTime--; }

}

// ends the game
function gameEnd() {
    clearTimeout (timeRemaning)
    qEl.innerText = "Game over"
    resp.innerText = ''
    score.innerText = 'final time ' +totalTime
    aEl.classList.add('hidden')
    timer.classList.add('hidden')
    form.classList.remove ('hidden')
}
// submits the form info
submitBttn.addEventListener ('click', submission)
function submission (event) {
    event.preventDefault()
    var winnerData = {
    finalScore: totalTime,
    name: nameInput.value.trim(),
}
// stores in local storage
  var storedScores = JSON.parse(localStorage.getItem('winner'));
    if (storedScores === null) {
        storedScores = []; }
        storedScores.push(winnerData); 
        localStorage.setItem ('winner', JSON.stringify(storedScores)); 
        window.location.href = "highscore.html"
    
    
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