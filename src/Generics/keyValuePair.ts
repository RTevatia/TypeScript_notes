class KeyValuePair {
    constructor(public key: number, public value: string) {}
}

let pair = new KeyValuePair(1, 'Apple');
pair.value

// Later if we need key to be string 
// one solution is to to use 'any' 
// but 'any' removes type safety and IntelliSense 

// Second solution is to create entirely new class 
// Redundant Duplicate class

class StringKeyValuePair {
    constructor(public key: string, public value: string) {}
}

let pair2 = new StringKeyValuePair('1', 'Apple');
pair2.value

// Third solution is to use Generics