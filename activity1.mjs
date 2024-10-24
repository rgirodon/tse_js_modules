import Student from './Student.mjs';
import { Teacher } from './Teacher.mjs';

let st1 = new Student("Arthur", "Rimbaud", 17);
let st2 = new Student("Boris", "Vian", 21);
let st3 = new Student("Georges", "Sand", 42);

let students = [st1, st2, st3];

for (let st of students) {

    st.display();
}

let t1 = new Teacher("Victor", "Hugo", "Poésie");
let t2 = new Teacher("Albert", "Einstein", "Physique");
let t3 = new Teacher("Ludwig", "Von Beethoven", "Musique");

let teachers = [t1, t2, t3];

for (let t of teachers) {

    t.display();
}