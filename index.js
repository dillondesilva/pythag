module.exports = {
  validTriad: function validTriad(a, b, c) {
    var sortedArray = [a, b, c].sort();
    if (Math.pow(sortedArray[0], 2) + Math.pow(sortedArray[1], 2) === Math.pow(sortedArray[2], 2)) {
      return true;
    } else {
      return false;
    }
  },

  findHypotenuse: function findHypotenuse(a, b) {
    var sum = Math.pow(a, 2) + Math.pow(b, 2);
    var hypotenuse = Math.sqrt(sum);

    return hypotenuse;
  },

  findShortSide: function findShortSide(a, c) {
    var sortedArray = [a, c].sort();
    var sum = Math.pow(sortedArray[1], 2) - Math.pow(sortedArray[0], 2);
    var side = Math.sqrt(sum);

    return side;
  },

  areaOfRect: function areaOfRect(l, w) {
    return l * w;
  },

  areaOfTrap: function areaOfTrap(h, a, b) {
    return h * ((a+ b) / 2);
  },

  areaOfRhom: function areaOfRhom(x, y) {
    return (x * y) / 2;
  },

  areaOfTri: function areaOfTri(b, h) {
    return (b * h) / 2;
  },

  areaOfCircle: function areaOfCircle(r) {
    return Math.PI * Math.pow(r, 2);
  },

  circumeference: function circumference(r) {
    return 2 * r * Math.PI;
  } ,

  areaOfAnul: function areaOfAnul(r, R) {
    var sortedArray = [r, R].sort();
    return Math.PI * (Math.pow(sortedArray[1], 2) - Math.pow(sortedArray[0], 2));
  }
}