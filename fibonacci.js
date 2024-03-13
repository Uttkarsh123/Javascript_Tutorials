output=[];
function fib(n)
{
       if(n==0)
       {
        output.push(0);
       }
       else if(n==1)
       {
         output = [0,1];
       }
       else if(n==2)
       {
        output = [0,1,1];
       }
       else{
        output = [0,1];
        for(var i=2; i<n; i++)
        {
            output.push(output[i-2]+output[i-1]);
        }
       }

    console.log(output);

}
fib(10)