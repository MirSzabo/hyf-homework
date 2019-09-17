//When will we be there??
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const timeInMinutes = (travelInformation.destinationDistance/travelInformation.speed)*60;
//console.log(timeInMinutes); // 518.4000000000001

const travelTime = function timeTransformation() { 
   const hours = Math.floor(timeInMinutes / 60);  
   const minutes = (timeInMinutes % 60).toFixed(0);        
   return `${hours} hours and ${minutes} minutes`;         
 }

 console.log(travelTime()); // 8 hours and 38 minutes
