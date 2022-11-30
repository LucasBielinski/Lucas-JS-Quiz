var scoreTracker = document.getElementById('board')
var scoreList = document.getElementById('scoreboard')
var remove = document.getElementById ('clear')
var goBack = document.getElementById ('return')

console.log(scoreList)
function getClass(boolean){
    if(boolean == true){
        return "green"
    } else{
        return "red"
    }

}

function init(){
    var storedScores = JSON.parse(localStorage.getItem('winner'));
    if (storedScores === null) {
        return }
    for (const score of storedScores) {
        console.log(score.name)
        console.log(score.finalScore)
        score["positive"] = false
        console.log(score)
        scoreList.innerHTML += `<li class="${getClass(score.positive)}">${score.name} scored ${score.finalScore}</li>`
    }
}

function removeStorage(event){
    event.preventDefault()
    console.log("Hey removing")
    localStorage.removeItem('winner')
    document.location.reload()
}
function rerun(){
    window.location.href = "index.html"
}
remove.addEventListener('click', removeStorage)
goBack.addEventListener('click', rerun)



init()
