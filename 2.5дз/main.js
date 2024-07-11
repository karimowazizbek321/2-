
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

   
    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Surname: ${this.surname}`);
    }
}


class User extends Person {
    constructor(name, surname, password) {
        super(name, surname);
        this._password = password; 
    }

   
    printInfo() {
        const enteredPassword = prompt("Enter your password to view name and surname:");
        if (enteredPassword === this._password) {
            super.printInfo();
        } else {
            console.log("Incorrect password. Access denied.");
        }
    }
}


const user1 = new User("John", "Doe", "password123");


user1.printInfo();

user1.printInfo();
