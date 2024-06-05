'use strict'

function onSubmit(ev){
    ev.preventDefault()
    const userData = Array.from(document.querySelectorAll('input')).map(elInput => elInput.value)
    submitForm(...userData)
}

function onInputAge(age){
    document.querySelector('label.age span').innerText = age
}