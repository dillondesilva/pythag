# Pytharea

>> Cool package to calculate area and use Pythagoras Theorem

Pytharea is an easy to use npm module which allows you to compute the area of basic polygons and use Pythagoras Theorem to calculate lengths and check for valid triads.

## Getting Started
See instructions below to learn how to use Pytharea!

### Installation
To install Pytharea and save it, use the following command:
```
npm install pytharea
```
### Usage
The following code snippet is a demonstration of using Pytharea to check the validity of three integers as a Pythagorean Triad.

```js
var pytharea = require('pytharea');

var validTriad = pytharea.validTriad(5, 3, 4);

if (validTriad) {
  console.log("3, 4, 5 is a valid Pythagorean triad");
} else {
  console.log("3, 4, 5 is not a valid Pythagorean triad");
}
```

