const quizDB = [
    {
        question: "Q1: What is Interprocess communication?",
        a: "allows processes to communicate and synchronize their actions when using the same address space",
        b: "allows processes to communicate and synchronize their actions",
        c: "allows the processes to only synchronize their actions without communication",
        d: "none of the mentioned",
        ans: "ans2"
    },
    {
        question: "Q2: Message passing system allows processes to __________",
        a: "communicate with each other without sharing the same address space",
        b: "communicate with one another by resorting to shared data",
        c: "share data",
        d: "name the recipient or sender of the message",
        ans: "ans1"
    },
    {
        question: "Q3: Which of the following two operations are provided by the IPC facility?",
        a: "write & delete message",
        b: "delete & receive message",
        c: "send & delete message",
        d: "receive & send message",
        ans: "ans4"
    },
    {
        question: "Q4: Messages sent by a process __________",
        a: "have to be of a fixed size",
        b: "have to be a variable size",
        c: "can be fixed or variable sized",
        d: "none of the mentioned",
        ans: "ans3"
    },
    {
        question: "Q5: The link between two processes P and Q to send and receive messages is called __________",
        a: "communication link",
        b: "message-passing link",
        c: "synchronization link",
        d: "all of the mentioned",
        ans: "ans1"
    },
    {
        question: "Q6: Which of the following are TRUE for direct communication?",
        a: "A communication link can be associated with N number of process(N = max. number of processes supported by system)",
        b: "A communication link is associated with exactly two processes",
        c: "Exactly N/2 links exist between each pair of processes(N = max. number of processes supported by system)",
        d: "Exactly two link exists between each pair of processes",
        ans: "ans2"
    },
    {
        question: "Q7: In indirect communication between processes P and Q __________",
        a: "there is another process R to handle and pass on the messages between P and Q",
        b: "there is another machine between the two processes to help communication",
        c: "there is a mailbox to help communication between P and Q",
        d: "none of the mentioned",
        ans: "ans3"
    },
    {
        question: "Q8: In the non blocking send __________",
        a: "the sending process keeps sending until the message is received",
        b: "the sending process sends the message and resumes operation",
        c: "the sending process keeps sending until it receives a message",
        d: "none of the mentioned",
        ans: "ans2"
    },
    {
        question: "Q9: In the Zero capacity queue __________",
        a: "the queue can store at least one message",
        b: "the sender blocks until the receiver receives the message",
        c: "the sender keeps sending and the messages don’t wait in the queue",
        d: "none of the mentioned",
        ans: "ans2"
    },
    {
        question: "Q10: The Zero Capacity queue __________",
        a: "is referred to as a message system with buffering",
        b: "is referred to as a message system with no buffering",
        c: "is referred to as a link",
        d: "none of the mentioned",
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