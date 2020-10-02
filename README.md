[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)



## Prerequisites

* HTML, CSS & JavaScript
* The DOM & DOM Selectors
* Event Listeners & Event Handlers

<br>

## Instructions

1. Fork and clone this repository.
2. Fullfill the listed requirements.
3. Make a pull request to turn your work in.

<br>

## #1 - Pixart (Required)

For this assignment you'll be creating a Javascript painting app. When you're done, [it should display this functionality](http://ga-wdi-exercises.github.io/pixart_js/).

Use the starter code and commit each step of the exercise.


### 1. Get color setting working

* When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field.
* You can use `document.querySelector` (or another document method) to select the element, then add an event listener.

> **HINT:** You will notice that the page refreshes whenever you click the button. You need to prevent this from happening using a method you have not used before. Google "javascript event prevent default".

:red_circle: **Commit.**

### 2. Enable enter key to change color

* The same thing should happen when I press the enter key from inside the input field

:red_circle: **Commit.**

### 3. Make the squares

* Create 20 divs of the "square" class and append them to the body
  * **Hint**: use `.appendChild()`

:red_circle: **Commit.**

### 4. Clicking a square should change its color to green

* Add functionality so that when I click on each "square", it changes the color of that individual square to "green"
  * **Hint**: either add the event listener while creating the squares, or listen for events on the `body` element

:red_circle: **Commit.**

### 5. Clicking a square makes it be the selected color

* Modify your code so that when I click on each "square", it changes to the color I set using my input instead of "green" every time.

:red_circle: **Commit.**

### 6. Scale it appropriately.

* Modify the CSS so that the "square" class has a height and width of 10px and a margin of 0.
* Modify your code so that you are creating 8000 divs instead of 20.
* Change the event that changes your box colors from 'click' to 'mouseover'
* Paint a picture!

:red_circle: **Commit.**

<br>

## Bonus (Pixart)

### 7. Enable lifting of "brush"/"pen".

Make it so that clicking the canvas "turns off" and "turns on" the paintbrush.  Have there be an indicator that says "Paintbrush on" when it's on and "Paintbrush off" when it's off.  Changing colors should not change whether the paintbrush is off or on.

### 8. Color History

Add a color swatch. You should have 3 boxes with the most recent 3 colors used. When you click on each of those boxes, it should set the current brush color back to that color.

<br><br>

## #2 - Gladiator (Required)
The Emperor has commissioned you to build a Gladiator Arena. You will do so
using your knowledge of object-oriented Javascript and ES6 classes.

All of your Javascript code will be written in `gladiator.js` and `arena.js`.
You can test your code by opening `index.html` in the browser and interacting
with the console.

### Part 1: The Gladiator

Create a `Gladiator` class that has the following properties...

- a `name`
- a `weapon` (one of Spear, Club, Trident)

Once defined, you should be able to do the following...

```js
const max = new Gladiator("Maximus", "Trident");
console.log(max.name); // "Maximus"
console.log(max.weapon); // "Trident"
```

### Bonus

Make it so that you cannot assign a Gladiator an invalid weapon (i.e., anything
aside from Spear, Club or Trident. That means running code like
`new Gladiator("Jesse", "Taco")` would throw an error

**_Note:_** Complete Part 2 before starting the Bonus

### Part 2: The Arena

Create an `Arena` class that meets the following criteria...

### An arena has a name

```js
const colosseum = new Arena("Colosseum");
console.log(colosseum.name); // => Colosseum
```

### The name should be capitalized

```js
const megalopolis = new Arena("megalopolis");
console.log(megalopolis.name); // => Megalopolis
```

### An arena can have gladiators

```js
const colosseum = new Arena("Colosseum");
console.log(colosseum.gladiators); // => []
```

### You can add a gladiator to the arena

```js
const max = new Gladiator("Maximus", "Trident");
const colosseum = new Arena("Colosseum");
colosseum.addGladiator(max);
console.log(colosseum.gladiators); // => [Gladiator]
```

### The arena should never have more than 2 gladiators in it at a time

```js
const max = new Gladiator("Maximus", "Trident");
const titus = new Gladiator("Titus", "Sword");
const andronicus = new Gladiator("Andronicus", "Sword");
const colosseum = new Arena("Colosseum");
colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.addGladiator(andronicus);
console.log(colosseum.gladiators.length); // => 2
```

### If there are two gladiators in the arena, you can call a `fight` method that results in the elimination of one of the gladiators from the arena.

Winning conditions

- Trident beats Spear
- Spear beats Club
- Club beats Trident
- If the two gladiators have the same weapon, they are both eliminated.

```js
const max = new Gladiator("Maximus", "Trident");
const titus = new Gladiator("Titus", "Spear");
const colosseum = new Arena("Colosseum");
colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.fight();
console.log(colosseum.gladiators); // => [max]
```

### Bonus

- Add a method to remove gladiators from the arena by name
- Update your winning conditions so that if the gladiator named "Maximus" is in
  the fight, he wins.
- Add a method to check to see if the crowd is entertained. The crowd is only
  entertained if Maximus is in the arena.
- Before a losing gladiator is eliminated, the user should be prompted to put
  their thumbs up or down. If user votes down, the losing gladiator is removed.
  If the user votes up, the gladiator stays in the arena and his opponent is
  removed. (Life isn't fair). Hint: look up the prompt() method

<br><br>

## Hungry for more??? (Not Required)

MDN Web Docs (previously known as MDN — the Mozilla Developer Network) is an evolving learning platform for Web technologies and the software that powers the Web.

They have an amazing article on JavaScript that goes over the topics we cover in class. Go ahead and read it.

[JS tutorial](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript).


<br><br>


## Plagiarism

Take a moment to refamiliarize yourself with the [Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md). Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
