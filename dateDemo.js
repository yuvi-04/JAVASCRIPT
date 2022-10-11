function changeDate(paraEl)
{
    paraEl.innerHTML = paraEl.innerHTML + " " + new Date();
    // paraEl.innerHTML = paraEl.innerHTML + "month" + new Date().getMonth();
}
function rollDice(parael)
{
    console.log(event.target);
    console.log(parael);
    var random = Math.floor(Math.random() * 10) % 6 + 1;
    console.log(random);
}