// from data.js
var tableData = data;
console.log(tableData);

// Using the UFO dataset provided in the form of an array of JavaScript objects, 
// write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

// Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.

// Use d3 to select the table
var ufoTableBody = d3.select("tbody");

// iterate through data set 
tableData.forEach((tRow) => {
// console.log(tRow);

    // append one table row per entry
    var row = ufoTableBody.append("tr");

    Object.values(tRow).forEach((value) => {
        console.log(value)
        // append one cell for each 
        row.append("td").text(value)
    }) 
});

// Use a date form in your HTML document and write JavaScript code that will listen for events and search 
    // through the date/time column to find rows that match user input.

// Select the upvote and downvote buttons
var filterButton = d3.select("#filter-btn");

filterButton.on("click", function() {
    var date = d3.select("#datetime").property("value");

    //PART II: Using multiple input tags and/or select dropdowns, write JavaScript code so the user can to set 
        //multiple filters and search for UFO sightings using the following criteria based on the table columns:
    var city = d3.select("#city").property("value");

    var state = d3.select("#state").property("value");

    var country = d3.select("#country").property("value");

    var shape = d3.select("#shape").property("value");

    // use the form input to filter the data by date and/or city, and/or state, and/or country, and/or shape
    var filteredData = tableData
    if (date != "") {
    filteredData = filteredData.filter(row => row.datetime === date);
    } 
    if (city != "" ) {
    filteredData = filteredData.filter(row => row.city === city );
    } 
    if (state != "") {
    filteredData = filteredData.filter(row => row.state === state);
    }
    if (country != "") {
    filteredData = filteredData.filter(row => row.country === country);
    }
    if (shape != "") {
    filteredData = filteredData.filter(row => row.shape === shape);
    }

    // clear the table 
    ufoTableBody.html("");

    // upload the filtered data to the table
    filteredData.forEach((tRow) => {
        var row = ufoTableBody.append("tr");

        Object.values(tRow).forEach((value) => {
            row.append("td").text(value);
        })
    })
});










