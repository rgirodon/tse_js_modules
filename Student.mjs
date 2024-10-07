export default class Student {

    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    display() {
        console.log(this.firstname + ' ' + this.lastname)
    }
}