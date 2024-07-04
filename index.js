const click = document.getElementById("myButton");
const answer = document.getElementById("answer-text");
click.addEventListener("click", () => {
    answer.style.display = answer.style.display === "" || answer.style.display === "none" ? "block" : "none";
});

const click2 = document.getElementById("myButton2");
const answer2 = document.getElementById("answer-text2");
click2.addEventListener("click", () => {
    answer2.style.display = answer2.style.display === "" || answer2.style.display === "none" ? "block" : "none";
})

const click3 = document.getElementById("myButton3");
const answer3 = document.getElementById("answer-text3");
click3.addEventListener("click", () => {
    answer3.style.display = answer3.style.display === "" || answer3.style.display === "none" ? "block" : "none";
})

const click4 = document.getElementById("myButton4");
const answer4 = document.getElementById("answer-text4");
click4.addEventListener("click", () => {
    answer4.style.display = answer4.style.display === "" || answer4.style.display === "none" ? "block" : "none";
})