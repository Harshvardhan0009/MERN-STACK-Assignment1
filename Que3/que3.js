function oddevenelements(arr) {
  return arr.map(n => (n % 2 === 0 ? n * n : n));
}

console.log(oddevenelements([2, 3, 4, 5, 6]));