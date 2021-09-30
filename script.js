var email = document.getElementById('email')
var message = document.getElementById('message')
var button = document.getElementById('button')
var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

button.addEventListener('click', () => {
    !emailRegex.test(email.value) ? message.classList.add('message_show') : message.classList.remove('message_show') && message.classList.add('message')
    email.placeholder = 'example@quantox.com'
})