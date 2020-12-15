//select elements from the DOM 
const guessInput = document.querySelector('#guess'),
      guessButton = document.querySelector('#button_guess'),
      playAgain = document.querySelector('#play'),
      output = document.querySelector('.output'),
      /*game values*/
      minGuess = 0 ,
      maxGuess = 100;

let rightGuess = Math.floor(Math.random() * 101),
    ul = document.querySelector('ul');
      console.log(rightGuess);

      //play again event listener
      playAgain.addEventListener('click', 
      function(){
        //window.location.reload();
        guessInput.disabled = false;
        guessInput.value = '';
        ul.innerHTML = '';
        output.textContent = '';
        guessButton.disabled = false;
        rightGuess = Math.floor(Math.random() * 101);
        console.log(rightGuess);
      });

      //add event listener to guess button 
      guessButton.addEventListener('click', 
      function(e){
        playAgain.disabled = true;
        let guess = parseInt(guessInput.value);
        ul.innerHTML += `<li>${guess}</li>`;
        let difference = Math.abs(guess - rightGuess);
        //validate input 
        if (isNaN(guess) || guess < minGuess || guess > maxGuess) {setMessage(`Please enter a number between ${minGuess} and ${maxGuess}`, 'red');} else {
          if(guess === rightGuess){
            setMessage('Congratulations, Your guess is right!', 'green');
            guessInput.disabled = true;
            guessButton.disabled = true;
            playAgain.disabled = false;
          }
          else if(difference <= 5){setMessage(`getting hotter!`, '#e25822');}
          else if (difference >= 11){setMessage(`getting colder!`, '#006994');}
        }
      });
      
      //set message 
      function setMessage(msg, color){
        output.textContent = msg;
        output.style.color = color ;
        guessInput.style.border = `1px solid ${color}`;
      }