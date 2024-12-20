let rights = document.getElementById("rights");
let date = new Date();
let year  = date.getFullYear();
let rightsMessage = `all rights reserved by leaf lives africa ${year}`;
rights.innerHTML = rightsMessage;
console.log(rightsMessage);