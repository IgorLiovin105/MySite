const url = 'https://api.telegram.org/bot6403092293:AAGvwm0THjUsxJYWACQFyj01HTGEs5mS4ys/sendMessage?chat_id=1745656292'

document.getElementById('form').addEventListener('submit', (e) => {
   e.preventDefault()
   e.stopPropagation()
   const name = document.getElementById('name').value
   const phone = document.getElementById('phone').value
   const question = document.getElementById('question').value
   fetch(`${url}&text=${name},${phone},${question}`)
})