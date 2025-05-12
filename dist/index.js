"use strict";
var questions = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
        correct: 0
    },
    {
        question: "Which language runs in a web browser?",
        answers: ["Java", "C", "Python", "JavaScript"],
        correct: 3
    },
    {
        question: "What does HTML stand for?",
        answers: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks Text Mark Language", "None"],
        correct: 0
    }
];
var currentIndex = 0;
var score = 0;
var questionEl = document.getElementById("question");
var answersEl = document.getElementById("answers");
var nextBtn = document.getElementById("nextBtn");
function loadQuestion() {
    var q = questions[currentIndex];
    questionEl.textContent = q.question;
    answersEl.innerHTML = "";
    q.answers.forEach(function (answer, idx) {
        var btn = document.createElement("button");
        btn.textContent = answer;
        btn.onclick = function () { return selectAnswer(idx); };
        answersEl.appendChild(btn);
    });
}
function selectAnswer(selected) {
    var correct = questions[currentIndex].correct;
    if (selected === correct) {
        score++;
    }
    nextBtn.style.display = "block";
}
nextBtn.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex < questions.length) {
        nextBtn.style.display = "none";
        loadQuestion();
    }
    else {
        showResult();
    }
});
function showResult() {
    questionEl.textContent = "You scored ".concat(score, " out of ").concat(questions.length, "!");
    answersEl.innerHTML = "";
    nextBtn.style.display = "none";
}
loadQuestion();
