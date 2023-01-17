// Variáveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const minNumber = 0
const maxNumber = 10
let randomNumber = Math.round(Math.random() * 10) // Criando um número randomico de 0 até 10
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keypress', resetEnter)

// Funções
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  verifyInput(inputNumber)

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    screen2.querySelector('h2').innerText = `Acertou em ${xAttempts} tentativas`
  }

  inputNumber.value = ''

  xAttempts++
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function resetEnter(e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}

function verifyInput(inputNumber) {
  if (inputNumber.value == '') {
    alert('Tentativa Invalida')
    xAttempts--
  } else if (inputNumber.value < minNumber || inputNumber.value > maxNumber) {
    alert('Coloque um número entre 0 e 10')
    xAttempts--
  }
}
