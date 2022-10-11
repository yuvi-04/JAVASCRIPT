console.log("this is my script file");
var age = 100;
function myfunc()
{
	console.log("this is script in myfunc");
	var obj = {
		name : 'yuvraj',
		age : 17,
		address : 'ambala',
		details : function() {	
			return this.name + " of age " + age + " from " + this.address
		}
	};
	console.log(obj);
	console.log(obj.age);
	console.log(obj['name']);
	obj.email = "yuvi@gmail.com";
	obj['phone'] = '9996049637';
	console.log(obj.email);
	console.log(obj.phone);
	console.log(obj.details());
}
function strDemo()
{
    var name = "Dinesh";
    var obj = new String("Kumar sir");
    console.log(typeof(name));
    console.log(typeof(obj));
    console.log(name.length);
    console.log(obj.length);
    name = name + " " +  obj;
    console.log(name);
    var index = name.indexOf("Ku");
    console.log(index);
    index = name.indexOf("s");
    console.log(index);
    index = name.lastIndexOf("s");
    console.log(index);
    index = name.search("sir");
    console.log("search " + index);
    var sub = name.substring(2,5);
    console.log(sub);
    sub = name.substring(4);
    console.log(sub);
    var rep = name.replaceAll('i', 'a');
    console.log(rep);
}
function numberDemo()
{
    var x = 234;
    var str = x.toString();
    console.log(str);
    str = "" + x;
    console.log(str);
    str = "593";
    x = parseInt(str);
    console.log("int = " + x);
    var y = Number(str);
    console.log(y + 1);
    console.log(str + 1);
    console.log(Number.MIN_VALUE);
    console.log(Number.MAX_VALUE);
    console.log(4/0);
    console.log(Number("abc"));
    var n = parseInt("abc");
    console.log(n);
}
function arrayDemo()
{
    var obj = { name: "Sumit", age:23, marks:88};

    var ar = [];
    ar[0] = 'Shruthi';
    console.log(ar);
    ar.push(34);
    ar[ar.length] = 88;
    console.log(ar);
    var x = ar.pop();
    console.log("popped out=" + x);
    console.log(ar);
    ar.shift();
    console.log(ar);
    ar.unshift("Shruthi");
    ar.unshift("Spandan");
    ar.unshift("Abhishek");
    console.log(ar);
    var ar2 = ['sumit', 23];
    ar = ar.concat(ar2);
    console.log(ar);
    ar.push(111);
    ar.sort();
    console.log(ar);
    ar=[23,111,34,777,232323,34,234,46,334,346,45,324,478];
    ar.sort();
    console.log(ar);
    ar.sort( function(a,b){return a - b; });
    console.log(ar);
    ar.reverse();
    console.log(ar);
    ar.splice(1,5);
    console.log(ar);

    var txt = "";
    var index = 0;
    ar.forEach(function (value, index) {
        txt = txt + " at " + index + " value = " + value + "\t" ;
	console.log(txt);
    });
    ar = ar.filter(function(value) { return value > 50});
    console.log(ar);

    for(let i = 0; i<ar.length; i++)
        console.log(ar[i]);
    ar.forEach(function(val) { console.log(val);});
    console.log("array loops");
    for(let x in ar)
    {
        console.log(x);
    }
    for(let x of ar)
    {
        console.log(x);
    }
}
function domTraverse()
{
    var demoEl = document.getElementById("demo");
    var allParaEls = document.getElementsByTagName("li");
    for(let el of allParaEls)
    {
        console.log(el);
        console.log(el.innerHTML);
        el.innerHTML = "Cap " + el.innerHTML;
        var  ch = 'a';
        ch++;
        console.log(ch);
    }
}