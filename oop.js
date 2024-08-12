// CLASSES
class Car {
    constructor(name, model, year){
        this.name = name
        this.model = model
        this.year = year
    }

    displayInfo(){
        return(`this is a ${this.name} ${this.model}, that was developed in ${this.year}`)
    }
}

class User {
    constructor(fullname, email, phone, password){
        this.fullname = fullname
        this.email = email
        this.phone = phone
        this.password = password
    }

    login(){
        return(`${this.fullname} has logged in successfully`)
    }
    logout(){
        return(`${this.fullname} has logged out successfully`)
    }
}

// ABSTRACTION
const myCar = new Car("Tesla", "x-6", 2024)
console.log(myCar);

const hisCar = new Car("BMW", "x-8", 2026)
console.log(hisCar);

const user = new User("Olaitan", "ola@gmail.com", 8076765456, "12345678")
console.log(user);

console.log(myCar.displayInfo());
console.log(user.login());
console.log(user.logout());


