const questionBox = document.getElementById("questionBox")
const question = document.getElementById("question")
const yesBtn = document.getElementById("yesBtn")
const noBtn = document.getElementById("noBtn")
const loveMessage = document.getElementById("loveMessage")

questionBox.addEventListener("click", () => {
  questionBox.style.display = "none"
  question.style.display = "block"
  setInitialButtonPositions()
})

yesBtn.addEventListener("click", () => {
  question.style.display = "none"
  loveMessage.style.display = "block"
})

noBtn.addEventListener("mouseover", moveButton)

function setInitialButtonPositions() {
  const buttonContainer = document.querySelector(".button-container")
  const containerRect = buttonContainer.getBoundingClientRect()
  const centerX = containerRect.left + containerRect.width / 2

  yesBtn.style.position = "fixed"
  yesBtn.style.left = `${centerX - yesBtn.offsetWidth - 10}px`
  yesBtn.style.top = `${containerRect.top + 20}px`

  noBtn.style.left = `${centerX + 10}px`
  noBtn.style.top = `${containerRect.top + 20}px`
}

function moveButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth
  const maxY = window.innerHeight - noBtn.offsetHeight
  const x = Math.random() * maxX
  const y = Math.random() * maxY
  noBtn.style.left = `${x}px`
  noBtn.style.top = `${y}px`
}

