const body = document.getElementById("body");
const scoreText = document.getElementById("score");
let score = 0;

const getAllQuizes = async () => {
  const response = await fetch(
    "https://menu-api.parent-content-parent-content-service.workers.dev/quiz",
  );
  const data = await response.json();

  const container = document.createElement("div");

  data.forEach((quiz, index) => {
    const box = document.createElement("div");
    const quizQuestion = document.createElement("h1");
    quizQuestion.textContent = `${index + 1}. ${quiz.question}`;
    box.appendChild(quizQuestion);
    quiz.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;

      button.addEventListener("click", () => {
        if (option === quiz.answer) {
          console.log("uhaantai ymaa");
          score++;
          scoreText.textContent = score;
        } else {
          console.log(" gandan ory");
        }
        if (option === quiz.answer) {
          button.style.background = "green";
          button.style.color = "white";
        } else {
          button.style.background = "red";
          button.style.color = "white";
        }
      });
      button.className = "flex ";
      box.className = " p-2 ";
      box.appendChild(button);
    });
    container.appendChild(box);
  });
  body.appendChild(container);
};
getAllQuizes();
