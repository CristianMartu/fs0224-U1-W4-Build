const posButton = document.querySelector('button')
posButton.addEventListener('click', (changePage) => {
  window.location.href = 'feedback.html'
})

const stringAnswer = sessionStorage.getItem('correctAnswer')
const stringMyAnswer = sessionStorage.getItem('myAnswer')

const arrayAnswer = stringAnswer.split(',')
const arrayMyAnswer = stringMyAnswer.split(',')

corAnswer = []
wrongAnswer = []
for (let i = 0; i < arrayMyAnswer.length; i++) {
  if (arrayAnswer[i] === arrayMyAnswer[i]) {
    corAnswer.push(arrayAnswer[i])
  } else {
    wrongAnswer.push(arrayAnswer[i])
  }
}
