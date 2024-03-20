const questions = [
  {
    type: 'multiple',
    difficulty: 'easy',
    category: 'Science: Computers',
    question: 'What is the domain name for the country Tuvalu?',
    correct_answer: '.tv',
    incorrect_answers: ['.tu', '.tt', '.tl'],
  },
  {
    type: 'multiple',
    difficulty: 'easy',
    category: 'Science: Computers',
    question: 'How long is an IPv6 address?',
    correct_answer: '128 bits',
    incorrect_answers: ['32 bits', '64 bits', '128 bytes'],
  },
  {
    type: 'multiple',
    difficulty: 'easy',
    category: 'Science: Computers',
    question: 'In web design, what does CSS stand for?',
    correct_answer: 'Cascading Style Sheet',
    incorrect_answers: [
      'Counter Strike: Source',
      'Corrective Style Sheet',
      'Computer Style Sheet',
    ],
  },
  {
    type: 'multiple',
    difficulty: 'easy',
    category: 'Science: Computers',
    question:
      'Which computer hardware device provides an interface for all other connected devices to communicate?',
    correct_answer: 'Motherboard',
    incorrect_answers: [
      'Central Processing Unit',
      'Hard Disk Drive',
      'Random Access Memory',
    ],
  },
  {
    type: 'boolean',
    difficulty: 'easy',
    category: 'Science: Computers',
    question: 'The Windows 7 operating system has six main editions.',
    correct_answer: 'True',
    incorrect_answers: ['False'],
  },
  {
    type: 'multiple',
    difficulty: 'easy',
    category: 'Science: Computers',
    question:
      'If you were to code software in this language you&#039;d only be able to type 0&#039;s and 1&#039;s.',
    correct_answer: 'Binary',
    incorrect_answers: ['JavaScript', 'C++', 'Python'],
  },
  {
    type: 'boolean',
    difficulty: 'easy',
    category: 'Science: Computers',
    question:
      'The programming language &quot;Python&quot; is based off a modified version of &quot;JavaScript&quot;.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
  {
    type: 'boolean',
    difficulty: 'easy',
    category: 'Science: Computers',
    question: 'RAM stands for Random Access Memory.',
    correct_answer: 'True',
    incorrect_answers: ['False'],
  },
  {
    type: 'boolean',
    difficulty: 'easy',
    category: 'Science: Computers',
    question:
      'Pointers were not used in the original C programming language; they were added later on in C++.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
  {
    type: 'multiple',
    difficulty: 'easy',
    category: 'Science: Computers',
    question: 'On Twitter, what was the original character limit for a Tweet?',
    correct_answer: '140',
    incorrect_answers: ['120', '160', '100'],
  },
]
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
  posP.innerText = `Question ${index + 1} /10`
}

const deleteQuestion = () => {
  const posQ = document.querySelector('h1')
  const posDiv = document.querySelector('main div')
  posMain.removeChild(posQ)
  posDiv.remove()
}

const changeQuestion = (index, time = 19) => {
  const p = document.getElementById('timer')
  let progress = 0
  console.log('cerchio', posCircle)
  console.dir(posCircle)
  const timer = setInterval(() => {
    progress += 5
    // posCircle.style.background = `conic-gradient(
    //   at calc(50% + 0.5px) calc(50% + 0.5px),
    //   grey ${progress}%,
    //   grey 0%,
    //   #00ffff 0%,
    //   #00ffff 0%
    // );`
    posCircle.style.background = `conic-gradient(#00ffff ${progress}%, #9b9898 0%);`

    if (time === -1) {
      clearInterval(timer)
    } else if (time === 0) {
      if (index === questions.length) {
        window.location.href = 'results.html'
      }
      deleteQuestion()
      createQuestion(posMain, questions[index], index)
      index++
      changeQuestion(index)
      p.innerText = '20'
    } else {
      p.innerText = time
    }
    time--
  }, 1000)

  //   let counter = 60;
  // let progress = 0;
  // progress += 2;
  //   progressBar.style.background = conic-gradient(cyan ${progress}%, #9b9898 0%);

  const posButton = document.querySelectorAll('.buttons')
  posButton.forEach((element) => {
    element.addEventListener('mouseover', (changeColor) => {
      element.classList.add('changeColor')
    })
    element.addEventListener('mouseleave', (changeColor) => {
      element.classList.remove('changeColor')
    })
    element.addEventListener('click', (change) => {
      console.log(element.innerHTML)
      myAnswer.push(element.innerHTML)
      if (index === questions.length) {
        window.location.href = 'results.html'
      }
      clearInterval(timer)
      p.innerText = '20'
      deleteQuestion()
      createQuestion(posMain, questions[index], index)
      index++
      changeQuestion(index)
    })
  })
}

const posMain = document.querySelector('main')
// const posCircle = document.querySelector('.color')
const posCircle = document.getElementById('circle')

let easyTime = 20
createQuestion(posMain, questions[0], 0)
changeQuestion(1, easyTime)

const corAnswer = () => {
  const array = []
  for (let i = 0; i < questions.length; i++) {
    array.push(questions[i].correct_answer)
  }
  return array
}
const result = corAnswer()
console.log('result', result)
console.log(myAnswer)
// export const elemento1 = result
window.myArray2 = result
console.log('globale', myArray2)
