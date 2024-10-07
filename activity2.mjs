import _ from 'lodash';

let array = _.words("Demain dès l'aube, à l'heure où blanchit la campagne");

for (let word of array) {

    console.log(word);
}