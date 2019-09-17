const activities = [];
const today = new Date();
const automaticDate = today.toLocaleDateString('en-US');

//Adding an activity
function addActivity(date, activity, duration) {
if (typeof(date) === 'string' && typeof(activity) === 'string' && typeof(duration) === 'number') {
  activities.push({'date': date || automaticDate, 'activity': activity, 'duration': duration});
} else {
  return 'The date should be a string, the activity a string and the duration a number';
}  
  }

addActivity('2/18/2019', 'YouTube', 30);
addActivity('', 'Facebook', 28);
addActivity('5/30/2019', 'Slack', 65);
console.table(activities);

//Show my status  
function showStatus(activities, timeLimit) {
  const minutesOfUsage = activities.reduce(function(prev, cur) {
      return prev + cur.duration;
    }, 0);
if (activities.length===0) {
    return `Add some activities before calling showStatus`;
  }
  else if (minutesOfUsage >= timeLimit){
    return `You have reached your limit, no more smartphoning for you!`;
  } 
  return `You have added ${activities.length} activities. They amount to ${minutesOfUsage} min. of usage`;

}
console.log(showStatus(activities, 100)); //You have reached your limit, no more smartphoning for you!
console.log(showStatus(activities, 150)); //You have added 3 activities. They amount to 123 min. of usage

//Create a function for calculating the object a user has spent the most time on.
function longestActivity(){
    const durations = activities.map((a) => a.duration)//new array only with duration
    //console.log(durations);
    const highestAmount = Math.max(...durations);//spread operator instead of for loop
    const highestActivity = activities.filter(activity => activity.duration === highestAmount)
    return highestActivity;
}
console.log(longestActivity());
