function testRegex()
{
    var textEl = document.getElementById("txt");
    var resultEl = document.getElementById("result");

    var regex = /^[a-zA-Z]{3,}$/i
    var result = regex.test(textEl.value);
    resultEl.innerHTML = result;
}
function fnOnInput(el)
{
    console.log("function on input");
}
function fnOnChange()
{
    console.log("function on change");
}
function fnOnKeyUp()
{
    console.log("function on key up");
}
function testPan(el)
{
    var regex = /^[a-z]{5}[0-9]{4}[a-z]{1}$/i
    var result = regex.test(el.value);
    if(result == true)
    {
        el.style.backgroundColor = 'green';
    }
    else
    {
        el.style.backgroundColor = 'red';
    }
}
function testAnyRegex(el, regex)
{
    var result = regex.test(el.value);
    if(result == true)
    {
        el.style.backgroundColor = 'green';
    }
    else
    {
        el.style.backgroundColor = 'red';
    }
}
function testValid(el)
{
    var valid = el.checkValidity();
    console.log("validity = " + valid);
    el.validationMessage = "age must be between 18 and 60";
}
function formSubmit()
{
    var forEl = document.getElementsByTagName("form")[0];
    console.log(forEl);
    var email1 = document.getElementById("email1").value;
    var email2 = document.getElementById("email2").value;
    if(email1 == email2)
    {
        return true;
    }
    else return false;
}