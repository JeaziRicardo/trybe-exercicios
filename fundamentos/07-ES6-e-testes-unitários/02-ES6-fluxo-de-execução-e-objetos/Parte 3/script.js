const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addKey(object, key, value) {
  object[key] = value;
}
addKey(lesson2, 'turno', 'noite');

const viewKeys = (obj) => Object.keys(obj);
// console.log(viewKeys(lesson2));

const objLength = (obj) => viewKeys(obj).length;
// console.log(objLength(lesson2));

const viewValue = (obj) => Object.values(obj);
// console.log(viewValue(lesson2));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3}); 
// console.log(allLessons);

const getNumberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (let index in array) {
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
};
// console.log(getNumberOfStudents(allLessons));

const getValueByNumber = (obj, number) => Object.values(obj)[number];
// console.log(getValueByNumber(lesson2, 3));

const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) {
      isEqual = true;
    }
  }
  return isEqual;
};
// console.log(verifyPair(lesson2,'professor','Carlos'));
