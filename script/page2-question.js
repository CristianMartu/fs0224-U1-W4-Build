const myAnswer = []

const createRandomArray = (lenght) => {
  const listNumber = []
  let i = 0
  while (i < lenght) {
    const random = Math.floor(Math.random() * lenght)
    const search = listNumber.includes(random)
    if (!search) {
      listNumber.push(random)
      i++
    }
  }
  return listNumber
}

const corAnswer = () => {
  const array = []
  for (let i = 0; i < questions.length; i++) {
    array.push(questions[i].correct_answer)
  }
  return array
}

const createQuestion = (position, questionElement, index) => {
  const questionText = document.createElement('h1')
  questionText.innerText = questionElement.question
  const conteiner = document.createElement('div')
  const answerCorrect = document.createElement('button')
  answerCorrect.classList.add('buttons')
  answerCorrect.innerText = questionElement.correct_answer
  conteiner.appendChild(answerCorrect)
  for (let i = 0; i < questionElement.incorrect_answers.length; i++) {
    const b = document.createElement('button')
    b.classList.add('buttons')
    b.innerText = questionElement.incorrect_answers[i]
    conteiner.appendChild(b)
  }
  position.appendChild(questionText)
  position.appendChild(conteiner)
  const posP = document.querySelector('footer p')
  posP.innerHTML = `Question ${index + 1} <code><span>/10</span></code>`
}

const deleteQuestion = () => {
  const posQ = document.querySelector('h1')
  const posDiv = document.querySelector('main div')
  posMain.removeChild(posQ)
  posDiv.remove()
}

const timer = (index, time, progress = 0) => {
  const totalTime = time
  const timerInterval = setInterval(() => {
    posCircle.style.background = `conic-gradient(#00ffff ${progress}%, #9b9898 0%)`
    if (time === -1) {
      myAnswer.push('Domanda non risposta')
      clearInterval(timerInterval)
    } else if (time === 0) {
      if (index === questions.length) {
        sessionStorage.setItem('myAnswer', myAnswer)
        window.location.href = 'results.html'
      }
      deleteQuestion()
      createQuestion(posMain, questions[index], index)
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

const changeQuestion = (time, index = 1) => {
  const startTimer = timer(index, time)
  const posButton = document.querySelectorAll('.buttons')
  posButton.forEach((element) => {
    element.classList.add('changeColor')
    element.addEventListener('click', (change) => {
      myAnswer.push(element.innerHTML)
      if (index === questions.length) {
        sessionStorage.setItem('myAnswer', myAnswer)
        window.location.href = 'results.html'
      } else {
        clearInterval(startTimer)
        p.innerText = '0'
        deleteQuestion()
        createQuestion(posMain, questions[index], index)
        index++
        changeQuestion(time, index)
      }
    })
  })
}

const posMain = document.querySelector('main')
const posCircle = document.getElementById('circle')
const p = document.getElementById('timer')
const correctAnswer = corAnswer()

const randomArray = createRandomArray(questions.length)
console.log(randomArray)

let easyTime = 20
createQuestion(posMain, questions[0], 0)
changeQuestion(easyTime)

sessionStorage.setItem('correctAnswer', correctAnswer)
