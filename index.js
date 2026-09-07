const { parse } = require('csv-parse');
const fs = require("fs");
const results = [];

//first we will read the csv file and then we will parse it and then we will push the data into the results array and then we will log the results array to the console.
fs.createReadStream("kepler_data.csv")
.pipe(parse(
    {
        comment: "#",
        columns: true
    }
))
.on("data",(data)=>{
    results.push(data);
})
.on("err",(err)=>{
    console.log(err);
})
.on("end",()=>{console.log(results,"result");});