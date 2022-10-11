function downloadFile(resolve, reject)
{
    setTimeout(() => {
        console.log('file downloaded');
        resolve('file data');
    }, 6000);
}
var promise = new Promise(downloadFile);
promise.then(function(returnedVal) {
    console.log(returnedVal);
    document.getElementById("data").innerHTML = returnedVal;
});