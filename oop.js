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

class user {
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