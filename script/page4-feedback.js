const starsContainer = document.getElementById('stelle')
const feedbackTextElement = document.getElementById('textInput')
const stars = []

function setInputValue(text) {
  feedbackTextElement.value = text
}

for (let i = 0; i < 10; i++) {
  const newSpan = document.createElement('span')
  const svg = `
    <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path class="star-path" d="M22.2044 1.55551C22.6143 0.569963 24.0104 0.569964 24.4203 1.55552L29.9874 14.9402C30.1602 15.3557 30.5509 15.6396 30.9994 15.6756L45.4494 16.834C46.5134 16.9193 46.9448 18.2471 46.1341 18.9415L35.1248 28.3722C34.7831 28.6649 34.6338 29.1242 34.7382 29.5619L38.1018 43.6626C38.3494 44.7009 37.2199 45.5215 36.309 44.9651L23.9379 37.4089C23.5538 37.1743 23.0709 37.1743 22.6868 37.4089L10.3157 44.9651C9.40478 45.5215 8.27528 44.7009 8.52295 43.6626L11.8865 29.5619C11.9909 29.1242 11.8416 28.6649 11.4999 28.3722L0.490575 18.9415C-0.320069 18.2471 0.111362 16.9193 1.17535 16.834L15.6253 15.6756C16.0738 15.6396 16.4645 15.3557 16.6374 14.9402L22.2044 1.55551Z" fill="#9b9898"/>
    </svg>
  `
  newSpan.innerHTML = svg
  stars.push(newSpan)
  starsContainer.appendChild(newSpan)
}

const createClass = document.querySelectorAll('.star-path')
createClass.forEach((star, index) => {
  star.addEventListener('click', () => {
    createClass.forEach((star, index2) => {
      if (index >= index2) {
        star.setAttribute('fill', '#00FFFF')
      } else {
        star.setAttribute('fill', '#9b9898')
      }
    })

    const clickedStars = index + 1

    let feedbackText = ''
    if (clickedStars >= 0 && clickedStars <= 5) {
      feedbackText =
        'We are sorry about your experience with us... \uD83D\uDE1E'
    } else if (clickedStars >= 6 && clickedStars <= 8) {
      feedbackText = 'Thanks for your support! \uD83D\uDC4D'
    } else if (clickedStars >= 9 && clickedStars <= 10) {
      feedbackText = 'We really appreciate your feedback! \uD83E\uDD29'
    }

    setInputValue(feedbackText)
  })
})
