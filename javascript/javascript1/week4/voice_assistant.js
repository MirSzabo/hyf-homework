const command = ""; //do not put to codesandbox.io

const firstNameList = [];
const toDo = [];
const favouriteDishList = [];
const eventsList = [];

function getReply(command) {
  /*----------Greeting-----------------*/
  if (command.includes("hello my name is") && firstNameList.length === 0) {
    const commandArray = command.split(" ");
    const firstName = commandArray[commandArray.length - 1];
    firstNameList.push(firstName);
    return `Nice to meet you ${firstName}`;
  } else if (
    command.includes("hello my name is") &&
    firstNameList.length !== 0
  ) {
    return `I know your name`;
  } else if (
    command.includes("what is my name") &&
    firstNameList.length !== 0
  ) {
    return `Your name is ${firstNameList[firstNameList.length - 1]}`;
  } else if (
    command.includes("what is my name") &&
    firstNameList.length === 0
  ) {
    return `I do not know your name already`;

    /*----------Todo List-----------------*/
  } else if (command.includes("what is on my to-do")) {
    const toDoCopy = [...toDo];
    let lastWord = "";
    if (toDo.length > 1) {
      lastWord = `and ${toDoCopy.pop()}`;
    } else {
      lastWord = "";
    }
    return `You have ${toDo.length} todos - ${toDoCopy.join(", ")} ${lastWord}`;
  } else if (command.includes("to my to-do")) {
    const commandArray = command.split(" ");
    const toDoItemArray = commandArray.slice(1, -3);
    const toDoItem = toDoItemArray.join(" ");
    toDo.push(toDoItem);
    return `${toDoItem} added to your todo`;
  } else if (command.includes("remove")) {
    const commandArray = command.split(" ");
    const toDoItemArray = commandArray.slice(1, -3);
    const toDoItem = toDoItemArray.join(" ");
    const toDoItemPosition = toDo.indexOf(toDoItem);
    if (toDoItemPosition >= 0) {
      toDo.splice(toDoItemPosition, 1);
      return `Removed ${toDoItem} from your todo`;
    } else {
      return `You don't have this item in todo list`;
    }

    /*----------What day is it today-----------------*/
  } else if (command.includes("what day is it today")) {
    const currentDate = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    const dateFormated = new Intl.DateTimeFormat("en-US", options).format(
      currentDate
    );
    const dateArray = dateFormated.split(" ");
    return `${dateArray[1]} of ${dateArray[0]} ${dateArray[2]}`;

    /*----------What time is now-----------------*/
  } else if (command.includes("what is the time")) {
    const currentDate = new Date();
    const options = { hour: "numeric", minute: "numeric" };
    const timeFormated = new Intl.DateTimeFormat("en-US", options).format(
      currentDate
    );
    const timeArray = timeFormated.split(" ");
    return `The exact time is ${timeArray[0]} ${timeArray[1]}`;

    /*----------Favourite dish-----------------*/
  } else if (command.includes("what is my favorite dish")) {
    return `Your favorite dish is ${
      favouriteDishList[favouriteDishList.length - 1]
    }`;
  } else if (command.includes("my favorite dish is")) {
    const commandArray = command.split(" ");
    const favouriteDish = commandArray[commandArray.length - 1];
    favouriteDishList.push(favouriteDish);
    return favouriteDish;

    /*----------Math operations-----------------*/
  } else if (command.includes("what is")) {
    const commandArray = command.split(" ");
    const a = Number(commandArray[commandArray.length - 3]);
    const b = Number(commandArray[commandArray.length - 1]);
    const operator = commandArray[commandArray.length - 2];
    let output = 0;
    switch (operator) {
      case "+":
        output = a + b;
        break;
      case "*":
        output = a * b;
        break;
      case "-":
        output = a - b;
        break;
      case "/":
        output = a / b;
        break;
      default:
        output = "Use +, -, * or /";
    }
    //this I tried first but it was not accepted by codesandbox and after change it was working but again sometime I got error Artyom expects a string to speak number given
    //const calculator = new Function("a", "b", `return a ${operator} b`);
    //return calculator(a, b);
    return output;

    /*----------Events array-----------------*/
  } else if (command.includes("what am i doing this week")) {
    const today = new Date();
    const millisecsInDay = 86400000;
    const januaryFirst = new Date(today.getFullYear(), 0, 1);
    const weekNumber = Math.ceil(
      ((today - januaryFirst) / millisecsInDay + januaryFirst.getDay() + 1) / 7
    );

    if (weekNumber === eventsList[0].week) {
      const names = eventsList.map(item => {
        return item["name"];
      });
      const dates = eventsList.map(item => {
        return item["date"];
      });
      return `This week you have ${eventsList.length} event: ${names.join(
        ", "
      )} at ${dates.join(", ")}`; //this is not perfect I will try to correct it
    } else if (weekNumber !== eventsList[0].week) {
      return `This week you don't have any event`;
    }
  } else if (command.includes("to my calendar")) {
    const regex = /\d+/g;
    const date = command.match(regex); 
    const commandArray = command.split(" ");
    const eventsArray = commandArray.slice(1, -5);
    const eventName = eventsArray.join(" ");
    const eventDate = date.join(" ");

    const day = new Date(date[2], date[1] - 1, date[0]);
    const millisecsInDay = 86400000;
    const januaryFirst = new Date(date[2], 0, 1);
    const weekNumber = Math.ceil(
      ((day - januaryFirst) / millisecsInDay + januaryFirst.getDay() + 1) / 7
    );
    eventsList.push({ name: eventName, date: eventDate, week: weekNumber });
    return `${eventName} added to your calendar`;

    /*----------Timer-----------------*/
  } else if (command.includes("set a timer for")) {
    const timerNumber = command.match(/\d+/).shift();
    const commandArray = command.split(" ");
    const timerUnit = commandArray[commandArray.length - 1];
    let milliseconds = 0;

    if (command.includes("minutes") || command.includes("minute")) {
      milliseconds = timerNumber * 60 * 1000;
    } else if (command.includes("seconds") || command.includes("second")) {
      milliseconds = timerNumber * 1000;
    }

    setTimeout(() => {
      console.log("Timer done");
    }, milliseconds);
    return `Timer set for ${timerNumber} ${timerUnit}`;
  }
  return "I do not recognize this command";
}

console.log(getReply("what is my name")); // "I do not know your name"
console.log(getReply("hello my name is Miroslava")); // "Nice to meet you Miroslava"
console.log(getReply("hello my name is Miroslava")); // I know your name already
console.log(firstNameList); //"Miroslava"
console.log(getReply("what is my name")); // "Your name is Miroslava"
console.log(getReply("add fishing to my to-do")); //"fishing added to your todo"
console.log(getReply("add singing in the shower to my to-do")); //"singing in the shower added to your todo"
console.log(getReply("add running to my to-do")); //"running added to your todo"
console.log(toDo); //["fishing", "singing in the shower", "running"]
console.log(getReply("what is on my to-do")); //You have 2 todos - fishing and singing in the shower
console.log(getReply("remove fishing from my to-do")); //Removed fishing from your todo
console.log(getReply("remove singing in the shower from my to-do")); //Removed singing in the shower from your todo
console.log(getReply("what day is it today")); //22, of September 2019
console.log(getReply("what is 3 + 3")); // "6"
console.log(getReply("what is 4 * 12")); // "48"
console.log(getReply("my favorite dish is spaghetti")); // "spaghetti"
console.log(getReply("what is my favorite dish")); // "Your favorite dish is spaghetty"
console.log(getReply("set a timer for 4 minutes")); // "Timer set for 4 minutes" When 4 minutes is up: "Timer done".
console.log(getReply("add bike ride the 24/9-2019 to my calendar")); // "Bike ride added to your calendar"
console.log(getReply("add reading book the 25/9-2019 to my calendar")); // "Reading book added to your calendar"
console.log(eventsList);//(2) [{…}, {…}]
console.log(getReply("what am i doing this week")); // "This week you have 2 event: bike ride, reading book at 24 9 2019, 25 9 2019"
console.log(getReply("what is the time")); // "The exact time is..."
