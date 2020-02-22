class Email {
  constructor(subject, body) {
    this.subject = subject;
    this.body = body;
  }
}

const spamWords = ["viagra", "offer", "free", "business proposal"];

class SpamDetector {
  isSpam(email) {
    const subject = email.subject;
    const body = email.body;
    const contentToCheck = subject + body;

    //more than 60% uppercase characters
    let uppercaseCharacters = 0;
    let uppercaseCharactersArray = [];
    const contentWithoutSpaces = contentToCheck.split(" ").join("");
    let numberOfCharacters = subjectWithoutSpaces.length;

    for (let i = 0; i < numberOfCharacters; i++) {
      if (contentWithoutSpaces.charAt(i) === contentWithoutSpaces.charAt(i).toUpperCase()) {
        uppercaseCharactersArray.push(contentWithoutSpaces.charAt(i));
        uppercaseCharacters = (uppercaseCharactersArray.length/numberOfCharacters)*100;
      }
    }

    if (uppercaseCharacters >= 60) {
      return true;
    }
    //contain spam words
    if (
      spamWords.some(word => {
        return contentToCheck.indexOf(word) >= 0;
      })
    ) {
      return true;
    }
    //subject only contains the contentToCheck "Hello"
    if (subject.trim().toLowerCase() === "hello") {
      return true;
    }
    //body contains exclamation mark and question mark
    if (body.includes("?") && body.includes("!")) {
      return true;
    } else {
      return false;
    }
  }
}

const emailFromOldFriend = new Email(
  "Hello old friend",
  "Long time no see, when should we hang out again??"
);
const email1 = new Email(
  "Hello old friend",
  "Long time no see, may I offer you a ride??"
);
const email2 = new Email(
  "HeLLO OLD friend",
  "LONG time NO SEE, when we HANG OUT AGAIN??"
);
const email3 = new Email("!HeLLO!!!!", "???!!!");

const spamDetector = new SpamDetector();
console.log(spamDetector.isSpam(emailFromOldFriend)); // false
console.log(spamDetector.isSpam(email1));// true
console.log(spamDetector.isSpam(email2));// true
console.log(spamDetector.isSpam(email3));// true