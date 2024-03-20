const posButton = document.querySelector('button')
posButton.addEventListener('click', (changePage) => {
  window.location.href = 'feedback.html'
})

const correctAnswer = sessionStorage.getItem('correctAnswer')
const myAnswer = sessionStorage.getItem('myAnswer')
console.log(correctAnswer)
console.log(myAnswer)
