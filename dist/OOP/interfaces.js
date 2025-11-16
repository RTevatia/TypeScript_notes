class GoogleCalendar {
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
export {};
//# sourceMappingURL=interfaces.js.map