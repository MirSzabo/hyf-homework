//Student manager
const class07Students = [];

function addStudentToClass(studentName) {
    if (studentName === "") {
        console.log(`You cannot add an empty string to a class`);      
    } else if (class07Students.includes(studentName)) {
        const repeatingNumber = class07Students.filter(function (class07Student) {
            if(class07Student === studentName ) {
              return true //keep it
            }
          });
          console.log(repeatingNumber.length);

        let number = 2; 
        for (let i = 0; i < class07Students.length; i++){
            if(class07Students[i] === studentName){
                number++;
            }
        }
          class07Students.push(`_ ${number} ${studentName}`);
    } else if (studentName === "Queen" || class07Students.length < 6) {
        class07Students.push(studentName);     
    } else {
        console.log(`Cannot add more students to class 07`);
    } 
}

function getNumberOfStudents() {
    return class07Students.length;
}

addStudentToClass("Peter");
addStudentToClass("Miroslava");
addStudentToClass("Miroslava");
addStudentToClass("Miroslava");
addStudentToClass("Peter");
addStudentToClass("Peter");
addStudentToClass("Elena");
/*addStudentToClass("Filip");
addStudentToClass("Lukas");
addStudentToClass("Ida");
addStudentToClass('');
addStudentToClass('Queen');
addStudentToClass("Thomas");*/

getNumberOfStudents();
console.log(class07Students);