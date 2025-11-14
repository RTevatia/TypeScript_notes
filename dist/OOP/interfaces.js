"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GoogleCalendar {
    name;
    constructor(name) {
        this.name = name;
    }
    addEvent() {
        console.log("Add event for " + this.name);
    }
    removeEvent() {
        console.log("Remove event " + this.name);
    }
}
let calender = new GoogleCalendar("Meeting");
calender.addEvent();
//# sourceMappingURL=interfaces.js.map