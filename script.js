const apiKey ="edc228562ac0a8aa3116d41c0687cf56"
const input = document.querySelector(".top-banner form input")
const form=document.querySelector(".top-banner form")
const getUl = document.querySelector(".cities")
const ul =document.querySelector(".cities")
form.addEventListener("submit",submitHandler)
function submitHandler(e){
    e.preventDefault()
    console.log(input.value)
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`
    fetch(url)
    .then(Response=>Response.json())
    .then(data=>{
        console.log(data)
        const {main,sys,weather,name}=data
        let li = document.createElement("li")
        li.classList.add("city")
        li.innerHTML=`<h2 class="city-name" data-name="Mashhad,IR">
        <span>${name}</span>
        <span>${sys.country}</span>
    </h2>
    <div class="city-temp">${Math.round(main.temp)}</div>
    <figure>
        <img class="city-icon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/01d.svg" alt="city">
        <figurecaption>${weather[0].description}</figurecaption>
    </figure>`
    ul.appendChild(li)
    })
}
