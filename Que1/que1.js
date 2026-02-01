const container = document.getElementById("container");

const ul = document.createElement("ul");

const students = [
  { name: "Harsh", marks: 85 },
  { name: "Vibhanshu", marks: 92 },
  { name: "Ankit", marks: 78 }
];

students.forEach(student => {
  const li = document.createElement("li");
  li.textContent = `${student.name} – ${student.marks}`;
  li.style.backgroundColor = "#dbeafe";
  li.style.margin = "5px";
  li.style.padding = "8px";
  ul.appendChild(li);
});

container.appendChild(ul);