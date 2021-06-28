function processData(myArray) {
    let unique = myArray.filter((v,i,a) => a.indexOf(v) === i);
    let sorted = unique.sort((a,b) => a - b).reverse();
    
    return sorted[1];
}

processData([2,3,6,5,6]);