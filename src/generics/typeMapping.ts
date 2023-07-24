interface Items {
  naame: string;
  priice: number;
}
// 001
type ReadOnly<Items> = {
  // Index signature
  // keyof

  readonly [Property in keyof Items]: Items[Property];
};
// 002
type Optional<T> = {
  [K in keyof T]?: T[K];
};
// 003
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

let items: ReadOnly<Items> = {
  naame: 'a',
  priice: 1,
};

// items.naame = 'a'; // can not be assigned because is readonly


// LEARN MORE
// https://www.typescriptlang.org/docs/handbook/utility-types.html