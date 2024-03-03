# JavaScript30 - JavaScript Drum Kit

This is the first challenge from Wes Bos's [30 Day Vanilla JS Coding Challenge](https://javascript30.com/). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- Press on the keyboard the displayed keys to play the drum kit sounds.

### Screenshot

![](./screenshot.png)

### Links

- [View Code](https://github.com/elizerdim/javascript-drum-kit)
- [Live Preview](https://elizerdim.github.io/javascript-drum-kit/)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- JavaScript

### What I learned

- The 'keyCode' property is used in the tutorial, but I found out it was deprecated, so I learned about **'key'** and **'code'** properties. 'key' returns the key value (what is typed on the screen when the key is pressed) and 'code' returns the physical key code (regardless of the user's keyboard layout). 

- I did't use the Array.from() method to convert the nodelist into an array because my research showed that forEach() method can be used on nodelists.

- I learned how to use **'keydown'** and **'transitionend'** events.

- The following code should be used in the callback function of the event listener to be able to play the sounds again before waiting for them to end.
```js
audio.currentTime = 0;
```

- I used a compressed file for the background image after realizing the bigger file slowed down page load. There are some links in the Useful resources section below.

- I revisited this project months later to add 'click' event so that it can be used on mobile phones too. I utilized **event bubbling** and used .parentNode and .getAttribute methods to get the data-key value when the children of the .key elements are clicked.

### Continued development

In future projects, I'd like to learn how to use other events in JavaScript and how to make this project work on touchscreen devices. -- I revisited the project later on and added 'click' event for this :)

### Useful resources

- [Event reference](https://developer.mozilla.org/en-US/docs/Web/Events) - Useful event reference from MDN
- [Optimizing images for the web](https://dev.to/prototyp/optimizing-images-for-the-web-an-in-depth-guide-4j7d) - An in-depth guide for image optimization for the web
- [Online image compressor](https://compressor.io/) - An online tool for compressing image files
- [Event bubbling and event capturing](https://www.javascripttutorial.net/javascript-dom/javascript-events/) - Event flow and how to utilize event bubbling is explained in this page