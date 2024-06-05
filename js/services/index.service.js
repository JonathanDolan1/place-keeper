'use strict'

function onInit(){
    renderUserPrefs()
}

function renderUserPrefs(){
    const userData = loadFromStorage('userData')
    if (!userData) return
    document.querySelector('body').style.backgroundColor = userData.bgColor
    document.querySelector('body').style.color = userData.txtColor
    document.querySelector('.birth-time span').innerText = userData.birthTime
}