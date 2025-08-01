// FizzBuzz

for(let i = 1; i <=100; i++){
    if(i % 3 === 0 && i % 5 === 1){
        console.log("Fizz Buzz")
    }  
   else  if(i % 3 === 0){
        console.log("Fizz")
    }else  if(i % 5 === 0){
        console.log("Buzz")
    } else if (i % 3 !== 0 || i % 5 !== 0){
        console.log(`${i}`);
        }
  }


  // Prime Time

let primeNumb = 9;
primeNumb += 1;
let prumNumbBool = true;

while(primeNumb < 20){

    primeNumb++;

    for(let i = 0; i < primeNumb; i++){
        if(primeNumb % 2 === 0){
            prumNumbBool = false;
            continue;
        }

    }if(prumNumbBool = true){
        console.log(`Prime Number is ${primeNumb}`);
        break;
    }
}