type ComponentOptions = {
  selector: string;
};
function MyComponent(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log('MyComponent decorator called');
    constructor.prototype.options = options;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
      console.log('Inserting the component in the DOM');
    };
  };
}

@MyComponent({ selector: '#my-profile' })
class UserProfileComponent {}
