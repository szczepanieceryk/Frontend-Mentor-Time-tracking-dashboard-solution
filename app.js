// veriables for displaying JSON data
const activityName = document.querySelectorAll('.activity');
const activityTime = document.querySelectorAll('.hours');
const previousActivityTime = document.querySelectorAll('.last');

// all time tracking components
const trackingComponents = document.querySelectorAll('.tracking-component');

// btn's for on click data fetch  
const dailyBtn = document.getElementById('daily');
const weeklyBtn = document.getElementById('weekly');
const monthlyBtn = document.getElementById('monthly');

// function to load JSON data on first page load and page refresh
window.onload = function () {
    // loop each component 
    trackingComponents.forEach(() => {
        for (let i = 0; i < trackingComponents.length; i++) {
            fetch('./data.json')
                .then(res => res.json())
                .then(data => {
                    activityName[i].innerText = data[i].title;
                    activityTime[i].innerText = `${data[i].timeframes.daily.current}hrs`;
                    previousActivityTime[i].innerText = `Yesterday - ${data[i].timeframes.daily.previous}hrs`;
                })
                .catch(err => console.log(`Sorry, something went wrong :( .Error: ${err}`));
        }
    })
}

// fetch data on click to switch between day/week/month
// time tracker by day
dailyBtn.addEventListener('click', () => {
    // add/remove active class from btn's
    weeklyBtn.classList.remove('active');
    monthlyBtn.classList.remove('active');
    dailyBtn.classList.toggle('active');

    trackingComponents.forEach(() => {
        for (let i = 0; i < trackingComponents.length; i++) {
            fetch('./data.json')
                .then(res => res.json())
                .then(data => {
                    activityName[i].innerText = data[i].title;
                    activityTime[i].innerText = `${data[i].timeframes.daily.current}hrs`;
                    previousActivityTime[i].innerText = `Yesterday - ${data[i].timeframes.daily.previous}hrs`;
                })
                .catch(err => console.log(`Sorry, something went wrong :( .Error: ${err}`));
        }
    })
})

// time tracker by week
weeklyBtn.addEventListener('click', () => {
    dailyBtn.classList.remove('active');
    monthlyBtn.classList.remove('active');
    weeklyBtn.classList.add('active');

    trackingComponents.forEach(() => {
        for (let i = 0; i < trackingComponents.length; i++) {
            fetch('./data.json')
                .then(res => res.json())
                .then(data => {
                    activityName[i].innerText = data[i].title;
                    activityTime[i].innerText = `${data[i].timeframes.weekly.current}hrs`;
                    previousActivityTime[i].innerText = `Last week - ${data[i].timeframes.weekly.previous}hrs`;
                })
                .catch(err => console.log(`Sorry, something went wrong :( .Error: ${err}`));
        }
    })
})

// time tracker by month
monthlyBtn.addEventListener('click', () => {
    dailyBtn.classList.remove('active');
    weeklyBtn.classList.remove('active');
    monthlyBtn.classList.toggle('active');

    trackingComponents.forEach(() => {
        for (let i = 0; i < trackingComponents.length; i++) {
            fetch('./data.json')
                .then(res => res.json())
                .then(data => {
                    activityName[i].innerText = data[i].title;
                    activityTime[i].innerText = `${data[i].timeframes.monthly.current}hrs`;
                    previousActivityTime[i].innerText = `Last month - ${data[i].timeframes.monthly.previous}hrs`;
                })
                .catch(err => console.log(`Sorry, something went wrong :( .Error: ${err}`));
        }
    })
})
