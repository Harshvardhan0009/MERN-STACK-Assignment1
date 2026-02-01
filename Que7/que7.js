function createCounter() {
  let count = 0;   // private variable

  return function increment() {
    count++;
    return count;
  };
}

// Example usage
const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
