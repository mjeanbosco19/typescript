type MyComponentOptions = {
  selector: string;
};
function MyProfileComponent(options: MyComponentOptions) {
  return (constructor: Function) => {
    console.log('MyComponent decorator called');
    constructor.prototype.options = options;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
      console.log('Inserting the component in the DOM');
    };
  };
}

function Pipe(constructor: Function) {
  console.log('Pipe decorator called');
  constructor.prototype.pipe = true;
}

@MyProfileComponent({ selector: '#my-profile' })
@Pipe
class AccountProfileComponent {}
