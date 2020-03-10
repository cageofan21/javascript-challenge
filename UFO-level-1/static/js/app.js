// LEVEL ONE ------------AUTOMATIC TABLE AND DATA SEARCH------------

// from data.js
var tableData = data;
console.log(tableData)

// reference the table body
var tbody = d3.select("tbody");

// // Step 1: Loop Through 'data and console.log each object
// tableData.forEach(function (UFOone) {
//    console.log(UFOone);
//  });

// // Step 2: Use d3 to append one table row 'tr' for each object
// tableData.forEach(function(UFOone) { 
//    console.log(UFOone);
//    var row = tbody.append("tr");
//  });

// // Step 3: Use 'Object.entries'
// tableData.forEach(function(UFOone) { 
//    console.log(UFOone);
//    var row = tbody.append("tr");

//    Object.entries(UFOone).forEach(function([key, value]){
//        console.log(key, value);
//    });
// });

// // Step 4: Use d3 to append 1 cell per value and update cell's text with data values 

tableData.forEach(function(UFOone) {
    console.log(UFOone);
    var row = tbody.append("tr");

    Object.entries(UFOone).forEach(function([key, value]){ 
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

// Using the function on the button
var button = d3.select("#filter-btn");

button.on("click", function() {

    tbody.html("");

    d3.event.preventDefault();

    // Select input element and get raw HTML node
    var inputElement = d3.select("#datetime");
    //Get the value of the input element 
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var FilteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    console.log(FilteredData)

    
// To display the filtered search result by year 
    FilteredData.forEach(function(newfilter) {
    console.log(newfilter);
    var frow = tbody.append("tr");

    Object.entries(newfilter).forEach(function([key, value]){
        console.log(key, value);
        var fcell = frow.append("td");
        fcell.text(value);

        });
    });
});