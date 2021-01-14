let questions = [
    {
        question: "What is the full form of RAM ?",
        answer: "Random Access Memory",
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Aceapt Memory",
            "None of these",
        ],
    },
    {
        question: "What is the full form of CPU?",
        answer: "Central Processing Unit",
        options: [
            "Central Program Unit",
            "Central Processing Unit",
            "Central Preload Unit",
            "None of these",
        ],
    },
    {
        question: "What is the full form of E-mail",
        answer: "Electronic Mail",
        options: [
            "Electronic Mail",
            "Electric Mail",
            "Engine Mail",
            "None of these",
        ],
    },
];

let current_question = 0;
let answers = [];
let score = 0

function renderQuestion(count) {
    let question = questions[count];
    console.log(question);

    let question_title = document.querySelector(`.quiz-question p`);
    let question_answer = document.querySelector(`.quiz-answer`);

    question_title.innerHTML = `Cau ${count + 1}: ${questions[count].question} `;

    question_answer.innerHTML = `<div class="quiz-item" style="display: none;">
                                        <input type="radio" id="answer-0" name="question-0" checked>
                                        <label for="answer-0">
                                        <span></span>
                                            <p>Skipped</p>
                                        </label>
                                    </div>`;
    for (let i = 0; i < question.options.length; i++) {
        const a = question.options[i];
        question_answer.innerHTML += `
        <div class="quiz-item">
            <input type="radio" id="answer-${i + 1}" name = "question-${count + 1}" ${a==answers[count] ? `checked` : null } >
            <label for="answer-${i + 1}">
                <span></span>
                <p>${a}</p>
            </label>
        </div>
            `
    }
    if (count == 0) {
        prevBtn.classList.add(`disable`)
    } else {
        prevBtn.classList.remove(`disable`);
    }

    if (count == questions.length - 1) {
        nextBtn.style.display = `none`;
        submit.style.display = `inline-block`;
    } else {
        submit.style.display = `none`;
        nextBtn.style.display = `inline-block`;
    }

    if (count == questions.length - 1) {
        nextBtn.classList.add(`disable`);
    } else {
        nextBtn.classList.remove(`disable`);
    }

    updateProgressBar()
}


function updateProgressBar() {
    document.querySelector(`.quiz-progress-bar`).style.width = `${(current_question) / questions.length * 100}%`;

}
let nextBtn = document.querySelector(`.next-btn`);
let prevBtn = document.querySelector(`.prev-btn`);
let submit = document.querySelector(`.finish-btn`);

nextBtn.addEventListener(`click`, function () {
    current_question++;
    if (current_question > questions.length - 1) {
        current_question = questions.length - 1;
    }
    renderQuestion(current_question);

})

prevBtn.addEventListener(`click`, function () {
    current_question--;
    if (current_question < 0) {
        current_question = 0;
    }
    renderQuestion(current_question);
});

submit.addEventListener(`click`, function() {
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].answer==answers[i]) {
            score++
        }
    }
})

document.querySelector(`.quiz-results`).style.display = `block`
document.querySelector(`.quiz-bottom`).style.display = `none`;
document.querySelector(`.quiz-progress`).style.display = `none`;
document.querySelector(
  `.quiz-results-score`
).innerHTML = `Ban da tra loi ${score}/${questions.length} cau`;

renderQuestion(current_question)