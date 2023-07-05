const qContainers = document.querySelectorAll(".q-container");

qContainers.forEach(qContainer => qContainer.addEventListener("click", () => {
    let question = qContainer.querySelector(".question");
    let arrow = qContainer.querySelector(".arrow");
    let answer = qContainer.querySelector(".answer");

    answer.classList.toggle("show-answer");
    question.classList.toggle("bold-question");
    arrow.classList.toggle("rotate-arrow");
}))