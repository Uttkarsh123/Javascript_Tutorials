function init()
{
    var firstName ="hitesh";
    function sayFirstName()
    {
        console.log(firstName);
    }
    return sayFirstName;
}

var value  = init();