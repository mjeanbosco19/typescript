// const small = 1;
// const medium = 2;
// const large = 3;

// PascalCase
// enum Size {Small = 's', Medium = 'm', Large = 'l'};

// const (We can also declare enum using constants)
enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);
