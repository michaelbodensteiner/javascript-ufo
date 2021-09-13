var tableData = data;

var tbody = d3.select("tbody"); 
tableData.forEach(ufo_sightings => {

    var row = tbody.append("tr");
    Object.entries(ufo_sightings).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value)
    });
});

var dateTime = d3.select("#datetime");
function filterData(ufo_sightings) {
    enteredDate = dateTime.property("value");
    if(enteredDate != ""){
    return ufo_sightings.datetime == enteredDate; 
    }
};
var filterBtn = d3.select("#filter-btn");
function onClick() {
    
    var rows = tbody.selectAll("tr")
    rows.remove();
    var filteredData = tableData.filter(filterData);
    
    filteredData.forEach(ufo_sightings => {
        var row = tbody.append("tr");
        Object.entries(ufo_sightings).forEach(([key, value]) =>{
        var cell = row.append("td");
        cell.text(value);
        });
    });
    }  
filterBtn.on("click", onClick);