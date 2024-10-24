export default class Student {

    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    display() {
        console.log(this.firstname + ' ' + this.lastname + " [" + this.age + " ans]")
    }
}