
let phone = document.getElementById("phone") as HTMLInputElement;

// Above line can be written as 
let phone2 = <HTMLInputElement> document.getElementById("phone");

// HTMLInputElement
phone.value
phone2.value