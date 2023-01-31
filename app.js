const counterElement = document.querySelector('#counter')

let counter = 0
let timerId

// Старт
const btnStart = document.querySelector('#start')
btnStart.onclick = () => {
  timerId = setInterval(function () {
    counter++
    console.log(counter)
    counterElement.textContent = counter
  }, 1000)
}

// Пауза
const btnPause = document.querySelector('#pause')
btnPause.onclick = () => {
  clearInterval(timerId)
}

// Сброс
const btnReset = document.querySelector('#reset')
btnReset.onclick = () => {
  counter = 0
  counterElement.textContent = counter
  clearInterval(timerId)
}
