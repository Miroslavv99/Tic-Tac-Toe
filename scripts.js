const cells = document.querySelectorAll('.cell')
const winerDisplay = document.querySelector('.winner')


function gameController () {
    let gameBoard = [null, null, null, null, null, null, null, null, null]
    let player = 'X'

    cells.forEach(el => {
        el.addEventListener('click', () => {
            let index = parseInt(el.id)

            if(gameBoard[index] === null) {
                gameBoard[index] = player
                el.textContent = player
                console.log(player)

                player = player === 'X' ? 'O' : 'X'
            }
        })
    })
}

