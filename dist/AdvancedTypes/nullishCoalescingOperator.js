let speed = null;
let ride = {
    //   speed: speed !== null ? speed : 30,
    // Nullish coalescing operator
    speed: speed !== null && speed !== void 0 ? speed : 30, // Behave same as line 4
};
console.log(ride.speed);
export {};
//# sourceMappingURL=nullishCoalescingOperator.js.map