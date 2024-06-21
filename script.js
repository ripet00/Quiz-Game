const quizData = [
  {
    question: "what does HTML stand for ?",
    a: "Hypertext Markup Language",
    b: "Hybpertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Hybpertext Machine Learning",
  },
  {
    question: "Which of these is not a core data type ?",
    a: "List",
    b: "Dictionary",
    c: "Tuple",
    d: "Class",
  },
  {
    question:
      "What is the Output of following program? a = 4.5 b = 2 print a//b  ?",
    a: "2",
    b: "2.0",
    c: "2.25",
    d: "3",
  },
  {
    question:
      "Texts that are enclosed on a <title> tag are all displayed in which part of the browser  ?",
    a: "Title bar",
    b: "Tab",
    c: "Menu bar",
    d: "Tool bar",
  },
  {
    question: "HTML files are divided into 2 parts: the head and the  ?",
    a: "Attribute",
    b: "Body",
    c: "Title",
    d: "Footer",
  },
  {
    question: "Polymorphism is one interface with  ?",
    a: "Multiple methods",
    b: "Single method",
    c: "Multiple record",
    d: "Single record",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswer();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswer() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2> <button onclick="location.reload()">Reload</button>`;
    }
  }
});
