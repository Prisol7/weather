//function getLocation() {
//  if(navigator.geolocation) {
//    navigator.geolocation.getCurrentPosition(showPosition);
//  }
//  else{
//    document.getElementById(location).innerHTML = "Location is not available"
//  }

//}

//function showPosition(position){
//  const latitude = position.coords.latitude;
//  const longitude = position.coords.longitude;
//  document.getElementById("location").innerHTML = `Latitude: ${latitude}, Longitude: ${longitude}`;
//}

window.addEventListener('load', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
});

function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

  // Display the user's location on the page
  const locationElement = document.querySelector('#location');
  locationElement.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
}

const submitBtn = document.querySelector('#search-button');
submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const inputData = document.querySelector('#name').value 

  const url = `http://localhost:3000/weather/${inputData}`
  const locationElement = document.querySelector('#location');
  const tempElement = document.querySelector('#temperature');
  const windElement = document.querySelector('#wind');
  const humidElement = document.querySelector('#humidity');
  const rainElement = document.querySelector('#rain');
  
  
  

  const weatherData = {
  }
  fetch(url)
  .then(response => response.json())
  .then(data => {
    locationElement.textContent = `${data.name}`;
    tempElement.textContent = `${data.main.temp}`;
    windElement.textContent = `${data.wind.speed}`;
    humidElement.textContent = `${data.main.humidity}`;
    
    if(data.weather[0].main === 'Rain' || data.weather[0].main === 'Thunderstorm' || data.weather[0].main === 'Drizzle'){
      const rainvolume = data.rain['1h'] || data.rain['3h'];
      rainElement.textContent = `${rainvolume}`;
      
      const iconElement = document.getElementById("icon");
      iconElement.setAttribute("src", "./icons/storm.png");
    }
    else{
      console.log('it is not currently raining');
     
    }
    if(data.weather[0].main === 'Snow' ){
      const snowvolume = data.snow['1h'] || data.snow['3h'];
      rain=Element.textContent = `${snowvolume}`;
      
      const iconElement = document.getElementById("icon");
      iconElement.setAttribute("src", "./icons/snow.png");
    }
    else{
      console.log('it is not currently snowing');
      
    }
    if(data.weather[0].main === 'Clouds' ){
      const iconElement = document.getElementById("icon");
      iconElement.setAttribute("src", "./icons/cloudy.png");
    }
    if(data.weather[0].main === 'Clear'){
      const iconElement = document.getElementById("icon");
      iconElement.setAttribute("src", "./icons/sun.png");
    }
  

  })
  .catch(error => console.error(error))
  

  
  
})