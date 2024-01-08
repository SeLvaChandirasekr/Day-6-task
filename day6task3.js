class Person {

    constructor(name,lastName,age,qualification,city,location,contactNumber) {
    
    this.name=name
    this.lastName=lastName
    this.age=age
    this.qualification=qualification
    this.city=city
    this.location=location
    this.contactNumber=contactNumber}
    
    getPerson(person1) {
        return `person details are ${this.age}`} 
    }
    let person1 =new Person("Selvam","Chandirasekaran",28,"Msc","Tirupattur","Jolarpettai","9655842125" )

    console.log(person1)

    // OUTPUT :
    // Person {
    //     name: 'Selvam',
    //     lastName: 'Chandirasekaran',
    //     age: 28,
    //     qualification: 'Msc',
    //     city: 'Tirupattur',
    //     location: 'Jolarpettai',
    //     contactNumber: '9655842125'
    //   }
      
