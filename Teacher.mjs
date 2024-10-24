class Teacher {

    constructor(firstname, lastname, discipline) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.discipline = discipline;
    }

    display() {
        console.log(this.firstname + ' ' + this.lastname + " [" + this.discipline + "]")
    }
}

export { Teacher };