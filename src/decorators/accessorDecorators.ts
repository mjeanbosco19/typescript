// TypeScript - Accessor Decorator
function Capital(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get;
  descriptor.get = function () {
    const result = original?.call(this);
    return (typeof result === "string") ? result.toUpperCase() : result;
  };
}

class Perison {
    constructor (public firstName: string, public lastName: string) {}
    @Capital
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let persoon = new Perison("jean", "bosco");
console.log(persoon.fullName); // JEAN BOSCO
