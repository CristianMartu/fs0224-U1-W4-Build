// funzione che va a richiamare il bottone, se ci clicchi ti porta alla pagina successiva(feedback)
const posButton = document.querySelector('button')
posButton.addEventListener('click', (changePage) => {
  window.location.href = 'feedback.html'
})

const stringAnswer = sessionStorage.getItem('correctAnswer')
const stringMyAnswer = sessionStorage.getItem('myAnswer')

const arrayAnswer = stringAnswer.split(',')
const arrayMyAnswer = stringMyAnswer.split(',')

// pushiamo all'interno di un array le risposte dell'utente
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

// richiamiamo il paragrafo per indicare la percentuale delle risposte corrette
const correct1 = document.getElementById('p1')
const percentageCorrect = resultPercentage(lenghtAnswer, lengthCorrect)
correct1.innerText = percentageCorrect + '%'
const correct2 = document.getElementById('p2')
correct2.innerText = questionResult(lengthCorrect, lenghtAnswer)

// richiamiamo il paragrafo per indicare la percentuale delle risposte sbagliate
const resultWrong = arrayAnswer.length - lengthCorrect
const wrong1 = document.getElementById('p3')
const percentageWrong = 100 - percentageCorrect
wrong1.innerText = percentageWrong + '%'
const wrong2 = document.getElementById('p4')
wrong2.innerText = questionResult(resultWrong, lenghtAnswer)

const messageParagraph = document.getElementById('p5')
const p1Correct = document.getElementById('p1')
const p3Wrong = document.getElementById('p3')

// funzione per fare un'animazione al grafico, sia per la circonferenza che per le percentuali
const animatePercentageText = (totalWrong, totalCorrect) => {
  let currentWrong = 0
  let currentCorrect = 0
  let currentColor = 100
  const interval = setInterval(() => {
    if (currentWrong === totalWrong && currentCorrect === totalCorrect) {
      clearInterval(interval)
    } else {
      if (currentCorrect <= totalCorrect) {
        const roundedCorrect = parseFloat(currentCorrect).toFixed(2)
        p1Correct.innerHTML = roundedCorrect + '%'
        currentCorrect++
      }
      if (currentWrong <= totalWrong) {
        p3Wrong.innerHTML = currentWrong + '%'
        currentWrong++
      }
      if (totalWrong <= currentColor) {
        posCircle.style.background = `conic-gradient( #c2128d ${currentColor}%, #00ffff 0%)`
        currentColor--
      }
    }
  }, 20)
}
// condizione del risultato finale, se hai passato il test entrerà dentro l'if, altrimenti dentro l'else
if (percentageCorrect >= 60) {
  messageParagraph.innerHTML =
    "Congratulation! <span style='color: #00BFFF;'>You passed the exam.</span>"
} else {
  messageParagraph.innerHTML =
    "I'm sorry! <span style='color: red;'>You didn't pass the exam.</span>"
}

// funzione in caso il punteggio delle risposte corrette e sbagliate sia uguale

const posCircle = document.getElementById('circle')
if (percentageCorrect !== percentageWrong) {
  animatePercentageText(percentageWrong, percentageCorrect)
} else {
  animatePercentageText(51, 51)
}
