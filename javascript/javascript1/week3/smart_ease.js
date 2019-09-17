//Save a note
const notes = [];
function addNote (content, id) {
    notes.push({content, id})
}

addNote("my first note", notes.length + 1);
addNote("my second note", notes.length + 1);
addNote("what to do", notes.length + 1);

console.table(notes); //I found this interesting to use with arrays/objects

//Get a note
/*function getNoteFromId(id) {
    for (let i = 0; i < notes.length; i++) {
        if (id === notes[i].id) {
            return `Your note is: ${notes[i].content}`;
        }      
    }
    return "ID does not exist."
}*/

function getNoteFromId(id) {
    for (const note of notes) {
        if (id === note.id) {
            return `Your note is: ${note.content}`;
        }      
    }
    return "ID does not exist."
}

console.log(getNoteFromId(1)); //Your note is: my first note
console.log(getNoteFromId(5)); //ID does not exist.

//Get all notes
const allNotes = notes.map(function(key) {return key.content});
//const allNotes = notes.map(key => key.content); //arrow function
console.log(allNotes);

//Log out notes
/*function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
       return `The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}.`;
    }
};*/

function logOutNotesFormatted(){
    for(const note of notes){
      return `The note with id: ${note.id}, has the following note text: ${note.content}.`;
    }
}
console.log(logOutNotesFormatted());
