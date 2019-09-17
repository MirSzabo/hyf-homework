//Flight booking fullname function
function getFullname(firstname, surname, useFormalName) {
    if(firstname === "" || surname === "") {
        return `Please enter your name and surname`;
    } else if (useFormalName) {
        return `Lord ${firstname} ${surname}`;
    } 
        return `${firstname} ${surname}`;
}

const fullName1 = getFullname("Benjamin", "Hughes", true);
const fullName2 = getFullname("Benjamin", "Hughes", false);

console.log(fullName1); 
console.log(fullName2); 
