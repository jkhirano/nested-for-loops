/**
 * Returns a string representation of a 2-dimensional data structure
 * @param {number} depth
 * @param {number} [width=depth]
 * @returns {string}
 */
function nestedForLoops(depth, width = depth) {
  let result = "\n";

  // Write code here

  let final = "";

  for (y = 0; y < depth; y++) {
    for (x = 0; x < width; x++) {
      let str = `{x:${x}, y:${y}}`;
      result += str;
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
