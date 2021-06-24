// Complete the Jumping on clouds function below.

function jumpingOnClouds(c){
    let j = 0;

    for (let i = c.length; --i > 0; ++j){
        if (c[i - 2] == 0){
            --i;
        }
    }
    return j;
}

console.clear();

console.group('Test case 1');
    console.log(`you can jump on ${jumpingOnClouds([0,1,0,0,0,1,0])} cloud`);
console.groupEnd();

console.group('Test case 2');
    console.log(`you can jump on ${jumpingOnClouds([0,0,1,0,0,1,0])} cloud`);
console.groupEnd();

console.group('Test case 3');
    console.log(`you can jump on ${jumpingOnClouds([0,0,0,0,1,0])} cloud`);
console.groupEnd();
