document.querySelector('#add-time')

.addEventListener('click', cloneField)

function cloneField(){
   const newFieldContainer =  document.querySelector('.schedule-item').cloneNode(true)
   const fields = newFieldContainer.querySelectorAll('input')
   fields.forEach(function(field){
       field.value = ""

   })
   document.querySelector('#schedule-items').appendChild(newFieldContainer)
}


/*const proffys = [
    { 
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "9899999999",
        bio: "Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220]
    },
    { 
        name: "Izáira Cunha", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "9899999999",
        bio: "Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Matemática",
        cost: "20", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220]
    }

]*/