// fetching the targeted elements
let submitBtn = document.getElementById("submit-btn");
let zodiacSign = document.getElementById("zodiac-select");
let selectedDay = document.getElementById("day-select");
let output = document.getElementById("output-container");

// adding click event to submit button inorder to fetch the targeted data
submitBtn.addEventListener("click", () => {
  let zodiac = zodiacSign.value;
  let day = selectedDay.value;
  let URL = `https://aztro.sameerkumar.website/?sign=${zodiac}&day=${day}`;
  console.log(URL);

  fetch(URL, {
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.current_date);
      // console.log(data.description);
      // console.log(data.mood);
      // console.log(data.color);
      // console.log(data.lucky_number);

      output.innerHTML = `
        <div id="output" class="row p-4 mt-5 align-items-center">
        <div id="image-cont" class="col-md-4 col-sm-12 mb-lg-0 mb-sm-4 text-center">
            <div id="img-container">
                <img src="images/${zodiac}.png" alt="aries">
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
                    <p class="me-5">Mood: ${data.mood}</p>
                    <p class="me-5">Color: ${data.color}</p>
                    <p>Lucky Number: ${data.lucky_number}</p>
                </div>
            </div>
        </div>    
        </div>`;
    });
});
