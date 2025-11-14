"use strict";
// Generic key
// class KeyValuePair<T> {
//     constructor(public key: T, public value: string) {}
// }
Object.defineProperty(exports, "__esModule", { value: true });
// let pair = new KeyValuePair<string>('1', 'Apple');
// pair.value
class KeyValuePair {
    key;
    value;
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePair('1', 'Apple');
pair.value;
//# sourceMappingURL=keyValuePair.js.map