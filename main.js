const readline = require('readline')
const request = require('request')

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// rl.question('What do you think of Node.js? ', (answer) => {
//     // TODO: Log the answer in a database
//     console.log(`Thank you for your valuable feedback: ${answer}`);
//
//     rl.close();
// });

request('https://google.ru', {json: true}, (err, res, body) => {
    if(err)   {return console.log(err);}
    console.log(body.url);
    console.log(body.explanation);
});


