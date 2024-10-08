const url = 'https://api.telegram.org/bot6403092293:AAGvwm0THjUsxJYWACQFyj01HTGEs5mS4ys/sendMessage?chat_id=1745656292'

document.getElementById('form').addEventListener('submit', (e) => {
   e.preventDefault()
   e.stopPropagation()
   const name = document.getElementById('name').value
   const phone = document.getElementById('phone').value.replace('+7', '8')
   const question = document.getElementById('question').value
   if (name !== '' && phone !== '' && question !== '') {
      fetch(`${url}&text=${name},%20${phone},%20${question}`)
         .then(response => {
            if (response.ok) {
               document.getElementById('name').value = ''
               document.getElementById('phone').value = ''
               document.getElementById('question').value = ''
            }
         })
   }
})

document.querySelector('.tel').addEventListener('input', e => {
   var keyCode
   var pos = e.target.selectionStart
   if (pos < 3) e.preventDefault()
   var matrix = '+7 (___) ___ ____',
      i = 0,
      def = matrix.replace(/\D/g, ''),
      val = e.target.value.replace(/\D/g, ''),
      new_value = matrix.replace(/[_\d]/g, function (a) {
         return i < val.length ? val.charAt(i++) || def.charAt(i) : a
      })
   i = new_value.indexOf('_');
   if (i != -1) {
      i < 5 && (i = 3)
      new_value = new_value.slice(0, i)
   }
   var reg = matrix.substr(0, e.target.value.length).replace(/_+/g,
      function (a) {
         return '\\d{1,' + a.length + '}'
      }).replace(/[+()]/g, '\\$&')
   reg = new RegExp('^' + reg + '$')
   if (!reg.test(e.target.value) ||
      e.target.value.length < 5 ||
      keyCode > 47 && keyCode < 58)
      e.target.value = new_value
   if (e.type == 'blur' && e.target.value.length < 5)
      e.target.value = ''
})

document.querySelector('.tel').addEventListener('focus', e => {
   var keyCode
   var pos = e.target.selectionStart
   if (pos < 3) e.preventDefault()
   var matrix = '+7 (___) ___ ____',
      i = 0,
      def = matrix.replace(/\D/g, ''),
      val = e.target.value.replace(/\D/g, ''),
      new_value = matrix.replace(/[_\d]/g, function (a) {
         return i < val.length ? val.charAt(i++) || def.charAt(i) : a
      })
   i = new_value.indexOf('_');
   if (i != -1) {
      i < 5 && (i = 3)
      new_value = new_value.slice(0, i)
   }
   var reg = matrix.substr(0, e.target.value.length).replace(/_+/g,
      function (a) {
         return '\\d{1,' + a.length + '}'
      }).replace(/[+()]/g, '\\$&')
   reg = new RegExp('^' + reg + '$')
   if (!reg.test(e.target.value) ||
      e.target.value.length < 5 ||
      keyCode > 47 && keyCode < 58)
      e.target.value = new_value
   if (e.type == 'blur' && e.target.value.length < 5)
      e.target.value = ''
})