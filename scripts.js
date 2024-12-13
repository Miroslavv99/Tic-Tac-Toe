const cells = document.querySelectorAll('.cell')
const winerDisplay = document.querySelector('.winner')
const resetButton = document.querySelector('.reset')


function gameController () {
    let gameBoard = [null, null, null, null, null, null, null, null, null] 
    let player = 'x'
    let gameOver = false

    
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

