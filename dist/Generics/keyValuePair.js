// Generic key
// class KeyValuePair<T> {
//     constructor(public key: T, public value: string) {}
// }
// let pair = new KeyValuePair<string>('1', 'Apple');
// pair.value
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePair('1', 'Apple');
pair.value;
export {};
//# sourceMappingURL=keyValuePair.js.map