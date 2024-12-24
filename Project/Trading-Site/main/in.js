let multiplier = 1.00;
let interval;
let isCrashed = false;
let betAmount = 0;

document.getElementById('place-bet').addEventListener('click', function() {
    betAmount = parseFloat(document.getElementById('bet-amount').value);
    if (isNaN(betAmount) || betAmount <= 0) {
        alert("Please enter a valid bet amount.");
        return;
    }
    startGame();
});

document.getElementById('cash-out').addEventListener('click', function() {
    cashOut();
});

function startGame() {
    document.getElementById('crash-message').classList.add('hidden');
    document.getElementById('cash-out').disabled = false;
    multiplier = 1.00;
    isCrashed = false;
    document.getElementById('game-status').innerText = "Game in progress...";
    document.getElementById('multiplier').innerText = multiplier.toFixed(2) + "x";

    interval = setInterval(() => {
        if (!isCrashed) {
            multiplier += 0.01; // Increase multiplier
            document.getElementById('multiplier').innerText = multiplier.toFixed(2) + "x";
            if (Math.random() < 0.05) { // Random crash
                crash();
            }
        }
    }, 100);
}

function crash() {
    isCrashed = true;
    clearInterval(interval);
    document.getElementById('crash-message').classList.remove('hidden');
    document.getElementById('game-status').innerText = "Game Over! You lost your bet.";
    document.getElementById('cash-out').disabled = true;
}

function cashOut() {
    clearInterval(interval);
    document.getElementById('game-status').innerText = "You cashed out at " + multiplier.toFixed(2) + "x!";
    document.getElementById('cash-out').disabled = true;
}