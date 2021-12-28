# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JS

### What I learned

Fetching data on first page load and every refresh using window.onload.

```js
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
};
```

## Author

- Website - [Eryk Szczepaniec](http://erykszczepaniec.pl/)
- Frontend Mentor - [@szczepanieceryk](https://www.frontendmentor.io/profile/szczepanieceryk)
