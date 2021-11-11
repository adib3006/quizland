const quizDB = [
    {
        question: "Q1: A Process Control Block(PCB) does not contain which of the following?",
        a: "Code",
        b: "Stack",
        c: "Bootstrap program",
        d: "Data",
        ans: "ans3"
    },
    {
        question: "Q2: The number of processes completed per unit time is known as __________",
        a: "Output",
        b: "Throughput",
        c: "Efficiency",
        d: "Capacity",
        ans: "ans2"
    },
    {
        question: "Q3: The state of a process is defined by __________",
        a: "the final activity of the process",
        b: "the activity just executed by the process",
        c: "the activity to next be executed by the process",
        d: "the current activity of the process.",
        ans: "ans4"
    },
    {
        question: "Q4: Which of the following is not the state of a process?",
        a: "New",
        b: "Old",
        c: "Waiting",
        d: "Running",
        ans: "ans2"
    },
    {
        question: "Q5: What is a Process Control Block?",
        a: "Process type variable",
        b: "Data Structure",
        c: "A secondary storage section",
        d: "A Block in memory",
        ans: "ans2"
    },
    {
        question: "Q6: The entry of all the PCBs of the current processes is in __________",
        a: "Process Register",
        b: "Program Counter",
        c: "Process Table",
        d: "Process Unit",
        ans: "ans3"
    },
    {
        question: "Q7: What is the degree of multiprogramming?",
        a: "the number of processes executed per unit time",
        b: "the number of processes in the ready queue",
        c: "the number of processes in the I/O queue",
        d: "the number of processes in memory",
        ans: "ans4"
    },
    {
        question: "Q8: A single thread of control allows the process to perform __________",
        a: "only one task at a time",
        b: "multiple tasks at a time",
        c: "only two tasks at a time",
        d: "all of the mentioned",
        ans: "ans1"
    },
    {
        question: "Q9: What is the objective of multiprogramming?",
        a: "Have a process running at all time",
        b: "Have multiple programs waiting in a queue ready to run",
        c: "To increase CPU utilization",
        d: "None of the mentioned",
        ans: "ans3"
    },
    {
        question: "Q10: Which of the following do not belong to queues for processes?",
        a: "Job Queue",
        b: "PCB queue",
        c: "Device Queue",
        d: "Ready Queue",
        ans: "ans2"
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