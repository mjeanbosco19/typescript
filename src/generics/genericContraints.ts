// 01 way of constraints
// function echo<T extends number | string>(value: T): T {
//   return value;
// }

// echo('1');

// 02 way of constraints
// function echo<T extends {name: string}>(value: T): T {}
//     return value;
//   }

//   echo({name:'a'});
class Persoon {
  constructor(public name: string) {}
}
class Customeer extends Persoon {}
function echo<T extends Persoon>(value: T): T {
  return value;
}

echo(new Customeer('a'));
