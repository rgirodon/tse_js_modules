class Student {

    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    display() {
        console.log(this.firstname + ' ' + this.lastname)
    }
}

let st1 = new Student("Léon", "Marchand");
let st2 = new Student("Teddy", "Riner");
let st3 = new Student("Pauline", "Ferrand-Prévot");
let st4 = new Student("Antoine", "Dupont");

let students = [st1, st2, st3, st4];

for (let st of students) {

    st.display();
}