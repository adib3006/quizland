const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello World",
        b: "Hyper Text",
        c: "markup language",
        d: "Hypertext markup language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "Hello World",
        b: "Cascading Style Sheet",
        c: "markup language",
        d: "Hypertext markup language",
        ans: "ans2"
    },
    {
        question: "Q3: What is the full form of JS?",
        a: "Hello World",
        b: "Hyper Text",
        c: "JavaScript",
        d: "Hypertext markup language",
        ans: "ans3"
    },
    {
        question: "Q4: What is the full form of RAM?",
        a: "Random Access Memory",
        b: "Cascading Style Sheet",
        c: "markup language",
        d: "Hypertext markup language",
        ans: "ans1"
    },
    {
        question: "Q5: What is the full form of OS?",
        a: "Hello World",
        b: "Hyper Text",
        c: "JavaScript",
        d: "Operating System",
        ans: "ans4"
    },
    {
        question: "Q6: Which one is not used to create websites?",
        a: "C++",
        b: "HTML",
        c: "JavaScript",
        d: "CSS",
        ans: "ans1"
    },
    {
        question: "Q7: Which one is a Scripting language?",
        a: "Java",
        b: "C#",
        c: "JavaScript",
        d: "python",
        ans: "ans3"
    },
    {
        question: "Q8: What is the full form of PHP?",
        a: "Random Access Memory",
        b: "Cascading Style Sheet",
        c: "Hypertext Preprocessor",
        d: "Hypertext markup language",
        ans: "ans3"
    },
    {
        question: "Q9: What is the full form of WWW?",
        a: "Random Access Memory",
        b: "World Wide Web",
        c: "Hypertext Preprocessor",
        d: "Hypertext markup language",
        ans: "ans2"
    },
    {
        question: "Q10: What is the full form of PC?",
        a: "Personal Computer",
        b: "Cascading Style Sheet",
        c: "Hypertext Preprocessor",
        d: "Hypertext markup language",
        ans: "ans1"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem)=> curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;
    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
        <h3>You scored ${score}/${quizDB.length} !! </h3>
        <button class="btn" onClick="location.reload()"> Play Again </button>
        <h4><a href="../home/quiz.php">Quiz</a></h4>
        `;
        showScore.classList.remove('scoreArea');
    }
});