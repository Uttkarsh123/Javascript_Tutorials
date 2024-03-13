function init()
{
    var firstName ="hitesh";
    function sayFirstName()
    {
        console.log(firstName);
    }
    sayFirstName();
}

init();

/*On the top of global context init context will come up , the init will try to run and will declare a variable, as soonas sayfirstName is called it is placed over the init context*/