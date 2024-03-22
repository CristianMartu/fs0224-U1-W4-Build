// Dichiarazione di un array vuoto per memorizzare le risposte dell'utente
const myAnswer = []

// Funzione per mischiare un array utilizzando l'algoritmo di Fisher-Yates
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5)
}

// Funzione per creare un array contenente la risposta corretta e le risposte errate di una domanda
const createArrayQuestions = (element) => {
  const array = []
  array.push(element.correct_answer)
  for (let i = 0; i < element.incorrect_answers.length; i++) {
    array.push(element.incorrect_answers[i])
  }
  return shuffleArray(array)
}

// Funzione per creare un array contenente tutte le risposte corrette delle domande
const corAnswer = (arrayElement) => {
  const array = []
  for (let i = 0; i < arrayElement.length; i++) {
    array.push(arrayElement[i].correct_answer)
  }
  return array
}

// Funzione per creare e mostrare una domanda
const createQuestion = (position, questionElement, index) => {
  // Creazione di un array contenente tutte le risposte mischiate
  const arrayQuestions = createArrayQuestions(questionElement)

  // Creazione del testo della domanda
  const questionText = document.createElement('h1')
  questionText.innerText = questionElement.question

  // Creazione di un contenitore per i pulsanti di risposta
  const container = document.createElement('div')

  // Creazione di pulsanti per le risposte
  for (let i = 0; i < arrayQuestions.length; i++) {
    const button = document.createElement('button')
    button.classList.add('buttons')
    button.innerText = arrayQuestions[i]
    container.appendChild(button)
  }

  // Aggiunta del testo della domanda e dei pulsanti al documento
  position.appendChild(questionText)
  position.appendChild(container)

  // Aggiornamento del contatore di domande
  const posP = document.querySelector('footer p')
  posP.innerHTML = `Question ${index + 1} <code><span>/${
    shuffledArray.length
  }</span></code>`
}

// Funzione per eliminare la domanda corrente dalla pagina
const deleteQuestion = () => {
  const posQ = document.querySelector('h1')
  const posDiv = document.querySelector('main div')
  posMain.removeChild(posQ)
  posDiv.remove()
}

// Funzione per gestire il timer della domanda
const timer = (index, time, progress = 0) => {
  const totalTime = time
  const timerInterval = setInterval(() => {
    posCircle.style.background = `conic-gradient(rgb(155,152,152, 0.5) ${progress}%, #00ffff 0%)`
    if (time === -1) {
      myAnswer.push('Domanda non risposta')
      clearInterval(timerInterval)
    } else if (time === 0) {
      if (index === questions.length) {
        sessionStorage.setItem('myAnswer', myAnswer)
        window.location.href = 'results.html'
      }
      deleteQuestion()
      createQuestion(posMain, shuffledArray[index], index)
      index++
      changeQuestion(totalTime, index)
      p.innerText = '0'
    } else {
      p.innerText = time
    }
    progress += 100 / totalTime
    time--
  }, 1000)
  return timerInterval
}

// Funzione per cambiare la domanda
const changeQuestion = (time, index = 1) => {
  const startTimer = timer(index, time)
  const posButton = document.querySelectorAll('.buttons')
  posButton.forEach((element) => {
    element.classList.add('changeColor')
    element.addEventListener('click', (change) => {
      myAnswer.push(element.innerHTML)
      console.log(element.innerHTML)
      if (index === shuffledArray.length) {
        sessionStorage.setItem('myAnswer', myAnswer)
        window.location.href = 'results.html'
      } else {
        clearInterval(startTimer)
        p.innerText = '0'
        deleteQuestion()
        createQuestion(posMain, shuffledArray[index], index)
        index++
        changeQuestion(time, index)
      }
    })
  })
}
const start = (arrayLenght, quantityQuestion, difficulty) => {
  const questionDifficulty = difficulty

  for (let i = 0; i < quantityQuestion; i++) {
    shuffledArray.push(arrayLenght[i])
  }
  const correctAnswer = corAnswer(shuffledArray)
  let changeTime = ''
  if (questionDifficulty === 'easy') {
    changeTime = '30'
  } else if (questionDifficulty === 'medium') {
    changeTime = '45'
  } else if (questionDifficulty === 'hard') {
    changeTime = '60'
  } else {
    console.log('error')
  }
  createQuestion(posMain, shuffledArray[0], 0)
  changeQuestion(changeTime)
  // Memorizza le risposte corrette nella sessione
  sessionStorage.setItem('correctAnswer', correctAnswer)

  console.log(correctAnswer)
}
// Seleziona gli elementi necessari dal documento HTML
const posMain = document.querySelector('main')
const posCircle = document.getElementById('circle')
const p = document.getElementById('timer')
const shuffledArray = []
const numberOfQuestion = document.getElementById('question-number')
const checkBoxes = document.querySelectorAll('input[type="checkbox"]')
const formStart = document.getElementById('myForm')
const readDifficulty = ''

const handleStart = (e) => {
  e.preventDefault()
  const quantityQuestion = numberOfQuestion.value

  // checkBoxes.forEach((element) => {
  //   element.addEventListener('change', () => {
  //     console.log(element.value)
  //   })
  // })

  const arrayLenght = shuffleArray(questionsEasy)
  // deleteQuestion()
  // start(arrayLenght, quantityQuestion)
}
console.log()
checkBoxes.forEach((element) => {
  element.addEventListener('change', () => {
    console.log(element.value)
  })
})

formStart.addEventListener('submit', handleStart)
createQuestion(posMain, shuffledArray[0], 0)
changeQuestion(changeTime)

// Memorizza le risposte corrette nella sessione
sessionStorage.setItem('correctAnswer', correctAnswer)

console.log(correctAnswer)
const arrayQuestions = []
for (let i = 0; i < shuffledArray.length; i++){
  arrayQuestions.push(shuffledArray[i].question)
}

sessionStorage.setItem("arrayQuestions", arrayQuestions)
console.log(arrayQuestions)
