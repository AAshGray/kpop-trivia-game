// global question array
const questions=[
    {
        question: "How many members are in the group seventeen ?",
        answers: ["10", "13", "17", "9"],
        correctAnswer: "13"
    },
    {
        question: "What is the fandom name for the boy group ATEEZ",
        answers: ["ATINY", "MOA", "CARAT", "STAY"],
        correctAnswer: "ATINY"
    },
    {
        question: "In what year did TWICE debut?",
        answers: ["2015", "2016", "2017", "2018"],
        correctAnswer: "2015"
    },
    {
        question: "What is the fandom name for the boy group ATEEZ",
        answers: ["ATINY", "MOA", "CARAT", "STAY"],
        correctAnswer: "ATINY"
    },
    
    
]

const { createElement } = require("react");

// array = json file?
let object = loadArray("file-name");

// global score value
let currentScore = 0
let progress = 0

let correctAnswer = null;

function loadArray(name) {
    // todo - convert json file to object

    return object
}
function pickQuestion(object) {
 // pick a question from the array and set up the problem and answer on the page
 //if there is no more questions, alert the user that the game is over and show their score
 if(arr.length===0){
    alert(`Game Over! You scored ${currentScore} points!`)
 }
}

function checkAnswer() {
 // return the value of the selected item (radio button) and check it against the hidden value (correct answer)
 const selected = document.querySelector('input[name="answer"]:checked').value;
 //check if selected is equal to correctAnswer
 if(selected.value===qa.correctAnswer){
    currentScore++;
    alert("Correct!")
 } else{
    alert(`Wrong! The correct answer was ${qa.correctAnswer}`)
 }
 //increment progress
 progress++;
 //load next question
 buildPage();
}

function updateScore() {
    //when a question is correct, update the score total
    //check if the element exists first
    let scoreDisplay = document.getElementById("score");
    if(!scoreDisplay){
        //create the element if it doesn't exist
       scoreDisplay= document.createElement("p");
       scoreDisplay.id="score"
       document.getElementById("main").appendChild(scoreDisplay);
    }
    //update the score display
    scoreDisplay.textContent = `Score: ${currentScore}`;

}

function updateProgress(object) {
    // display number x of totalArrayLength
}

function updateObject(object) {
    // update the array so that you don't get a duplicate question
}

function buildPage() {
    main = document.getElementById("main");
    qa = pickQuestion(object);
    
    //clear out main in case this is a new question
    main.textContent = ""

    //add new children to main based on the question we picked
    question = createElement(h1);
    main.addChild(question);
    question.id = "question"

    scoreDisplay = createElement(p);
    main.addChild(scoreDisplay)
    scoreDisplay.textContent = currentScore;
    scoreDisplay.id = "score"

    progressDisplay = createElement(p);
    main.addChild(progressDisplay);
    progressDisplay.textContent = `${progress} / ${object.length}`
    progress.id = "progress"
    
    for (item of qa.answers) {
        //add radio button
        //add text for radio button
        //add value for radio button
    }
    

    correctAnswer = qa.correctAnswer;
}

window.addEventListener('load', () => {
    buildPage();
})

