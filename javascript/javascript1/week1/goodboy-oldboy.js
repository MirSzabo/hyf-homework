//A dog age calculator

const yearOfBirth = 2010;
const yearFuture = 2020;
const dogAge = (yearFuture - yearOfBirth) * 7;
const humanAge = yearFuture - yearOfBirth;
const shouldShowResultInDogYears = false; //boolean

if (shouldShowResultInDogYears === true ) {
    console.log (`Your dog will be ${dogAge} dog years old in ${yearFuture}`);

} else {
    console.log (`Your dog will be ${humanAge} human years old in ${yearFuture}`);
}
