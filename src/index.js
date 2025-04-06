function updateTime() {
    let newYorkElement = document.querySelector("#new-york");
    if (newYorkElement) {
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newyorkTime = moment().tz("America/New_York");
    newYorkTimeElement.innerHTML = newyorkTime.format("HH:mm:ss[<small>]A[</small>]");
    newYorkDateElement.innerHTML = newyorkTime.format("MMMM Do YYYY");
    }

    let londonElement = document.querySelector("#london");
    if (londonElement) {
    let londonTimeElement = londonElement.querySelector(".time");
    let londonDateElement = londonElement.querySelector(".date");
    let londonTime = moment().tz("Europe/London");
    londonTimeElement.innerHTML = londonTime.format("HH:mm:ss[<small>]A[</small>]");
    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    }

    let tokyoElement = document.querySelector("#tokyo");
    if (tokyoElement) {
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTime = moment().tz("Asia/Tokyo");
    tokyoTimeElement.innerHTML = tokyoTime.format("HH:mm:ss[<small>]A[</small>]");
    tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
    }
}
function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityname = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector(".cities");
    citiesElement.innerHTML = `
    <div class="city">
     <div>
    <h2>${cityName}</h2>
    <div class="date"${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss[<small>]A[</small>]")}</div>
    </div>
    <div class="cities">
    <div class="city">
    <h2>New York</h2>
    <div class="date">August 15th, 2022</div>
    <div class="time">12:00:00 AM</div>
    </div>
    <div class="city">
    <h2>London</h2>
    <div class="date">August 15th, 2022</div>
    <div class="time">12:00:00 AM</div>
    </div>
    <div class="city">
    <h2>Tokyo</h2>
    <div class="date">August 15th, 2022</div>
    <div class="time">12:00:00 AM</div>
    </div>
    </div>
    `;
    }
    updateTime();
    setInterval(updateTime, 1000);

    let citySelectElement = document.querySelector("#city");
    citySelectElement.addEventListener("change", updateCity);