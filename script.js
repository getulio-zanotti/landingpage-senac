let docTitle = document.title;
window.addEventListener("blur", () =>{
    document.title = "Voltar ao SFOOD";
})
window.addEventListener("focus", () =>{
    document.title = docTitle;
})
const questions = document.querySelectorAll(".question");
questions.forEach((question) => {
    question.addEventListener("click", () => {
        question.classList.toggle("active");

        const answer = question.nextElementSibling;

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});