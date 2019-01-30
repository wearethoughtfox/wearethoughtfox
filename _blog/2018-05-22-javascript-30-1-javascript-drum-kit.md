---
layout: blog
title: 'JavaScript 30 - #1 - JavaScript Drum Kit'
date: 2018-05-22T19:03:02+00:00
categories:
  - Blog
tags:
  - javascript
  - learning
---
Diving in to this course on JavaScript, we're making a drum kit: the user presses a key and it plays a sound. It's all nicely set up in the starter file:

```
<div data-key="65" class="key">
<kbd>A</kbd><span class="sound">clap</span></div>
<audio data-key="65" src="sounds/clap.wav"></audio>
```

The key is linked to the sound using the data key value. <http://keycode.info> is a good way to get these key values.

So we need to listen for these key events:

```
window.addEventListener('keydown', function(e) {
  console.log (e);
});
```

This logs out lots of info to the console including the keyCode.

At this point, I started wondering about functions and the different ways to declare functions.

## Function declarations

These need a name, a list of parameters to the function, enclosed in parentheses and separated by commas and the JavaScript statements that define the function, enclosed in curly brackets, { }.

```
function square(number) {
  return number * number;
}
```

It creates a variable in the current scope which holds the function object. This function variable is hoisted up to the top of the current scope, so the function can be invoked before the declaration.

## Function expressions

The function declaration in a statement always starts with the keyword "function" else it's a function expression.  Function expressions are convenient when passing a function as an argument to another function.

```
var square = function(number) { return number * number; };
var x = square(4); // x gets the value 16
```

A "method" is a function that is a property of an object.

Notes from [here](https://dmitripavlutin.com/6-ways-to-declare-javascript-functions/#1functiondeclaration) and [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

The Airbnb style says to [use function expressions instead of function declarations](https://github.com/airbnb/javascript#functions).

> Why? Function declarations are hoisted, which means that it’s easy - too easy - to reference the function before it is defined in the file. This harms readability and maintainability. If you find that a function’s definition is large or complex enough that it is interfering with understanding the rest of the file, then perhaps it’s time to extract it to its own module! Don’t forget to explicitly name the expression, regardless of whether or not the name is inferred from the containing variable (which is often the case in modern browsers or when using compilers such as Babel). This eliminates any assumptions made about the Error's call stack.

Back from the rabbit hole. The next step involved matching up the keyCode value with the audio. Rather than using IDs or classes, there's a data attribute which can be accessed in a similar way. Also some funky stuff going on with ES6 template literals. Enclose it in a back-tick (\` \`) and then use the $ sign and curly brackets to denote a placeholder - in this case the keyCode value from the event listener. The next bit is to return the function if there's no audio which will stop the function from running altogether. The last bit takes what we've pulled in and plays the audio. Setting the currentTime to 0 allows for repeated presses on the same key in quick succession.

```
window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(audio[data-key="${e.keyCode}"]);
  console.log (audio);
if (!audio) return;
  audio.currentTime = 0;
  audio.play();
});
```

The animation on the buttons can be done by adding and removing a class. To remove the class at the right point and reset the button, use the transitionEnd event. The if statement in the removeTransition function means we only get the transform event. Then a bit of tidying up to put the logic in a separate function playSound and then take in the event.

```
 function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
```

