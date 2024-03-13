//dis = (L-S)/L * 100;

//a + b * c / d * 3;

var sellingPrice = 199;
var listingprince = 799;

var discountP = ((listingprince-sellingPrice)/listingprince) * 100;

console.log("Discount Percentage is: "+Math.round(discountP)+ "% off");