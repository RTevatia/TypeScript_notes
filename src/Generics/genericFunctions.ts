//  Standalone generic functions
function wrapInArray<T>(value: T) {
  return [value];
}

console.log(wrapInArray("1"));

// Generic method inside a class
class ArrayUtils {
  wrapInArray<T>(value: T) {
    return [value];
  }
}

const utils = new ArrayUtils();
console.log(utils.wrapInArray("1"));

// Static generic method
class ArrayUtilsStatic {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}

console.log(ArrayUtilsStatic.wrapInArray("1"));
