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

const posMain = document.querySelector('main')

const createQuestion = (position, index) => {
  const q1 = document.createElement('h1')
  console.log(questions[index].question)
  console.log(questions[index])
  q1.innerText = questions[index].question
  const conteiner = document.createElement('div')
  const b1 = document.createElement('button')
  b1.classList.add('buttons')
  b1.innerText = questions[index].correct_answer
  const b2 = document.createElement('button')
  b2.classList.add('buttons')
  b2.innerText = questions[index].incorrect_answers[0]
  const b3 = document.createElement('button')
  b3.classList.add('buttons')
  b3.innerText = questions[index].incorrect_answers[1]
  const b4 = document.createElement('button')
  b4.classList.add('buttons')
  b4.innerText = questions[index].incorrect_answers[2]
  conteiner.append(b1, b2, b3, b4)
  position.appendChild(q1)
  position.appendChild(conteiner)
}

const deleteQuestion = () => {
  const posQ = document.querySelector('h1')
  const posDiv = document.querySelector('div')
  posMain.removeChild(posQ)
  posDiv.remove()
}

const changeQuestion = (index) => {
  const posButton = document.querySelectorAll('.buttons')
  posButton.forEach((element) => {
    element.addEventListener('mouseover', (changeColor) => {
      element.classList.add('changeColor')
    })
    element.addEventListener('mouseleave', (changeColor) => {
      element.classList.remove('changeColor')
    })
    element.addEventListener('click', (change) => {
      deleteQuestion()
      createQuestion(posMain, index)
      index++
      changeQuestion(index)
    })
  })
}

createQuestion(posMain, 0)
let i = 1
changeQuestion(i)
// for (let i = 1; i <= questions.length; i++) {
//   changeQuestion(0)
// }
