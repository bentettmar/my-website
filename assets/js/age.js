let birthday = new Date(2006, 6, 21);
let today = new Date();
let age = today.getFullYear() - birthday.getFullYear();

document.getElementById("age").innerHTML = age;