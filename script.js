const apiKey ="edc228562ac0a8aa3116d41c0687cf56"
const input = document.querySelector("top-banner form input")
const form=document.querySelector(".top-banner form")
const url=`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`