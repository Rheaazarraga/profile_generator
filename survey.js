const readline = require('readline');
let response = "";
let name = "";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  name += `${answer}`;

  rl.question("What's your hobby? ", (answer) => {
    response += `${name} really enjoys ${answer} in their spare time. `;



    rl.question("What's kind of music do you like?' ", (answer) => {
      response += `${name} likes listening to ${answer} music.`;


    
      rl.question("What's your favourite food? ", (answer) => {
        response += ` ${name}'s favourite food is ${answer}.`;
  


        rl.question("What city would you like to travel to? ", (answer) => {
          response += ` The first city ${name} would like to travel to in the future is ${answer}.`;
    
      

          rl.question("What is your all-time favourite show? ", (answer) => {
            response += ` ${name}'s all-time favourite show is ${answer}.`;

        

            rl.question("Are you a dog person? or a cat person? ", (answer) => {
              response += ` ${name} is definitely a ${answer} person!`;
        
          

              rl.close();
              console.log(response);
            });

          });

        });
 
      });

    });

  });

});
