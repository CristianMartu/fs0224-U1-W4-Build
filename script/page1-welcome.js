const posButton = document.getElementById('button-footer')
const posInput = document.getElementById('check-footer')

posButton.addEventListener('click', (changePage) => {
  if (posInput.checked) {
    window.location.href = 'question.html'
  } else {
    window.alert('Accettare le condizioni')
  }
})
