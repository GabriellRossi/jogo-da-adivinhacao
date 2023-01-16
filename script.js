const randomNumber = Math.round(Math.random() * 10) // Criando um número randomico de 0 até 10
let xAttempts = 1

function handleClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if (Number(inputNumber.value) == randomNumber) {
    document.querySelector('.screen1').classList.toggle('hide')
    document.querySelector('.screen2').classList.toggle('hide')

    document.querySelector(
      '.screen2 h2'
    ).innerText = `Acertou em ${xAttempts} tentativas`
  }

  xAttempts++
}
