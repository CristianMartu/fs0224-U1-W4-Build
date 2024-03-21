const myAnswer = []
const createQuestion = (position, questionElement, index) => {
  const q1 = document.createElement('h1')
  q1.innerText = questionElement.question
  const conteiner = document.createElement('div')
  const b1 = document.createElement('button')
  b1.classList.add('buttons')
  b1.innerText = questionElement.correct_answer
  const b2 = document.createElement('button')
  b2.classList.add('buttons')
  b2.innerText = questionElement.incorrect_answers[0]
  const b3 = document.createElement('button')
  b3.classList.add('buttons')
  b3.innerText = questionElement.incorrect_answers[1]
  const b4 = document.createElement('button')
  b4.classList.add('buttons')
  b4.innerText = questionElement.incorrect_answers[2]
  conteiner.append(b1, b2, b3, b4)
  position.appendChild(q1)
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

const changeQuestion = (index, time = 20) => {
  const p = document.getElementById('timer')
  let progress = 0
  const timer = setInterval(() => {
    posCircle.style.background = `conic-gradient(#00ffff ${progress}%, #9b9898 0%)`
    if (time === -1) {
      clearInterval(timer)
    } else if (time === 0) {
      if (index === questions.length) {
        sessionStorage.setItem('myAnswer', myAnswer)
        window.location.href = 'results.html'
      }
      deleteQuestion()
      createQuestion(posMain, questions[index], index)
      index++
      changeQuestion(index)
      p.innerText = '0'
    } else {
      p.innerText = time
    }
    progress += 5
    time--
  }, 1000)

  const posButton = document.querySelectorAll('.buttons')
  posButton.forEach((element) => {
    element.addEventListener('mouseover', (changeColor) => {
      element.classList.add('changeColor')
    })
    element.addEventListener('mouseleave', (changeColor) => {
      element.classList.remove('changeColor')
    })
    element.addEventListener('click', (change) => {
      myAnswer.push(element.innerHTML)
      if (index === questions.length) {
        sessionStorage.setItem('myAnswer', myAnswer)
        window.location.href = 'results.html'
      } else {
        clearInterval(timer)
        p.innerText = '20'
        deleteQuestion()
        createQuestion(posMain, questions[index], index)
        index++
        changeQuestion(index)
      }
    })
  })
}

const posMain = document.querySelector('main')
const posCircle = document.getElementById('circle')

let easyTime = 20
createQuestion(posMain, questions[0], 0)
changeQuestion(1, easyTime)

const correctAnswer = () => {
  const array = []
  for (let i = 0; i < questions.length; i++) {
    array.push(questions[i].correct_answer)
  }
  return array
}

sessionStorage.setItem('correctAnswer', correctAnswer())
