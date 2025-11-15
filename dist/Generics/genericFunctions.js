"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Standalone generic functions
function wrapInArray(value) {
    return [value];
}
console.log(wrapInArray("1"));
// Generic method inside a class
class ArrayUtils {
    wrapInArray(value) {
        return [value];
    }
}
const utils = new ArrayUtils();
console.log(utils.wrapInArray("1"));
// Static generic method
class ArrayUtilsStatic {
    static wrapInArray(value) {
        return [value];
    }
}
console.log(ArrayUtilsStatic.wrapInArray("1"));
//# sourceMappingURL=genericFunctions.js.map