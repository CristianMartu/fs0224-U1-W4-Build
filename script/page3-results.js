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
const resultPercentage = (total, answer) => (100 / total) * answer
const questionResult = (answer, total) => `${answer}/${total}`

const correct1 = document.getElementById('p1')
const percentageCorrect = resultPercentage(lenghtAnswer, lengthCorrect)
correct1.innerText = percentageCorrect + '%'
const correct2 = document.getElementById('p2')
correct2.innerText = questionResult(lengthCorrect, lenghtAnswer)

const resultWrong = arrayAnswer.length - lengthCorrect
const wrong1 = document.getElementById('p3')
const percentageWrong = 100 - percentageCorrect
wrong1.innerText = percentageWrong + '%'
const wrong2 = document.getElementById('p4')
wrong2.innerText = questionResult(resultWrong, lenghtAnswer)

const messageParagraph = document.querySelector('#circle2 p')
const p1Correct = document.getElementById('p1')
const p3Wrong = document.getElementById('p3')

const animatePercentageText = (totalWrong, totalCorrect) => {
  let currentWrong = 0
  let currentCorrect = 0
  const interval = setInterval(() => {
    if (currentWrong === totalWrong && currentCorrect === totalCorrect) {
      clearInterval(interval)
    } else {
      if (currentCorrect <= totalCorrect) {
        p1Correct.innerHTML = currentCorrect + '%'
        currentCorrect++
      }
      if (currentWrong <= totalWrong) {
        posCircle.style.background = `conic-gradient( #c2128d ${currentWrong}%, #00ffff 0%)`
        p3Wrong.innerHTML = currentWrong + '%'
        currentWrong++
      }
    }
  }, 20)
}

if (percentageCorrect >= 60) {
  messageParagraph.innerHTML =
    "Congratulation! <span style='color: #00BFFF;'>You passed the exam.</span>"
} else {
  messageParagraph.innerHTML =
    "I'm sorry! <span style='color: red;'>You didn't pass the exam.</span>"
}

const posCircle = document.getElementById('circle')
if (percentageCorrect !== percentageWrong) {
  animatePercentageText(percentageWrong, percentageCorrect)
} else {
  animatePercentageText(51, 51)
}
