const posButton = document.getElementById('button-footer')
const posInput = document.getElementById('check-footer')
// funzione per la checkbox
const submit = (e) => {
  if (posInput.checked) {
    posButton.classList.add('inputPressed')
  } else {
    posButton.classList.remove('inputPressed')
  }
}

posInput.addEventListener('click', submit)
//funzione che al premere del bottone di porta alla pagina delle domande(se la checkbox è premuta)
posButton.addEventListener('click', (changePage) => {
  if (posInput.checked) {
    window.location.href = 'question.html'
  } else {
    window.alert('Accettare le condizioni')
  }
})
