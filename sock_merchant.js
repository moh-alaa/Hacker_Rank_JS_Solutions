// Complete the sockMerchant function below.


// Solution 1
// Sort the array and count 
function sortAndCount( n, arr ){
    let sorted = arr.sort( (a,b) => a - b );
    let pairs = 0;

    for(let i = 0; i < n; i++ ) {
        if ( sorted[i] === sorted[i+1] ){
            pairs++;
            i += 1;
        }
    }

    return pairs;
}

// Solution 2
// Stock the arr to new arr and count the even ones
function stockAndCount( n, arr ){
    let pairs = 0;
    const colors = arr.reduce( (acc, val) => {
        (!!acc[val]) ? acc[val] += 1 : acc[val] = 1;
        return acc;
    }, {} )

    Object.keys(colors).forEach ( n => {
        let _pair = parseInt( colors[n] / 2);
        if ( _pair >= 1 ) pairs += _pair;
    })

    return pairs;
}


// solution 3
// Splice not repeated numbers from the arr
function spliceAndCount( n, arr){
    let pairs = 0;

    for (let i = n; i-- > 0;){
        let count = arr[i];
        arr.splice(i , 1)

        let offArr = arr.indexOf(count);

        if( offArr != -1){
            arr.splice(offArr , 1);
            --i;
            ++pairs;
        }
    }

    return pairs;
}

const n = 9;
const arr = [10,20,20,10,10,30,50,10,20];


console.clear();

console.group('Sorted and counted');
    console.log(`There are a total of ${sortAndCount( n, arr )} pairs`);
console.groupEnd();


console.group('stockAndCount');
    console.log(`There are a total of ${stockAndCount( n, arr )} Pairs`)
console.groupEnd();

console.group('spliceAndCount');
    console.log(`There are a total of ${spliceAndCount( n, arr )} Pairs`)
console.groupEnd();