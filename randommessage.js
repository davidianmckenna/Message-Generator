const firstComponents = ['Plants are', 'Humans are', 'Animals are', 'Centipedes are', 'Kids are', 'Sticks are'];
const description = ['smelly and gross', 'molded by time', 'swept up in thier own problems', 'concerned with higher problems', 'the building blocks of reality'];
const finisher = ['and so are you.', 'for that is the way of things.', 'but don\'t think that protects you from fate.', 'and you are a pleb.'];

const generateMessage = (array1, array2, array3) => {
let randomMessage = [];    
let randomIndexOne = Math.floor(Math.random()*array1.length);
let randomIndexTwo = Math.floor(Math.random()*array2.length);
let randomIndexThree = Math.floor(Math.random()*array3.length);

randomMessage.push(array1[randomIndexOne], array2[randomIndexTwo], array3[randomIndexThree]);

const string = randomMessage.join(' ');

return console.log(string);
}

generateMessage(firstComponents, description, finisher);


