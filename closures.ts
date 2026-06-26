function outer(){
    let count=0;
    function inner(){
        count++;
        console.log(count);
    }

    return inner;
    
}

const counter = outer();
counter();
counter();  
counter();  

// real-use
console.log("--------------------------")
function realCounter(){
    let count=0;
    return {
      increment() {
        count++;
        return count;
      },
      decrement() {
        count--;
        return count;
      },
      getCount(){
        return count;
      }
    };
}

const myCounter = realCounter();
console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.decrement());
console.log(myCounter.getCount());

