const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
    {
        question: "Who is the strongest?",
        answers: {
            a: "Superman",
            b: "The Terminator",
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


function buildQuiz(){
    // we'll need a place to store HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            // we'll want to score the list of answer choices
            const answers = [];

            // and for each available answer...
            for(letter in currentQuestion.answers){

                // ...add an HTML radio button
                answers.push(
                    `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
}

function showResults(){}

//display quiz right away
buildQuiz();

//on submit, show results
submitButton.addEventListener('click', showResults);

