import Student from './Student.mjs'

let st1 = new Student("Léon", "Marchand");
let st2 = new Student("Teddy", "Riner");
let st3 = new Student("Pauline", "Ferrand-Prévot");

let students = [st1, st2, st3];

for (let st of students) {

    st.display();
}