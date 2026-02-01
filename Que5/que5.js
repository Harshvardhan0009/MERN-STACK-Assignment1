const users = [
  { id: 1, name: "Amit", isActive: true, membership: "premium" },
  { id: 2, name: "Rohit", isActive: false, membership: "premium" },
  { id: 3, name: "Neha", isActive: true, membership: "basic" },
  { id: 4, name: "Priya", isActive: true, membership: "premium" },
  { id: 5, name: "Suman", isActive: false, membership: "basic" }
];

function getPremiumActiveUsers(users) {
  return users.filter(
    user => user.isActive && user.membership === "premium"
  );
}

console.log(getPremiumActiveUsers(users));
