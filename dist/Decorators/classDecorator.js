var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component(constructor) {
    console.log("Component decorator called");
    // Add a new property to all instances
    constructor.prototype.uniqueID = Date.now();
    // Add a new method to all instances
    constructor.prototype.insertInDOM = () => {
        console.log("Inserting component in the DOM");
    };
}
let ProfileComponent = class ProfileComponent {
    constructor(name) {
        this.name = name;
    }
};
ProfileComponent = __decorate([
    Component
], ProfileComponent);
// new ProfileComponent();
const profile = new ProfileComponent('Rahul');
console.log(profile.uniqueID);
profile.insertInDOM();
export {};
//# sourceMappingURL=classDecorator.js.map