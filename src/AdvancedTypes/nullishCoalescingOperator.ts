let speed: number | null = null;

let ride = {
//   speed: speed !== null ? speed : 30,
// Nullish coalescing operator
  speed: speed ?? 30, // Behave same as line 4
};

console.log(ride.speed);
