"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let speed = null;
let ride = {
    //   speed: speed !== null ? speed : 30,
    // Nullish coalescing operator
    speed: speed ?? 30, // Behave same as line 4
};
console.log(ride.speed);
//# sourceMappingURL=nullishCoalescingOperator.js.map