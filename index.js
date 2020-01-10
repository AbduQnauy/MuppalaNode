var rect = require("./rectangle");
function solveRect(l, b) {
  console.log(`Solving for rect with length = ${l} and width = ${b}`);

  rect(l, b, (error, rectangle) => {
    if (error) {
      console.log("Error: ", error.message);
    } else {
      console.log("the area: " + rectangle.area());
      console.log("the perimeter: " + rectangle.perimeter());
    }
  });

  console.log("this statement is called after calling to rect()");
}
solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 4);
solveRect(4, -4);
