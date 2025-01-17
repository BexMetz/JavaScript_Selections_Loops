console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let a = 1; a<100; a++){
    if(a % 2 !== 0){
        console.log(a);
    }
}

let b = 1;
while (b < 100) {
    if (b % 2 !== 0) {
        console.log(b);
    }
    b++;
}

let c = 1;
do {
    if (c % 2 !== 0) {
        console.log(c);
    }
    c++;
} while (c < 100);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let d = 1; d < 100; d ++){
    if (d % 3 == 0 && d % 5 == 0){
        console.log("FIZZBUZZ");
    } else {
        if (d % 3 == 0){
            console.log("FIZZ");
        } else if (d % 5 == 0){
            console.log("BUZZ");
        } else {
            console.log(d);
        }
    }
}

let e = 1;
while (e <= 100) {
    let output = "";
    if(e % 3 == 0) {
        output += "FIZZ";
    }
    if (e % 5 == 0) {
        output += "BUZZ";
    }
    console.log(`${e} ${output}`);
    e++;
}

let f = 1;
do {
    let output = "";
    if (f % 3 == 0){
        output += "FIZZ";
    }
    if (f % 5 == 0) {
        output += "BUZZ";
    }
    console.log(`${f} ${output}`);
    f++;
} while (f <= 100);

let numberFinder = Math.round((Math.random() * 500)); 
let n = Math.round(Math.random() * (500 - 100) + 100); 

for (let g = 1; g <= n; g++) {
    if (g == numberFinder) {
        console.log(`Found ${numberFinder}!`);
        break;
    }
    if (g == n){
        console.log(`Did not find ${numberFinder} within 1-${n}!`);
    }
}

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let m = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let z = start; z <= m; z++) {
    let output = "";
    if (z % fizzDivisor == 0) {
        output += "FIZZ";
    }
    if (z % buzzDivisor == 0) {
        output += "BUZZ";
    }
    console.log(`${z} ${output}`);
}