'use strict';


//Dom Manipulation is when you use JavaScript to interact with the HTML file.

/*
Dom(Document Object Model) is a Structured representation of HTML documents. That Allows Javascript to access HTML elements and
styles to manipulate them. 

DOM methods are not a part of JavaScript they are a part of WEB API's(Application Programming Interface)
*/
/*
console.log(document.querySelector('.message').textContent);//Gets the text content of an element

document.querySelector('.message').textContent = 'Correct Number! 🎉'; //Changing the text of the element

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1; //Generates a random number between 1-20, math.trunc removes the decimal places.
let score = 20;
let highScore = 0;

const displayMessage = function(message)
{
    document.querySelector('.message').textContent = message;
}

//Handeling Click events
document.querySelector('.check').addEventListener('click', function()//This function will only happen if the event is called.
{
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    //When there is no input
    if(!guess)
    {
        //document.querySelector('.message').textContent = 'No Number ⛔';
        displayMessage('No Number ⛔');
    }
    
    //When the player wins
    else if(guess === secretNumber)
    {
        //document.querySelector('.message').textContent = 'Correct Number 🎉💃';
        displayMessage('Correct Number 🎉💃');
        document.querySelector('.number').textContent = secretNumber;

        //Styles that are changed in the DOM must be in string value
        document.querySelector('body').style.backgroundColor = '#60b347'; //Sets the background color to green if the player wins.
        document.querySelector('.number').style.width = '30rem';

        if(score > highScore)
            {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
            
    }

    //When the guess is wrong.
    else if(guess !== secretNumber)
    {
        if(score > 1)
            {
                //document.querySelector('.message').textContent = guess > secretNumber ? 'To High! 📈' : 'To Low 📉';
                displayMessage(guess > secretNumber ? 'To High! 📈' : 'To Low 📉');
                score--;
                document.querySelector('.score').textContent = score;
            }
            else
            {
                //document.querySelector('.message').textContent = 'You lost the game 💥';
                displayMessage('You lost the game 💥');
                document.querySelector('.score').textContent = 0;
            }
    }
    /*
    //When the guess is to high
    else if(guess > secretNumber)
    {
        if(score > 1)
        {
            document.querySelector('.message').textContent = 'To High! 📈';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else
        {
            document.querySelector('.message').textContent = 'You lost the game 💥';
            document.querySelector('.score').textContent = 0;
        }
        
    }

    //When the guess is to low
    else if(guess < secretNumber)
    {
        if(score > 1)
            {
                document.querySelector('.message').textContent = 'To Low 📉';
                score--;
                document.querySelector('.score').textContent = score
            }
            else
            {
                document.querySelector('.message').textContent = 'You lost the game 💥';
                document.querySelector('.score').textContent = 0;
            }
        ;
    }
        */
});


//Resetting the game
document.querySelector('.again').addEventListener('click', function()
{
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        //document.querySelector('.message').textContent = 'Start guessing...';
        displayMessage('Start guessing...');
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
});