class SeatAssignment {
    // Seats: A1, A2, ...
    // Names: Mosh, John, ...

    // Index signature property
    [seatNumber: string]: string;
}

let seats = new SeatAssignment();

seats.A1 = 'Mosh'; // Dot notation
seats["A2"] = 'John'; // Bracket notation
// seats.A3 = 1; // Error - number is not assingable to type string