// Generic key
// class KeyValuePair<T> {
//     constructor(public key: T, public value: string) {}
// }

// let pair = new KeyValuePair<string>('1', 'Apple');
// pair.value


class KeyValuePair<K, V> {
    constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair<string, string>('1', 'Apple');
pair.value
