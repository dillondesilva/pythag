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

## API
All arguments passed to all functions must be integers
### .validTriad(a, b, c)
Returns true if given numbers are a valid triad. Order of arguments passed does not matter.

```js
var validTriad = pytharea.validTriad(12, 13, 5);

console.log(validTriad);
// Expected output = true
```

### .findHypotenuse(a, b)
Returns the result of what the hypotenuse of the two numbers would be.
```js
var hypotenuse = pytharea.findHypotenuse(3, 4);

console.log(hypotenuse);
// Expected output = 5
```

### .findShortSide(a, b)
Returns the result of what the second short side would given the first short side and hypotenuse. Order of arguments passed does not matter.
```js
var shortSide = pytharea.findShortSide(5, 3);

console.log(shortSide);
// Expected output = 4
```

### .areaOfRect(a, b)
Returns the area of a rectangle, square or parallelogram using the given lengths.
```js
var area = pytharea.areaOfRect(5, 4);

console.log(area);
// Expected output = 3
```

### .areaOfTrap(a, b, c)
Returns the area of a trapezium. Please make sure that the first argument you pass is the height.
```js
var area = pytharea.areaOfTrap(10, 6, 9);

console.log(area)
// Expected output = 270
```

### .areaOfRhom(a, b)
Returns the area of a rhombus using the given lengths.
```js
var area = pytharea.areaOfRhom(6, 7);

console.log(area);
// Expected output = 21
```

### .areaOfTri(a, b)
Returns the area of a triangle using the given lengths.
```js
var area = pytharea.areaOfTri(12, 12);

console.log(area);
// Expected output = 72
```

### .areaOfCir(a)
Returns the area of a circle using the given radius.
```js
var area = pytharea.areaOfCir(4);

console.log(area);
// Expected output (to 2 d.p) = 50.27
```

### .circumference(a)
Returns the circumference of a circle using the given radius.
```js
var circumference = pytharea.circumference(7);

console.log(circumference);
// Expected output (to 2 d.p) = 43.98
```

### .areaOfAnnu(a, b)
```js
var area = pytharea.areaOfAnnu(9, 2);

console.log(area);
// Expected output (to 2 d.p) = 241.90
```
Returns the area of an annulus using the given radii.


