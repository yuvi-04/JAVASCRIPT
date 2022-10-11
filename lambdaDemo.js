// function sumOfArray(ar)
// {
//     var sum = 0;
//     for(let x of ar)
//     {
//         sum = sum = x;
//     }
//     return sum;
// }
// var sumOfArray2 = (ar) => {var sum = 0;
//     var sum = 0;
//     for(let x of ar)
//     {
//         sum = sum = x;
//     }
//     return sum; };

// let s = sumOfArray([2,3,4,5]);
// console.log(s);
// s = sumOfArray2([2,3,4,5,6]);
// console.log(s);
// var ar = [3432,543,254,1203,854,76];
// ar.sort(function (a,b) {return a-b;});
// ar.sort((a,b) => {return a-b;});
// ar.sort((a,b) => a-b );

// var obj1 = {name : 'first', age : 30};
// var obj2 = {name : 'Second', age : 40};
// function show()
// {
//     console.log(this);
//     console.log(this.name + " of age " + this.age);
// }

// var show2 = () => { console.log(this); console.log(this.name + " of age " + this.age);};
// show();
// show.apply(obj1);
// show.apply(obj2);

// console.log("result of show 2");
// show2();
// show2.apply(obj1);
// show2.apply(obj2);

function exceptionDemo()
{
    try
    {
        var str = "abc";
        var x = Number(str);
        if(isNaN(x))
        {
            throw "Not Valid Data For Number";
        }
        var pass = "pass";
        if(pass.length < 6)
        {
            throw "Short Paassword";
        }
    }
    catch(err)
    {
        console.log(err);
    }   
}