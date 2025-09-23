// global question array

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
 if progess = object.length //display congratulations you won :D
}

function checkAnswer() {
 // return the value of the selected item (radio button) and check it against the hidden value (correct answer)
}

function updateScore() {
//when a question is correct, update the score total
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

