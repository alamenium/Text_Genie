const fs = require('fs'); //firstsystem

const feelingWords = ['hate', 'despise', 'dislike', 'would rather die than', 'like', 'love', 'appreciate', 'would love']
const verbs = fs.readFileSync('verbs.txt','utf-8').split("\n") //list of all english verbs
const nouns = fs.readFileSync('nouns.txt', 'utf-8').split("\n") //list of all english nouns

const name = 'Youssif';

main();

function main (){

    const f_index = RandomIndex(feelingWords);
    const v_index = RandomIndex(verbs);
    const n_index = RandomIndex(nouns);

    const verb = AdjustVerb(verbs[v_index]);
    const feelingWord = feelingWords[f_index];
    const noun = nouns[n_index];

    const ascii = `%C
    ___    __   ________    ______          __     ______           _    
   /   |  / /  <  /__  /   /_  __/__  _  __/ /_   / ____/__  ____  (_)__ 
  / /| | / /   / / /_ <     / / / _ \\| |/_/ __/  / / __/ _ \\/ __ \\/ / _ \\
 / ___ |/ /___/ /___/ /    / / /  __/>  </ /_   / /_/ /  __/ / / / /  __/
/_/  |_/_____/_//____/    /_/  \\___/_/|_|\\__/   \\____/\\___/_/ /_/_/\\___/ 
`

    const phrase = `My name is ${name} and I ${feelingWord} ${verb} ${noun}`;

    console.log(ascii)
    console.log(phrase)
}





function RandomIndex(arr){
    return Math.floor(Math.random() * (arr.length))
}

function AdjustVerb (verb){
    if(verb[verb.length-1]==='e') {
        verb = verb.slice(0, verb.length - 1);
    }

    return (verb+'ing')
}