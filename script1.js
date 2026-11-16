const getRandomQuiz = async () => {
  const response = await fetch(
    "https://menu-api.parent-content-parent-content-service.workers.dev/quiz/random?category=kod",
  );
  const randomQuiz = await response.json();

  const quiz = document.getElementById("quiz");

  const box = document.createElement("div");
  const title = document.createElement("h1");

  title.textContent = randomQuiz.question;
  title.className = " bg-violet-200 text-black mt-4 ml-4 rounded w-60";
  box.appendChild(title);

  randomQuiz.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.addEventListener("click", () => {
      if (option === randomQuiz.answer) {
        console.log("uhaantai ymmaa");
      } else {
        console.log("gandan ortsgooy ");
      }
      if (option === randomQuiz.answer) {
        btn.style.background = "green";
        btn.style.color = "white";
      } else {
        btn.style.background = "red";
        btn.style.color = "white";
      }
    });

    btn.className =
      "bg-violet-200 text-black mt-4 ml-4 rounded w-40 h-10 items-center justify-center flex flex-col";
    box.appendChild(btn);
  });
  quiz.appendChild(box);
};

getRandomQuiz();
