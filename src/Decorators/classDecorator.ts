function Component(constructor: Function) {
  console.log("Component decorator called");

  // Add a new property to all instances
  constructor.prototype.uniqueID = Date.now();

  // Add a new method to all instances
  constructor.prototype.insertInDOM = () => {
    console.log("Inserting component in the DOM");
  };
}

interface ProfileComponent {
    uniqueID: number;
    insertInDOM(): void;
}

@Component
class ProfileComponent {
    constructor(public name: string) {}
}

// new ProfileComponent();
const profile = new ProfileComponent('Rahul');
console.log(profile.uniqueID);
profile.insertInDOM();

