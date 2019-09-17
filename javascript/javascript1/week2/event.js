//Event application
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getEventWeekday(eventDay) {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const i = (currentDay + eventDay) % 7;
    return `The event is on: ${weekdays[i]}`;
}

// With todays weekday a Sunday
console.log(getEventWeekday(9)); // Logs out "The event is on: Friday"
console.log(getEventWeekday(3)); // Logs out "The event is on: Tuesday"

