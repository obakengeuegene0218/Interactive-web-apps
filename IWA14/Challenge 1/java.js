const firstName = 'John';
const age = 35;
const hobby = 'Coding';

const logTwice = (parameter) => {
  console.log(parameter)
  console.log(parameter)
}

function Printhobby() {
    logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`)
}

Printhobby()