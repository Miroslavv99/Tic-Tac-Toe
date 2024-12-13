//Getting page elements
const cells = document.querySelectorAll('.cell')
const winerDisplay = document.querySelector('.winner')
const resetButton = document.querySelector('.reset')

//Factory function with closure containing methods for the game
function gameController () {
    let gameBoard = [null, null, null, null, null, null, null, null, null] 
    let player = 'x'
    let gameOver = false

//Method handles clicks on game board cells, updates the game state, and switches players by calling the winner check function.
    const handleCheck = () => {
            cells.forEach(cell => {
                const index = parseInt(cell.id)
                cell.addEventListener('click', () => {
                    if(gameBoard[index] === null && !gameOver) {
                        gameBoard[index] = player
                        player = player === 'x' ? 'o' : 'x'
                        cell.textContent = player
                        checkWinner()
                    }
                })
            })
        };

//Method adding logic for checking the winner   
    const  checkWinner =  () => {
            const winningCombinations = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];
            
            for(let combination of winningCombinations) {
                const [a, b, c] = combination

                if(gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c]) {
                    winerDisplay.textContent = `Player ${player} Wins!`
                    gameOver = true
                } 
            }

            if(!gameBoard.includes(null)) {
                winerDisplay.textContent = 'Its Draw!'
                gameOver = true
            }
        }

        //Adds an event handler to the reset button that clears the game board, resets the game state, and allows a new game to be started
    resetButton.addEventListener('click', () => {
        gameBoard = [null, null, null, null, null, null, null, null, null]
        cells.forEach(cell => {
            cell.textContent = ''
        })
        player = 'x'
        winerDisplay.textContent = 'Let`s Start The Game!'
        gameOver = false
    })

     handleCheck()
    
    }

    gameController()

