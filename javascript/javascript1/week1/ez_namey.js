const firstWords = ["Java", "JavaScript", "C++", "Python", "HTML", "CSS", "Ruby", "Swift", "Matlab", "Objective-C"];
const secondWords = ["Job", "Work", "Script", "Strength", "Power", "Magic", "Mind", "Soul", "Tyger", "Trick"];

function newStartupName() {
    const name = firstWords[Math.floor(Math.random() * 10)] +  " " + secondWords[Math.floor(Math.random() * 10)];
    console.log (`The startup: "${name}" contains ${name.length} characters.`); 
}

newStartupName();