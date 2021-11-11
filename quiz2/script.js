const quizDB = [
    {
        question: "Q1: What is an operating system?",
        a: "collection of programs that manages hardware resources",
        b: "system service provider to the application programs",
        c: "interface between the hardware and application programs",
        d: "all of the mentioned.",
        ans: "ans4"
    },
    {
        question: "Q2: To access the services of operating system, the interface is provided by the ___________?",
        a: "System calls",
        b: "API",
        c: "Library",
        d: "Assembly instructions",
        ans: "ans1"
    },
    {
        question: "Q3: Which one of the following is not true?",
        a: "kernel is the program that constitutes the central core of the operating system",
        b: "kernel is the first part of operating system to load into memory during booting",
        c: "kernel is made of various modules which can not be loaded in running operating system",
        d: "kernel remains in the memory during the entire computer session.",
        ans: "ans3"
    },
    {
        question: "Q4: Which one of the following error will be handle by the operating system?",
        a: "Power failure",
        b: "lack of paper in printer",
        c: "connection failure in the network",
        d: "all of the mentioned",
        ans: "ans4"
    },
    {
        question: "Q5: What is the main function of the command interpreter?",
        a: "to get and execute the next user-specified command",
        b: "to provide the interface between the API and application program",
        c: "to handle the files in operating system",
        d: "none of the mentioned",
        ans: "ans1"
    },
    {
        question: "Q6: In Operating Systems, which of the following is/are CPU scheduling algorithms?",
        a: "Round Robin",
        b: "Shortest Job First",
        c: "Priority",
        d: "All of the mentioned",
        ans: "ans4"
    },
    {
        question: "Q7: If a process fails, most operating system write the error information to a ______",
        a: "log file",
        b: "another running process",
        c: "new file",
        d: "none of the mentioned",
        ans: "ans1"
    },
    {
        question: "Q8: Which facility dynamically adds probes to a running system, both in user processes and in the kernel??",
        a: "DTrace",
        b: "DLocate",
        c: "DMap",
        d: "DAdd",
        ans: "ans1"
    },
    {
        question: "Q9: Which one of the following is not a real time operating system?",
        a: "VxWorks",
        b: "QNX",
        c: "RTLinux",
        d: "Palm OS",
        ans: "ans4"
    },
    {
        question: "Q10: The OS X has ____________",
        a: "monolithic kernel",
        b: "hybrid kernel",
        c: "microkernel",
        d: "monolithic kernel with modules",
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