// 1.Write a JavaScript function that takes an array of numbers as input and returns the largest number in the array. Ensure the function handles both positive and negative numbers correctly?

let arr=[3,-7,10,-15,2,4];
let max = arr[0];

for(i=1;i<arr.length;i++) {
    
    if(arr[i]>max) {
        max=arr[i]
    }
} 

console.log(max);

//or

let give = [3,-7,10,-15,2,4];
let point = Math.max(3,-7,10,-15,2,4);
console.log(point);

// 2.Create a JavaScript function that checks if a given string is a palindrome.A palindrome is a word, phrase, number, or other sequence of characters that reads the same backward as forward.Ignore spaces, punctuation, and capitalization when determining if the string is a palindrome.
let str="Mark ram";
let correct = str.toLowerCase();
let cor = correct.replace(/[^a-z0-9]/g, "");
let play = cor.split().reverse().join();

if(cor=play){
    console.log(true);
} else{
    console.log(false);
}

// 3.Implement a JavaScript function that sorts an array of objects by a specific key. The fucnction should accept two parameters : an array of objects and the key to sort by. Ensure the fucntion work for both numerical and string values.
{
let arr = [
    {name:"Aryan", rollno:15},
    {name:"Prem", rollno:13}
];

let prime = arr.sort((a,b) => a.rollno - b.rollno);

console.log(prime);
}


// 4.Write a JavaScript function that takes two arguments: an array of numbers and a target number. The function should Return true if there are two distinct numbers in the array that add up to the target number, and false otherwise.

{

let arr=[1,2,3,4,5,6];
let target=4;
let seen= new Set();
for(i=0;i<arr.length;i++) {
    let needed=target-arr[i];
     if(seen.has(needed)){
         console.log("true");
        break;
    
    }         
   seen.add(arr[i]);
}

}



// 5.Create a JavaScript function that counts the occurences of each character in a given string.The function should return an object where the keys are the characters and the values are their respective counts.Ignore spaces in the count.

{

let str="good morning";
let count={};

for(i=0;i<str.length;i++){
    let tell=str[i];

    if(tell === " "){
        continue;
    }

    if(count[tell]){
        count[tell]++;
    } else {
        count[tell]=1;
    }
}

console.log(count);

}

// 6.Create a JavaSctipt function that fetches data from a given API endpoint using the Fetch API. The function should retrieve the data and log the results to the console.Handle potential errors that may occur during the fetch operation.

{

async function fetchData() {
    try {
        let response=await fetch("https://jsonplaceholder.typicode.com/users");
        let data= await response.json();
        console.log(data);
        } catch (error) {
        console.log("Error:",error);
        }
}
fetchData();
}

// Design a JavaScript function that generates a random color in hexadecimal format(e.g.#ff5733).Each time the function is called, it should return a valid random hexadecinam colour.

{
let dom=Math.floor(Math.random() * 16777215);
let hexcolor = "#" +dom.toString(16).padStart(6,"0");

console.log(hexcolor);
}

// 8.Write a JavaScript function that checks if a given number is prime. A Prime number is a natural number greter than 1 that is not divisible by any number other than 1 and itself. The fucntion should reurn true if the number is Priem and false otherwise.

{

let num=7;
let prime =true;

if(num <= 1){
    prime=false;
}

for(let i=2;i<num;i++){
    if(num % i === 0){
        prime= false;
        break;
    }
}
if(prime){
    console.log("prime")
} else{
    console.log("Not prime");
}
    
}

// 9.  Create a JavaScript function that simulates counter. Each call to the function increment the counter by one and log the updated count.Implement this using closures.

{

function createCounter(){
    let count=0;

    return function (){
        count++;
        console.log(count);
    }
}

let counter = createCounter();
counter();
counter();
counter();
}

// 10.Write a JavaScript function that validates an email address using a regular expression. The function should return if the email address is valid, and false otherwise. The regular expression should account for common email patterns.
{

function isValidEmail(email) {
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);

    }

console.log(isValidEmail("test@gmail.com"));
console.log(isValidEmail("abc@gmail,in"));
}