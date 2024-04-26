const emailInput = document.getElementById('email')
const errorMessage = document.getElementById('error-msg')
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const form = document.getElementById('email-form') //<-- Adicionei um seletor pro Form
const submitBtn = document.getElementById('submit-btn') //<-- Adicionei um seletor pro Botão

function validateEmail() {
  const email = emailInput.value.trim()

  if (!email) {
    errorHandler('Input cannot be Empty', true)
    
  } else if (!emailPattern.test(email)) {
    errorHandler('Valid email required', true)

  } else {
    errorHandler('', false)

    document.querySelector('main').classList.add('hidden')
    document.querySelector('.success-msg').classList.remove('hidden')

    const message = document.getElementById('message')

    //Abaixo - Alterei esse trecho abaixo para uma Template String, para que você possa ver como é uma.
    message.innerHTML = `A confirmation email has been sent to <strong class="dark-slate-grey"> ${email} </strong>. Please open it and click the button inside to confirm your subscription.`
  }
}

form.addEventListener('submit', event => {
    //Abaixo - Removi o trecho de condicional para verificar o validateInput()
    event.preventDefault()
})

// Antes esse listener abaixo, acionava a cada input feito no teclado, eu alterei isso para que ele só verifique quando o botão for pressionado.
submitBtn.addEventListener('click', () => {
  validateEmail()
})

// Esse trehco abaixo faz com que quando você começar a digitar, não fique aparecendo um erro no Input.
emailInput.addEventListener('input', () => {
  errorHandler
})

// Criei essa função abaixo para evitar de ter que usar várias vezes o mesmo trecho de código.
function errorHandler(errorMsg, showError){
  if(showError===true){
    errorMessage.classList.add('error')
    emailInput.classList.add('error')
  } else {
    errorMessage.classList.remove('error')
    emailInput.classList.remove('error')
  }
  errorMessage.textContent = errorMsg
}

// Todo o código de validateInput() foi removido.

document.getElementById('dismiss').addEventListener('click', () => {
  document.querySelector('main').classList.remove('hidden')
  document.querySelector('.success-msg').classList.add('hidden')
})
