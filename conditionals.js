var temperature =30+5;

function tempratiung(temp=0)
{
    if(temp <20)
{
    console.log("VeryCold");
}
else if(temp===30)
{
    console.log("Moderate");
}
else{
    console.log("Hot");
}
}
tempratiung(temperature);
tempratiung();
