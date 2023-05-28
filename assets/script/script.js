

const getCity = async function (cityName) {

    const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=cc22f8277ff25439908eaf210aac9132`);
    
    const mainPage = document.getElementById('app')
    // const inputCity = document.getElementById('input-city')

   const data = await url.json()

   console.log(data);


    const html = `<div class="input-group mb-3 d-flex flex-column border rounded-2 align-content-center text-center gap-4 justify-content-center" style="height:400px">

    <img src="${data.weather[0].icon}" width="300px" alt="" class="d-flex border">
    <p>${data.weather[0].description}</p>
    
    <div class="d-flex flex-row gap-2 text-center justify-content-around border justify-center">
    <p> Feels Like: ${data.main.feels_like.toFixed(0)
    }</p>
    <p>Tempature: ${data.main.temp.toFixed(2)}</p>
    </div>
    

    <div class="d-flex flex-row gap-2 text-center justify-content-around border justify-center">
    <p> Humidity: ${data.main.humidity}</p>
    <p> Wind Speed: ${data.wind.speed}</p>


    </div>

    </div>`

    mainPage.insertAdjacentHTML('beforeend', html)
}

getCity('rasht');