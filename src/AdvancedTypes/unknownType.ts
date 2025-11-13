
// TS complier will not complain on type 'any'
// function render(document: any) {
//     document.move(); // No Error
//     document.fly();
//     document.whatever();
// }

// TS complier will complain on type 'unknown'
// function render(document: unknown) {
//     document.move(); // Error

// }


function render(document: unknown) {
    if (typeof document === "string")
        console.log(document.toUpperCase());
}

render("Hello world");
