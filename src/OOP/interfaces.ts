interface Calender {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

class GoogleCalendar implements Calender {
  constructor(public name: string) {}
  addEvent(): void {
    console.log("Add event for " + this.name);
  }
  removeEvent(): void {
    console.log("Remove event " + this.name);
  }
}

let calender = new GoogleCalendar("Meeting");
calender.addEvent();
