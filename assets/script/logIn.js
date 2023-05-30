
const btn = document.getElementById('button')


btn.addEventListener("submit", () => {
    
    // e.preventDefault()
    const form = document.getElementById('form');
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const formData = new FormData(form);
    formData.append('email', email);
    formData.append('password', password);

  fetch("https://64735fded784bccb4a3c8436.mockapi.io/WeatherAppLoginpage", {
    method: 'POST',
    body: formData
  })
  .then (response => {
    if (response.ok) {
      console.log('data added')
    } else {
      console.log('error')
    } 
  })
    .cath(error => {
      console.log('failed')
  })
})

// });
// alert(email,password)
// axios.post("https://64735fded784bccb4a3c8436.mockapi.io/WeatherAppLoginpage",formData)
//     .then(response => {
//       console.log(response)
//     })
//     .cath(error => {
//       console.log('error')
//     })