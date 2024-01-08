class UberPrice {

    constructor(basePrice, kmRate, totalKmTravelled) {

this.basePrice=basePrice;
this.kmRate=kmRate;
this.totalKmTravelled =totalKmTravelled;
 }
 
 getPrice() {return `Your Total fare is: ${this.basePrice +(this.kmRate *this.totalKmTravelled)}`}  
 }
 
 let passenger1=new UberPrice(20,20,15) //320 
 
 console.log("UBER PRICE: RECEIPT")
console.log("Base price:" +passenger1.basePrice)
console.log("KM rate: " +passenger1.kmRate)
console.log("Total Distance Covered: " +passenger1.totalKmTravelled)
console.log(passenger1.getPrice()) ;

// OUTPUT:
// UBER PRICE: RECEIPT
// Base price:20
// KM rate: 20
// Total Distance Covered: 15
// Your Total fare is: 320





 


