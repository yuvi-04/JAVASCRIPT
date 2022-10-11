var tvs = [ 
    {
        Item : "LED",
        Screen : 32,
        Popularity : 4.3,
        Cost : 300000
    },
    {
        Item : "LED",
        Screen : 42,
        Popularity : 4.9,
        Cost : 50000
    },
    {
        Item : "LED",
        Screen : 40,
        Popularity : 3.9,
        Cost : 4000
    },
    {
        Item : "LED",
        Screen : 75,
        Popularity : 3.3,
        Cost : 580000
    }
];
var headercopied = false;
var headerhtml = "";
function populateTvs()
{
    var tables = document.getElementsByTagName("table");
    if(headercopied == false)
    {
        headerhtml = tables[0].innerHTML;
        headercopied = true;
    }
    var str = headerhtml;
    for(let i=0; i<tvs.length; i++)
    {
        str = str + "<tr>" + "<td>" + (i+1) + "</td>";
        str = str + "<td>" + tvs[i].Item + "</td>";
        str = str + "<td>" + tvs[i].Screen + "</td>";
        str = str + "<td>" + tvs[i].Popularity + "</td>";
        str = str + "<td>" + tvs[i].Cost + "</td>";
        var btndata = "<button onclick = 'removeTvs()'>Not Interested</button>";
        str = str + "<td>" + btndata + "</td>" + "</tr>";

        tables[0].innerHTML = str;
    }
    
}
function sortByCost()
{
    console.log("sort by cost");
    tvs.sort(function(a,b) {return a.Cost-b.Cost});
    populateTvs();
}
function sortByPopularity()
{
    console.log("sort by popularity");
    tvs.sort(function(a,b) {return a.Popularity-b.Popularity});
    populateTvs();
}
function sortByScreen()
{
    console.log("sort by screen");
    tvs.sort(function(a,b) {return a.Screen-b.Screen});
    populateTvs();
}
function populateSecondTable()
{
    var tables = document.getElementsByTagName("table");
    console.log([tables[0]]);
    console.log([tables[1]]);

    var fruits = ["Apple", "Orange", "Banana"];
    var costs = [80, 60, 70];
    var str = "";
    str = str + "<tr> <th> S.No</th> <th> Fruit </th> <th> Cost </th>";
    tables[1].innerHTML = str;
    for(let i=0; i<fruits.length; i++)
    {
        var row = document.createElement("tr");
        var tdSno = document.createElement("td");
        tdSno.innerHTML = "" + i;
        row.appendChild(tdSno);

        var tdFruit = document.createElement("td");
        tdFruit.innerHTML = "" + fruits[i];
        row.appendChild(tdFruit);

        var tdcost = document.createElement("td");
        tdcost.innerHTML = "" + costs[i];
        row.appendChild(tdcost);
        
        tables[1].appendChild(row);
    }
}