const input = require ("readline-sync") 
for(let i=1; i<=100; i++){


   if(i % 5 === 0 && i % 3 === 0){
        console.log(i, "fizzbuzz")
    }
  
    if(i % 3 === 0){
        console.log(i, "fizz")
    }
    else(if (i % 5 !== 0 )){
    console.log(i)
    }
    if(i % 5 === 0){
        console.log(i, "buzz")
    }

    
  
}
