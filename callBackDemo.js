function display1(arg)
{
    console.log("display1 showing :" + arg);
}
function display2(arg)
{
    document.getElementById("change").innerHTML = "" + arg;
}
function myCalculations(a,b,callbackfn)
{
    let c = a+b;
    callbackfn("sum = " + c);
}
myCalculations(5,6,display1);
myCalculations(5,6,display2);
myCalculations(5,6, (arg) => document.body.appendChild(
    document.createTextNode("Text Added : " + arg)
));
var x = 1;
// setTimeout(() => console.log(x++ + ":" + new Date()), 3000);
// setTimeout(() => console.log(x++ + ":" + new Date()), 4000);
// setTimeout(() => console.log(x++ + ":" + new Date()), 5000);
var t;
function startTime()
{
    x=1;
    console.log("time starts");
    t = setInterval(() => {
        document.getElementById("timeinterval").innerHTML = x++;
    }, 1000);
        
}
function stopTime()
{
    console.log("time stopped");
    clearTimeout(t);
}
function resetTimer()
{
    x=0;
    document.getElementById("timeinterval").innerHTML = x;
}