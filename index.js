var rect = require("./rectangle");
function solveRect(l, b) {
  console.log(`Solving for rect with length = ${l} and width = ${b}`);
  if (l <= 0 || b <= 0) {
    console.log(
      "Rectangle dimensions should be greater than 0 length = " +
        l +
        ", width = " +
        b
    );
  } else {
    console.log("Area of the rectangle = " + rect.area(l, b));
    console.log("Perimeter of the rectangle = " + rect.perimeter(l, b));
  }
}
solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 4);
solveRect(4, -4);
