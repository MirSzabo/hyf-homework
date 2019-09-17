//Series duration of my life
const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0
  },
  {
    title: "Gilmore girls",
    days: 4,
    hours: 16,
    minutes: 12
  },
  {
    title: "Friends",
    days: 3,
    hours: 14,
    minutes: 32
  }
];

function durationOfMyLife() {
  const averageYears = 80;
  const averageMinutes = averageYears * 525600;
  let total = 0;

  for (let i = 0; i < seriesDurations.length; i++) {
    const daysToMinutes = seriesDurations[i].days * 1440;
    const hoursToMinutes = seriesDurations[i].hours *60;
    const totalDuration = daysToMinutes + hoursToMinutes + seriesDurations[i].minutes;
    const percentageOfLife = (totalDuration/averageMinutes) *100;
    total += percentageOfLife;
    console.log(`${seriesDurations[i].title} took ${percentageOfLife.toFixed(2)}% of my life`);  
  }
  console.log(`In total that is ${total.toFixed(2)}% of my life`);
};

durationOfMyLife();