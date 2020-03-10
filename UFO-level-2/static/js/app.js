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

    // Select input element 
    var inputElement = d3.select("#datetime");
    // Get the value of the input element 
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    var FilteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log(FilteredData)

    
// To display the filtered search result by date
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

// LEVEL TWO -------------- Multiple Search Categories---------------

// City button
var citybutton = d3.select("#filter-btn-city");
citybutton.on("click", function() {
    tbody.html("");
    d3.event.preventDefault();

    // Select input element 
    var inputElementCity = d3.select("#cityname");
    // Get the value of the input element
    var inputValueCity = inputElementCity.property("value");
    console.log(inputValueCity);
    var FilteredDataCity = tableData.filter(tableData => tableData.city === inputValueCity);
    console.log(FilteredDataCity)

// To display the filtered search result by City
    FilteredDataCity.forEach(function(filtercity) {
    console.log(filtercity);
    var cityrow = tbody.append("tr");

    Object.entries(filtercity).forEach(function([key, value]){
        console.log(key, value);
        var citycell = cityrow.append("td");
        citycell.text(value);
        
        });
    });
});


// State button
var statebutton = d3.select("#filter-btn-state");
statebutton.on("click", function() {
    tbody.html("");
    d3.event.preventDefault();

    // Select input element 
    var inputElementState = d3.select("#statename");
    // Get the value of the input element
    var inputValueState = inputElementState.property("value");
    console.log(inputValueState);
    var FilteredDataState = tableData.filter(tableData => tableData.state === inputValueState);
    console.log(FilteredDataState)

// To display the filtered search result by State    
    FilteredDataState.forEach(function(filterstate) {
    console.log(filterstate);
    var staterow = tbody.append("tr");

    Object.entries(filterstate).forEach(function([key, value]){
        console.log(key, value);
        var statecell = staterow.append("td");
        statecell.text(value);

        });
    });
});


// Country button
var countrybutton = d3.select("#filter-btn-country");
countrybutton.on("click", function() {
    tbody.html("");
    d3.event.preventDefault();

    // Select input element
    var inputElementCountry = d3.select("#countryname");
    // Get the value of the input element
    var inputValueCountry = inputElementCountry.property("value");
    console.log(inputValueCountry);
    var FilteredDataCountry = tableData.filter(tableData => tableData.country === inputValueCountry);
    console.log(FilteredDataCountry)

// To display the filtered search result by Country
    FilteredDataCountry.forEach(function(filtercountry) { 
    console.log(filtercountry);
    var countryrow = tbody.append("tr");

    Object.entries(filtercountry).forEach(function([key, value]){
        console.log(key, value);
        var countrycell = countryrow.append("td");
        countrycell.text(value);

        });
    });
});


// Shape button
var shapebutton = d3.select("#filter-btn-shape");
shapebutton.on("click", function() {
    tbody.html("");
    d3.event.preventDefault();

    // Select input element 
    var inputElementShape = d3.select("#shapename");
    // Get the value of the input element
    var inputValueShape = inputElementShape.property("value");
    console.log(inputValueShape);
    var FilteredDataShape = tableData.filter(tableData => tableData.shape === inputValueShape);
    console.log(FilteredDataShape)

// To display the filtered search result by Shape
    FilteredDataShape.forEach(function(filtershape) {
    console.log(filtershape);
    var shaperow = tbody.append("tr");

    Object.entries(filtershape).forEach(function([key, value]){
        console.log(key, value);
        var shapecell = shaperow.append("td");
        shapecell.text(value);

        });
    });
});