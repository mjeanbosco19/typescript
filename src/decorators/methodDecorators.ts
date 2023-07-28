// TypeScript Decorators: Method Decorators

function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value as Function;
  descriptor.value = function (...args: any) {
    console.log('target', target);
    originalMethod.call(this, ...args);
    console.log('propertyKey', propertyKey);
    console.log('descriptor', descriptor);
  };
}

class Peerson {
  @Log
  say(message: string) {
    console.log('Peerson says ' + message);
  }
}

let p = new Peerson();
p.say('Hello');
