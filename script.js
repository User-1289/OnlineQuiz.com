//function addQuiz()
let addQuizBtn = document.getElementById('add-quiz-id')
addQuizBtn.onclick = () =>
{
//	window.open("add-page.html", "blank")
	window.location.href="add-page.html"
}
let attemptBtn = document.getElementById('attempt-btn')
attemptBtn.onclick = () =>
{
//	window.open("join-quiz.html", "blank")
	window.location.href="join-quiz.html"
}
let myQUizBtn = document.getElementById('my-quiz-btn')
myQUizBtn.onclick = () =>
{
	window.location.href="my-quiz.html"
}
	//console.log(localStorage.getItem("UniqueID"))