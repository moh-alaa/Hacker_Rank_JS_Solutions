// Complete the countingVallys function below.

function countingValleys(steps, path) {

    let l = 0,
        v = 0
  
    for (let i = steps; i-- > 0;) {
      if (path.charAt(i) === 'U') {
        if (l++ == 0) {
          ++v
        }
      } else {
        --l
      }
    }
  
    return v
  }
  
console.clear();

console.group('Test case 1');
    console.log(`There are a total of ${countingValleys(8, 'UDDDUDUU')} vally`);
console.groupEnd();

console.group('Test case 2');
    console.log(`There are a total of ${countingValleys(12, 'DDUUDDUDUUUD')} vally`);
console.groupEnd();
