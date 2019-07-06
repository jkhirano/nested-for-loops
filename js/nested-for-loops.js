/**
 * Returns a string representation of a 2-dimensional data structure
 * @param {number} depth
 * @param {number} [width=depth]
 * @returns {string}
 */
function nestedForLoops(depth, width = depth) {
  let result = "\n";

  // Write code here

  //   let finalResult = "";

  //   for (let x = 0; x < depth; x++) {
  //     for (let y = 0; y < width); y++) {
  //       finalResult += { 'x:' + x } + { 'y: '+ y };
  //     }

  // }

  let final = "";

  for (y = 0; y < depth; y++) {
    for (x = 0; x < width; x++) {
      let str = `{x:${x}, y:${y}}`;
      // let str = "{x: " + [x] + ", y: " + [y] + "}";
      result += str;
      // result = result + string;
      if (x < width - 1) {
        result += ", ";
      }
    }
    result += "\n";
    final = result;
  }

  return final;
}

// To see your console output outside the tests add function calls here.
console.log(nestedForLoops(3));
console.log(nestedForLoops(10, 5));
console.log(nestedForLoops(5, 10));
