'use strict'


function submitForm(email,age,bgColor,txtColor,birthDate,birthTime,){
    const user = {
        email,
        age,
        bgColor,
        txtColor,
        birthDate,
        birthTime
    }
    saveToStorage('userData',user)
}