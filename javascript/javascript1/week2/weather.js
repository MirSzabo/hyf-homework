//Weather wear
function todayWeather(temperature) {
    if (temperature <= 0) {
        return "winter jacket and hat";
    } else if (temperature <= 10) {
        return "warm sweater";
    } else if (temperature <= 20) {
        return "jeans and jacket";
    } else if (temperature <= 30) {
        return "shorts and a t-shirt";
    } else {
        return "swimming suit";
    }
    
}
const clothesToWear = todayWeather(8);
console.log(clothesToWear); // Logs out: "warm sweater"