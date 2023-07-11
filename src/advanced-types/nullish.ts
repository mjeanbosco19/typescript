let speed: number | null = null;
let ride = {
  // Falsy value (undefined, null, '', 0)
  //speed: speed || 30, // issue when user provide falsy 0 it will return 30.
  //   speed: speed !== null ? speed : 30, //can work but below is better
  speed: speed ?? 30, // Nullish coalescing operator
};
