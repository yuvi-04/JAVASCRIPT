function add()
{
    var el1 = document.getElementById("number1");
    var el2 = document.getElementById("number2");
    var el3 = document.getElementById("number3");
    console.log(el1);
    console.log(el1);
    console.log(el1.Value);
    console.log(el2.Value);
    el3.value = Number(el1.value) + Number(el2.value);
}
function multiply()
{
    var el1 = document.getElementById("number1");
    var el2 = document.getElementById("number2");
    var el3 = document.getElementById("number3");
    console.log(el1);
    console.log(el1);
    console.log(el1.Value);
    console.log(el2.Value);
    el3.value = Number(el1.value) * Number(el2.value);
}
function populateSelect()
{
    var langs = ['java', 'c', 'c++', 'c#', 'python'];
    var selectEl = document.getElementById("myselect");
    var str = "";
    for(let lang of langs)
    {
        str = str + "<option>" + lang + "</option>";
    }
    selectEl.innerHTML = str;
}