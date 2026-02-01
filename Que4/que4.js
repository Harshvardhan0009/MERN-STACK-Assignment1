const shoppingCart = [
  { itemName: "Macbookair M4", itemPrice: 88000 },
  { itemName: "Iphone 16", itemPrice: 75000 },
  { itemName: "Airpods", itemPrice: 15000 },
  { itemName: "iPad Pro", itemPrice: 60000 },
  { itemName: "Apple Watch", itemPrice: 40000 },
];

const sortedCart = shoppingCart.sort((a,b)=>a.itemPrice-b.itemPrice);
console.log(sortedCart);