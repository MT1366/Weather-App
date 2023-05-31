// import axios from "axios"

const input = document.querySelector('.input-city');
const weatherIcon = document.querySelector('.weather-icon')
const logOut = document.getElementById('log-out');

logOut.addEventListener('click',function(){
  window.location.href = "http://127.0.0.1:5500/index.html"

})

// // Get the input tag element
// const inputTag = document.getElementById('input-tag');

// // Create a modal element
// const modal = document.createElement('div');
// modal.classList.add('modal');

// // Listen for input events on the input tag
// inputTag.addEventListener('input', () => {
//   // Get the input value
//   const inputValue = inputTag.value;

//   // Create a new modal content element with the input value
//   const modalContent = document.createElement('div');
//   modalContent.classList.add('modal-content');
//   modalContent.textContent = inputValue;

//   // Add the new modal content element to the modal
//   modal.appendChild(modalContent);

//   // Show the modal
//   modal.style.display = 'block';
// });

// // Add the modal to the document body
// document.body.appendChild(modal);


const getCity = async function (cityName) {
  const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=cc22f8277ff25439908eaf210aac9132&units=metric`);
  // const mainPage = document.getElementById('app')
  const data = await url.json();
  const weather = document.querySelector('.weather')
  console.log(data)
  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + " c";
  document.querySelector('.humidity').innerHTML = data.main.humidity;
  document.querySelector('.wind').innerHTML = data.wind.speed;

  if(data.weather[0].main == 'Clouds'){
    weatherIcon.src = 'assets/image/cloud-png.webp'
  }
  else if(data.weather[0].main == 'Rain'){
    weatherIcon.src = 'assets/image/rainny.png'
  }
  else if(data.weather[0].main == 'Clear'){
    weatherIcon.src = 'assets/image/sunny.png'
  }

  weather.style.opacity = 1;

  // if(data.weather[0].main == 'Clouds'){
  //   weatherIcon.src = 'assets/image/cloud-png'
  // } else if(data.weather[0].main == 'Clear'){
  //   weatherIcon.src = 'assets/image/sunny'
  // }else if(data.weather[0].main == 'Rain'){
  //   weatherIcon.src = 'assets/image/rainny'
  // }



}
// .catch(){
//   console.err.
// }


input.addEventListener('input', (event) => {
  event.preventDefault(); 

  setTimeout(() => {
    getCity(input.value);
  }, 1000);
  
     
    
  // }
  
});
// getCity('tehran')


