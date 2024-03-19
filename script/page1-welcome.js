const posButton = document.getElementById('button-footer')
const posInput = document.getElementById('check-footer')

const submit = (e) => {
  if (posInput.checked) {
    posButton.classList.add('inputPressed')
    posButton.addEventListener('mouseover', (changeColor) => {
      posButton.classList.add('changeColor')
    })
    posButton.addEventListener('mouseleave', (changeColor) => {
      posButton.classList.remove('changeColor')
    })
  } else {
    posButton.classList.remove('inputPressed')
  }
}

posInput.addEventListener('click', submit)

posButton.addEventListener('click', (changePage) => {
  if (posInput.checked) {
    window.location.href = 'question.html'
  } else {
    window.alert('Accettare le condizioni')
  }
})
