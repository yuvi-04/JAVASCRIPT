function ajaxrequest(callbackfn)
{
    var req = new XMLHttpRequest();
    console.log(req);
    req.onreadystatechange = function(ev) {
        console.log("req state changed new ststus = " + this.readyState);
        if(this.readyState == 4 && this.status == 200)
        {
            console.log(ev);
            console.log(ev.target);
            console.log(ev.target.response);
            callbackfn(ev.target.response);
        }
    };
    req.open('get', 'jsondata.json');
    req.send();
}
function setData(data)
{
    document.getElementById("data").innerHTML = data;
    var jsonobj = JSON.parse(data);
    var str = JSON.stringify(jsonobj);
}