const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');




let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;


// Allow user to update by one increment

p1Button.addEventListener('click', function() {
    
    // if still playing the game keep adding score
    
    if (!isGameOver) {
        p1Score += 1;
        
        // if winning score is 5 then game over

        if (p1Score === winningScore) {
            isGameOver = true;
        }
        p1Display.textContent = p1Score;
    }
} )

p2Button.addEventListener('click', function() {
    
    // if still playing the game keep adding score
    
    if (!isGameOver) {
        p2Score += 1;
        
        // if winning score is 5 then game over

        if (p2Score === winningScore) {
            isGameOver = true;
        }
        p2Display.textContent = p2Score;
    }
} )


// 

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})




// reset button to clear to 0

resetButton.addEventListener('click', reset) 
   

function reset() {
   isGameOver = false;
   p1Score = 0;
   p2Score = 0;
   p1Display.textContent = 0;
   p2Display.textContent = 0;
} 
