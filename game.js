// global question array
const questions=[
    {
        question: "How many members are in the group seventeen ?",
        answers: ["10", "13", "17", "9"],
        correctAnswer: "13"
    },
    {
        question: "What is the fandom name for the boy group ATEEZ",
        image:"atezz.jpg",
        answers: ["ATINY", "MOA", "CARAT", "STAY"],
        correctAnswer: "ATINY"
    },
    {
        question: "In what year did TWICE debut?",
        image: "twice.jpg",
        answers: ["2015", "2016", "2017", "2018"],
        correctAnswer: "2015"
    },
    
    {
        question: "The boy group ENHYPEN was formed through which survival reality show?",
        image: "enhypen.jpg",
        answers: ["Produce X 101", "BOYS PLANET", " I-LAND", "SIXTEEN"],
        correctAnswer: "I-LAND"
    },
    
    {
        question: "Which of these songs is NOT a title track by the group Stray Kids?",
        answers: ["Blue Hour", "Back Door", "S-Class", "God's Menu"],
        correctAnswer: "Blue Hour"
    },
    {

    question: "Which member is this?",
    image: "exo-kai-oj0qvm2w1pzs23zy.jpg", 
    answers: ["Kai", "V", "Dino", "Jungkook"],
    correctAnswer: "Kai"
   },
   {
        question: "This idol is the leader of LE SSERAFIM. Who is she?",
        image: "Chaewon.jpg",
        answers: ["Yunjin", "Chaewon", "Kazuha", "Eunchae"],
        correctAnswer: "Chaewon"
    },
     {
        question: "Who was the first k-pop group to perform at Coachella?",
        image:"Coachella.jpg",
        answers: ["BTS", "EXO", "EPIK High", "BLACKPINK"],
        correctAnswer: "EPIK High"
    },
    {
        question: "Which girl group was the first to reach 1 billion views on YouTube?",
        answers: ["BTS", "PSY", "TWICE", "BLACKPINK"],
        correctAnswer: "BLACKPINK"
    },
    {
        question: "What group does these logos belong to?",
        image: "seventeen logo.jpg",
        answers: ["BTS", "PSY", "EXO", "seventeen"],
        correctAnswer: "SEVENTEEN"
    },

    {
        question: "What group does these lightstick belong to?",
        image: "Lightstick.jpg",
        answers: ["ATEEZ", "TXT", "EXO", "seventeen"],
        correctAnswer: "ATEEZ"
    },


]

// remember how many questions we had at the start of the game
const totalQuestions = questions.length;

// mutable copy of the questions so we can change these
let remainingQuestions = [...questions];

// global score values
const pointValue = 100;
let currentScore = 0;
let progress = 0;

function pickQuestion(remainingQuestions) {
 // pick a question from the array and set up the problem and answer on the page
 //if there is no more questions, alert the user that the game is over and show their score
    
    // if we're out of questions we show the final score and clear the form
    if (remainingQuestions.length === 0) {
        
        // remove the form
        const form = document.getElementById("quizForm");
        if (form) form.remove();
        
        // display a message and a retry button
        const messageBox = document.getElementById("messageBox");
        if (messageBox) {
            messageBox.textContent = `You have answered all the questions. Your score was ${currentScore} points!`;
            messageBox.style.color = "blue";
            
            const refreshButton = document.createElement("button");
            refreshButton.textContent = "Retry?";
            refreshButton.onclick = () => location.reload(); // reloads the page
            messageBox.appendChild(document.createElement("br"));
            messageBox.appendChild(refreshButton);
        }
        
        return;
    }

    //otherwise pick a random number to decide a question
    const index = Math.floor(Math.random() * remainingQuestions.length);

    // remove the question from the array and return that question to build the form
    const qa = remainingQuestions.splice(index, 1)[0];
    progress++; // selected a question so update what # we're on
    return qa
}

function checkAnswer(correctAnswer) {
    // return the value of the selected item (radio button) and check it against the hidden value (correct answer)
    const selectedValue = document.querySelector('input[name="answer"]:checked').value;
    //check if selected is equal to correctAnswer
    if(selectedValue===correctAnswer){
        updateScore();
        alert(`Correct! You earned ${pointValue} points!`);
    } else{
        alert(`Wrong! The correct answer was ${correctAnswer}`)
    }

    //load next question
    buildPage();
}

function updateScore() {
    //when a question is correct, update the score total
    //check if the element exists first
    
    // update hte total points
    currentScore+=pointValue;
    
    // update the element on the page
    const scoreDisplay = document.getElementById("score");
    if (scoreDisplay){
        //update the score display
        scoreDisplay.textContent = `Score: ${currentScore}`;
    }
}

function buildPage() {
    let main = document.getElementById("main");
    
    //clear out main in case this is a new question
    main.textContent = ""

    const messageBox = document.createElement("div");
    messageBox.id = "messageBox";
    main.appendChild(messageBox);

    const qa = pickQuestion(remainingQuestions);
    if (!qa) return;
    const correctAnswer = qa.correctAnswer

    // display question
    const question = document.createElement("h1");
    question.id = "question"
    question.textContent = qa.question;
    main.appendChild(question);

    // display score
    const scoreDisplay = document.createElement("p");
    scoreDisplay.id = "score";
    scoreDisplay.textContent = `Score: ${currentScore}`;
    main.appendChild(scoreDisplay);

    // display current progress (Question # / Total Questions)
    const progressDisplay = document.createElement("p");
    progressDisplay.id = "progress";
    progressDisplay.textContent = `Question ${progress} / ${totalQuestions}`;
    main.appendChild(progressDisplay);

    // Show image if it exists
    if (qa.image) {
        const img = document.createElement("img");
        img.src = qa.image;
        img.alt = "Question image";
        img.style.maxWidth = "300px"; // scales the image
        img.style.display = "block";
        img.style.margin = "10px auto"; // centers image horizontally
        img.style.borderRadius = "10px";
        main.appendChild(img);
    }


    // create form
    const form = document.createElement("form");
    form.id = "quizForm";
    main.appendChild(form);
    for (let answer of qa.answers) {
        // label
        const label = document.createElement("label");


        //add radio button
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "answer";

        //add value for radio button
        radio.value = answer;

        //add text for radio button
        label.textContent = answer;
        label.prepend(radio); // button before the text
        form.appendChild(label);
    }
    // add a line break before the submit button
    const br = document.createElement("br");
    form.appendChild(br);

    // create a button to check the answer
    const submitButton = document.createElement("button");
    submitButton.type = "button";
    submitButton.textContent = "Check Answer";
    submitButton.disabled = true; // disable button until there's a selection
    form.appendChild(submitButton);
    
    // add an event listener to all the radio buttons so if they change we can then push the submit button
    const radios = form.querySelectorAll('input[name="answer"]');
    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            submitButton.disabled = false;
        })
    })

    // if the button is enabled and it's clicked, check the answer
    submitButton.onclick = function() {
        checkAnswer(correctAnswer);
    }
}

buildPage();

