// fetching the targeted elements
let submitBtn = document.getElementById("submit-btn");
let zodiacSign = document.getElementById("zodiac-select");
let selectedDay = document.getElementById("day-select");
let output = document.getElementById("output-container");

// creating async function to fetch the data
async function horoscope() {
  let zodiac = zodiacSign.value;
  let day = selectedDay.value;
  let URL = `https://aztro.sameerkumar.website/?sign=${zodiac}&day=${day}`;

  const response = await fetch(URL, {
    method: "POST",
  });
  const data = await response.json();

  output.innerHTML = `
      <div id="output" class="row p-4 mt-5 align-items-center">
      <div id="image-cont" class="col-md-4 col-sm-12 mb-lg-0 mb-sm-4 text-center">
          <div id="img-container">
              <img src="images/${zodiac}.png" alt="${zodiac}">
          </div>
          <div class="img-caption mt-3 text-light text-center">
              <span>${zodiac.toUpperCase()}</span>
          </div>
      </div>
      <div class="col-md-8 col-sm-12">
          <div class="text-container text-light">
              <p class="text-start curr-date">${data.current_date}</p>
              <p class="mb-3">${data.description}</p>
              <div class="others d-flex flex-md-row flex-sm-column">
                  <p id="mood" class="me-5">Mood: ${data.mood}</p>
                  <p id="color" class="me-5">Color: ${data.color}</p>
                  <p id="lucky-number">Lucky Number: ${data.lucky_number}</p>
              </div>
          </div>
      </div>    
      </div>`;

  // changing the background image and logo color according to selected zodiac sign
  let body = document.querySelector("body");

  switch (zodiac) {
    case "aries":
      {
        body.style.backgroundImage = "url(images/aries-bg-01.jpg)";
      }
      break;
    case "taurus":
      {
        body.style.backgroundImage = "url(images/taurus-bg-01.jpg)";
      }
      break;
    case "gemini":
      {
        body.style.backgroundImage = "url(images/gemini-bg-01.jpg)";
      }
      break;
    case "cancer":
      {
        body.style.backgroundImage = "url(images/cancer-bg-01.jpg)";
      }
      break;
    case "leo":
      {
        body.style.backgroundImage = "url(images/leo-bg-01.jpg)";
      }
      break;
    case "virgo":
      {
        body.style.backgroundImage = "url(images/virgo-bg-01.jpg)";
      }
      break;
    case "libra":
      {
        body.style.backgroundImage = "url(images/libra-bg-01.jpg)";
      }
      break;
    case "scorpio":
      {
        body.style.backgroundImage = "url(images/scorpio-bg-01.jpg)";
      }
      break;
    case "sagittarius":
      {
        body.style.backgroundImage = "url(images/sagittarius-bg-01.jpg)";
      }
      break;
    case "capricorn":
      {
        body.style.backgroundImage = "url(images/capricorn-bg-01.jpg)";
      }
      break;
    case "aquarius":
      {
        body.style.backgroundImage = "url(images/aquarius-bg-01.jpg)";
      }
      break;
    case "pisces":
      {
        body.style.backgroundImage = "url(images/pisces-bg-01.jpg)";
      }
      break;
    case "default": {
      body.style.backgroundImage = "url(images/bg-01.jpg)";
    }
  }
}

// adding click event to submit button inorder to fetch the targeted data
submitBtn.addEventListener("click", horoscope);