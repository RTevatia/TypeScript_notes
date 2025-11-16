type ComponentOptions = {
    selector: string;
};

function Component(value: ComponentOptions) {
  return (constructor: Function) => {
    console.log("Component decorator called");
    constructor.prototype.options = value;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
      console.log("Inserting the component in DOM");
    };
  };
}

interface ProfileComponent {
  options: ComponentOptions;
  uniqueId: number;
  insertInDOM(): void;
}

function Pipe(constructor: Function) {
    console.log('Pipe decorator is called');
    constructor.prototype.pipe = true;
}

@Component({selector: '#my-profile'})
@Pipe
class ProfileComponent {}

const profile = new ProfileComponent();
console.log(profile.options);
