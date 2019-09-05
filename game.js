const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){}

function showResults(){}

//display quiz right away
buildQuiz();

//on submit, show results
submitButton.addEventListener('click', showResults);

const myQuestions = [
    {
        question: "Who is the strongest?",
        answers: {
            a: "Superman",
            b: "The Terminator";
            c: "Waluigi, duh"
        },
        correctAnswer: "c"
    },
    {
        question: "Where is Waldo really?",
        answers: {
            a: "Spain",
            b: "Japan",
            c: "USA"
        },
        correctAnswer: "b"
    },
    {
        question: "What's my cat's name?",
        answers: {
            a: "Chai",
            b: "Fluffy",
            c: "Randy"
        },
        correctAnswer: "a"
    }
]
