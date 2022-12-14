//function addQuiz()
let addQuizBtn = document.getElementById('add-quiz-id')
addQuizBtn.onclick = () =>
{
	window.open("add-page.html", "blank")
}
let attemptBtn = document.getElementById('attempt-btn')
attemptBtn.onclick = () =>
{
	window.open("join-quiz.html", "blank")
}
let myQUizBtn = document.getElementById('my-quiz-btn')
myQUizBtn.onclick = () =>
{
	window.open("my-quiz.html", "blank")
}
