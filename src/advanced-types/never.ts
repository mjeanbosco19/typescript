function processEvents() {
  while (true) {
    // read messages from a queue
  }
}
processEvents();
console.log('Hello world');
// Never used when codes never return
function reject(message: string): never {
  throw new Error(message);
}

reject('....');
console.log('Hello world'); // Unreachable code
