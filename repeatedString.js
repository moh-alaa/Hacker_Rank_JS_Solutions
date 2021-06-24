// Complete the Repeated String function below.

function repeatedString(s, n) {
    let numbersOfAs = 0;

    if (n >= s.length) {
        let getAs = [...s].filter((e) => e === "a").length;
        numbersOfAs = Math.floor(n / s.length) * getAs;
    }

    let tailStringLength = n % s.length;

    for (let i = 0; i < tailStringLength; i++) {
        if (s[i] === "a") numbersOfAs++;
    }

    return numbersOfAs;
}

function repeatedStringTwo(s, n) {
    let count = 0,
        countA = 0,
        rounds = n % s.length;

    for (let i = s.length; i-- > 0;) {
        if (s.charAt(i) == "a") {
            ++count;
            if (i < rounds) {
                ++countA;
            }
        }
    }

    return ((n - rounds) / s.length) * count + countA;
}

console.clear();

console.group("Test case 1");
console.log(`you have ${repeatedString("ababa", 4)} a from solution one`);
console.groupEnd();

console.group("Test case 2");
console.log(`you have ${repeatedString("abcac", 10)} a from solution one`);
console.groupEnd();

console.group("Test case 3");
console.log(`you have ${repeatedString("abad", 11)} a from solution one`);
console.groupEnd();

console.group("Test case 4");
console.log(`you have ${repeatedString("aba", 10)} a from solution one`);
console.groupEnd();

console.group("Test case 5");
console.log(
    `you have ${repeatedString("a", 1000000000000)} a from solution one`
);
console.groupEnd();

console.group("Test case 1");
console.log(`you have ${repeatedStringTwo("ababa", 4)} a from solution two`);
console.groupEnd();

console.group("Test case 2");
console.log(`you have ${repeatedStringTwo("abcac", 10)} a from solution two`);
console.groupEnd();

console.group("Test case 3");
console.log(`you have ${repeatedStringTwo("abad", 11)} a from solution two`);
console.groupEnd();

console.group("Test case 4");
console.log(`you have ${repeatedStringTwo("aba", 10)} a from solution two`);
console.groupEnd();

console.group("Test case 5");
console.log(
    `you have ${repeatedStringTwo("a", 1000000000000)} a from solution two`
);
console.groupEnd();
