const { parse } = require('csv-parse');
const fs = require("fs");
const HabitablePlanet = [];
//this function will check if the planet is habitable or not. If the planet is habitable then it will return true otherwise it will return false.
const isHabitablePlanet = (planet) => {
    return planet['koi_disposition'] === 'CONFIRMED'
        }

//first we will read the csv file and then we will parse it and then we will push the data into the results array and then we will log the results array to the console.
fs.createReadStream("kepler_data.csv")
.pipe(parse(
    {
        comment: "#",
        columns: true
    }
))
.on("data",(data)=>{
    if(isHabitablePlanet(data)){
    HabitablePlanet.push(data);
}
})
.on("err",(err)=>{
    console.log(err);
})
.on("end",()=>{console.log(HabitablePlanet,"result");});