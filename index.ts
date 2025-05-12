interface Question {
    question: string;
    answers: string[];
    correct: number; // index of correct answer
  }
  
  const questions: Question[] = [
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
  
  let currentIndex = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question")!;
  const answersEl = document.getElementById("answers")!;
  const nextBtn = document.getElementById("nextBtn") as HTMLButtonElement;
  
  function loadQuestion() {
    const q = questions[currentIndex];
    questionEl.textContent = q.question;
    answersEl.innerHTML = "";
  
    q.answers.forEach((answer, idx) => {
      const btn = document.createElement("button");
      btn.textContent = answer;
      btn.onclick = () => selectAnswer(idx);
      answersEl.appendChild(btn);
    });
  }
  
  function selectAnswer(selected: number) {
    const correct = questions[currentIndex].correct;
    if (selected === correct) {
      score++;
    }
    nextBtn.style.display = "block";
  }
  
  nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex < questions.length) {
      nextBtn.style.display = "none";
      loadQuestion();
    } else {
      showResult();
    }
  });
  
  function showResult() {
    questionEl.textContent = `You scored ${score} out of ${questions.length}!`;
    answersEl.innerHTML = "";
    nextBtn.style.display = "none";
  }
  
  loadQuestion();
  