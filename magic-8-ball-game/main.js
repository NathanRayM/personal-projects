// Variables

const button = document.querySelector(".button");
const answerMessage = document.querySelector(".answerMsg");
const question = document.getElementById("question-input");
const innerCircle = document.querySelector(".inner-circle");
const reset = document.querySelector(".eight-ball");

// Array containing eight ball answers
const response = [
  {
    answer: "It is certain",
  },
  {
    answer: "It is decidedly so",
  },
  {
    answer: "Yes definitely",
  },
  {
    answer: "You may rely on it",
  },
  {
    answer: "Ask again later",
  },
  {
    answer: "Cannot predict now",
  },
  {
    answer: "Don't count on it",
  },
  {
    answer: "My reply is no",
  },
  {
    answer: "Outlook not so good",
  },
  {
    answer: "Very doubtful",
  },
  {
    answer: "My sources say no",
  },
  {
    answer: "No",
  },
  {
    answer: "Definitely not",
  },
  {
    answer: "It is unlikely",
  },
  {
    answer: "Don't count on it",
  },
];

// Adding functionality for the input field to be required before the answer button will work
question.addEventListener("input", function () {
  if (question.value.trim() !== "") {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
});

// Click event to get a random answer from the array.
button.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * response.length);
  answerMessage.innerText = response[randomIndex].answer;
  answerMessage.style.fontSize = "1.2rem";
  answerMessage.style.color = "white";
  innerCircle.style.background =
    "radial-gradient(circle at 30% 30%, #222 0%, #000 70%)";
});

// Click event to reset the game by clicking the eight ball
reset.addEventListener("click", function () {
  question.value = "";
  answerMessage.style.fontSize = "6rem";
  answerMessage.style.color = "black";
  answerMessage.innerText = "8";
  innerCircle.style.background =
    "radial-gradient(circle at 30% 30%, #ffffff, #e0e0e0 60%, #b0b0b0)";
});
