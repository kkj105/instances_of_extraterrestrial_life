// from data.js
var tableData = data;
console.log(tableData);

// Using the UFO dataset provided in the form of an array of JavaScript objects, 
// write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

    // Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.

// Use d3 to select the table
var ufoTableBody = d3.select("tbody");

// // // use d3 to select the table
// // var ufoTable = d3.select("table");

// // append one table row 'tr' to the table body
// var newRow = ufoTableBody.append("tr");


// iterate through data set 
tableData.forEach((tRow) => {
// console.log(tRow);

    // append one table row per entry
    var row = ufoTableBody.append("tr");

    Object.values(tRow).forEach((value) => {
        console.log(value)
    })

    // append one cell for each 
    row.append("td").text(tableData[0]);
    row.append("td").text(tableData[1]);
    row.append("td").text(tableData[2]);
    row.append("td").text(tableData[3]);
    row.append("td").text(tableData[4]);
    row.append("td").text(tableData[5]);
    row.append("td").text(tableData[6]);
});

// Use a date form in your HTML document and write JavaScript code that will listen for events and search 
// through the date/time column to find rows that match user input.




//PART II: Using multiple input tags and/or select dropdowns, write JavaScript code so the user can to set 
//multiple filters and search for UFO sightings using the following criteria based on the table columns:

