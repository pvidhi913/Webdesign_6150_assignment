       
 const time_el = document.querySelector(".watch .time");
 const start_btn = document.getElementById("start");
 const stop_btn = document.getElementById("stop");
const reset_btn = document.getElementById("reset");
        
let seconds = 0;
let interval = null;


function setCurrentDate() {
  // Set the date picker value and savedDate to the current date
  let now = new Date();
  let currentDate = now.toISOString().split('T')[0];
  $('#datepicker').val(currentDate);
  savedDate = now;
}

$(document).ready(function () {
  setCurrentDate();
$('#datepicker').on('change', function() {
  let selectedDate = new Date(this.value);
  let currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0); // Reset time to start of day

  // Check if the selected date is the current date
  if (selectedDate.getTime() === currentDate.getTime()) {
      savedDate = selectedDate;
  } else {
      // If not the current date, set date picker to the current date
      setCurrentDate();
      savedDate = currentDate;
  }
});

async function fetchUserDataPromise() {
    return new Promise((resolve) => {
    setTimeout(() => {
    resolve([
    { id: 1, name: '' },
     { id: 2, name: '' }
      ]);
    }, 2000); // Simulate a 2-second delay for fetching data
    });
     }
        
 async function fetchUserData() {
const data = await fetchUserDataPromise();
  console.log(data);
}
        
start_btn.addEventListener("click", async () => {
  if (!interval) {
      interval = setInterval(() => {
       timer();
     }, 1000);
        
await fetchUserData(); // Fetch user data asynchronously
 }
});
        
  stop_btn.addEventListener("click", () => {
    stop();
  });
        
  reset_btn.addEventListener("click", () => {
    reset();
  });
});     
  function timer() {
     seconds++;
        
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds - hrs * 3600) / 60);
  let secs = seconds % 60;
        
  if (secs < 10) secs = "0" + secs;
  if (mins < 10) mins = "0" + mins;
  if (hrs < 10) hrs = "0" + hrs;
        
  time_el.innerText = `${hrs}:${mins}:${secs}`;
 }
        
function stop() {
  clearInterval(interval);
   interval = null;
}
        
function reset() {
  stop();
  seconds = 0;
  time_el.innerText = "00:00:00";
  }

