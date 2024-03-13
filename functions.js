function calcAge(age)
{
    var years = 90-age;
    var days = years*365;
    var weeks = years*52;
    var months = years*12;

   console.log(`You Have: 
   ${years} Years
   ${days} days
   ${weeks} weeks
   ${months} months
   `);
}

calcAge(20);