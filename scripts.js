//Getting page elements
const cells = document.querySelectorAll('.cell')
const winnerDisplay = document.querySelector('.winner')
const resetButton = document.querySelector('.reset')
const playerX = document.querySelector('#player-x')
const playerO = document.querySelector('#player-o')
const changeButton = document.querySelector('#change-player')

//Factory function with closure containing methods for the game
function gameController () {
    let gameBoard = [null, null, null, null, null, null, null, null, null] 
    let player = 'x'
    let gameOver = false
    winnerDisplay.textContent = 'Let`s start the game!'
    

    //Method handles clicks on game board cells, updates the game state, and switches players by calling the winner check function.
    const handleCheck = () => {
            cells.forEach(cell => {
                const index = parseInt(cell.id)
                cell.addEventListener('click', () => {
                    if(gameBoard[index] === null && !gameOver && playerX.value !== '') {
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
                        playerxValue = playerX.value
                        playeroValue = playerO.value
                   

                    if(player === 'x') {
                        winnerDisplay.textContent = `Player - ${playerxValue} Win!`
                    } else {
                        winnerDisplay.textContent = `Player - ${playeroValue} Win!`
                    }
                    gameOver = true
                    return
                } 
            }

            if(!gameBoard.includes(null)) {
                winnerDisplay.textContent = 'Its Draw!'
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
        winnerDisplay.textContent = 'Let`s Start The Game!'
        gameOver = false
    })

    changeButton.addEventListener('click', () => {
        playerX.value = ''
        playerO.value = ''
    })

    handleCheck()
    
    }

    gameController()

