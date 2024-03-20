const posButton = document.querySelector('button')
posButton.addEventListener('click', (changePage) => {
  window.location.href = 'feedback.html'
})

const stringAnswer = sessionStorage.getItem('correctAnswer')
const stringMyAnswer = sessionStorage.getItem('myAnswer')

const arrayAnswer = stringAnswer.split(',')
const arrayMyAnswer = stringMyAnswer.split(',')

corAnswer = []
for (let i = 0; i < arrayMyAnswer.length; i++) {
  if (arrayAnswer[i] === arrayMyAnswer[i]) {
    corAnswer.push(arrayAnswer[i])
  }
}

const lenghtAnswer = arrayAnswer.length
const lengthCorrect = corAnswer.length
const result = (total, answer) => (100 / total) * answer
const questionResult = (answer, total) => `${answer}/${total}`

const correct1 = document.getElementById('p1')
correct1.innerText = result(lenghtAnswer, corAnswer.length) + '%'
const correct2 = document.getElementById('p2')
correct2.innerText = questionResult(lengthCorrect, lenghtAnswer)

const resultWrong = arrayAnswer.length - lengthCorrect
const wrong1 = document.getElementById('p3')
wrong1.innerText = result(lenghtAnswer, resultWrong) + '%'
const wrong2 = document.getElementById('p4')
wrong2.innerText = questionResult(resultWrong, lenghtAnswer)
