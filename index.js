alert('Your Welcome to my website')

function showData () {
  const message = document.getElementById('text-field')


  message.value = 'Basic JS'
}

function showDetail () {

   const detail = document.getElementById('detail')
   detial.innerHTML = '<b>Description</b>' 
}

function showMultiple () {
   const multiple = document.getElementById('text-field').value
   const display = document.getElementById('display')
   let content = ''
   
   for (let i=1; i <= 12; i++) {
    content += `<p> ${multiple} x ${i} = ${Number(multiple) * i} </p>`
   }

display.innerHTML = content
}

