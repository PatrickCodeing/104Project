// random value generated
var y = Math.floor(Math.random() * 10 + 1);

function playAgain()
{
    y = Math.floor(Math.random() * 10 + 1);
}
var guess=0;
// function for number guessed by user     
playername = localStorage.getItem("playername");

function submit()
{
    var x = document.getElementById("guessField").value;
    // counting the number of guesses
    
    // made for correct Guess
    if(x == y)
    {
        alert("CONGRATULATIONS!!! " + playername + " YOU GUESSED IT RIGHT IN " + guess + " GUESS");
        guess=1;
    }
    else if(x>y)
    {
        guess++;
        alert("OOPS SORRY!!! TRY A SMALLER NUMBER");
    }
    else
    {
        guess++;
        alert("OOPS SORRY!!! TRY A GREATER NUMBER");
    }
    
}