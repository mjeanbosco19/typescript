// function wrapInArray<T>(value: T) {
//   return [value];
// }
// let content = wrapInArray(1);

class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}
let content = ArrayUtils.wrapInArray(1);
