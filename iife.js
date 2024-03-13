(function chai()
{
    console.log("DB CONNECTED");
})();

//Using two functions (IIfe) in a same file the we need to end the first one.
(()=>
{
    console.log("DB CONNECTED two");
})()