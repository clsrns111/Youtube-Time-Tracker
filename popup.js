document.addEventListener("DOMContentLoaded", () => {
  let start = document.querySelector("button:nth-child(1)");
  let stop = document.querySelector("button:nth-child(2)");
  let output = document.querySelector("p");

  // Buttons
  start.addEventListener("click", startFunc);
  stop.addEventListener("click", stopFunc);

  // Start Function
  let numbers = Array.from(Array(60).keys()).map(String);
  for (let i = 0; i < 10; i++) {
    numbers[i] = "0" + numbers[i];
  }
  numbers.push("00");

  let time, loop;
  let sec = "00",
    min = "00",
    hour = "00",
    s = 0,
    m = 1,
    h = 1,
    startCheck = false,
    resetCheck = false;

  function startFunc() {
    if (!startCheck) {
      startCheck = true;
      if (resetCheck) {
        (sec = "00"),
          (min = "00"),
          (hour = "00"),
          (s = 0),
          (m = 1),
          (h = 1),
          (resetCheck = false);
      }

      loop = setInterval(function () {
        sec = numbers[s];
        if (s == 60) {
          s = -1;
        }
        s++;

        if (s == 0) {
          min = numbers[m];
          if (m == 60) {
            m = 0;
          }
          m++;
        }

        if (s == 0 && m == 1) {
          hour = numbers[h];
          if (h == 60) {
            h = 0;
          }
          h++;
        }

        time = `${hour}:${min}:${sec}`;
        output.textContent = time;

        if (hour + min + sec == "595959") {
          stopFunc();
        }
      }, 1000);
    }
  }

  // Stop Function
  function stopFunc() {
    clearInterval(loop);
    startCheck = false;
  }

  // Reset Function
  /*   function resetFunc() {
    clearInterval(loop);
    time = "00:00:00";
    output.textContent = time;
    resetCheck = true;
    startCheck = false;
  } */
});
