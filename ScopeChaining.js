var name = "Raju";

console.log("Line NUmber 3", name);

function sayName()
{
    console.log("Line Number 7", name);
    sayNemTwo();

    function sayNemTwo()
    {
        console.log("Line Number 10",name);
    }
}
sayName();