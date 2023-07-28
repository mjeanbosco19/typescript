// TypeScript - Property Decorator
function MinLength(length: number) {
    return function (target: any, propertyKey: string) {
        let value = target[propertyKey];
        const getter = () => value;
        const setter = (val: string) => {
            if (val.length < length) {
                console.log(`Error: ${propertyKey} must be at least ${length} characters long.`);
            } else {
                value = val;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        });
    };
}

class Useer {
    @MinLength(5)
    password: string;
    constructor (password: string) {
        this.password = password;
    }
}

let useer = new Useer("1234");
console.log(useer.password); // Error: password must be at least 5 characters long.
