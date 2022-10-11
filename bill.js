function populateSelect()
{
    var costs = [60, 150, 90, 70];
    var fruits = ['Apple', 'Mango', 'Grapes', 'Banana'];
    var str = "";
    var selectel = document.getElementById("fruit0");
    for(let fruit of fruits)
    {
        str = str + "<option>" + fruit + "</option>";
    }
    selectel.innerHTML = str;
    selectel = document.getElementById("fruit1");
    selectel.innerHTML = str;
    selectel = document.getElementById("fruit2");
    selectel.innerHTML = str;
    selectel = document.getElementById("fruit3");
    selectel.innerHTML = str;

    for(let i=0; i<4; i++)
    {
        
    }
}