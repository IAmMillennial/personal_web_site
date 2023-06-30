const cells = Array.from(document.querySelectorAll('.cell'));


let currentPlayer = 1;


const message = document.querySelector('#message');

// НОВЫЙ БЛОК КОДА
// Получаем доступ к элементу с очередью игроков
const turn = document.querySelector('#turn')


const checkWin = () => {
    const winCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combination of winCombinations) {
        const [a, b, c] = combination;
        if (
            cells[a].textContent &&
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent
        ) {
            return true;
        }
    }

    return false;
};


const checkDraw = () => {
    return cells.every(cell => cell.textContent);
};


const handleCellClick = (e) => {
    const cell = e.target;

    if (cell.textContent || message.textContent) {
        return;
    }

    cell.textContent = currentPlayer === 1 ? 'X' : 'O';
    
    if (checkWin()) {
        message.textContent = `Игрок ${currentPlayer} победил!`;
    } else if (checkDraw()) {
        message.textContent = 'Ничья!';
    } else {
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        // НОВЫЙ БЛОК КОДА
        // Меняем текст сообщения об очереди
        turn.textContent = currentPlayer === 1 ? "Ход первого игрока" : "Ход второго игрока"
    }  
};

cells.forEach(cell => cell.addEventListener('click', handleCellClick));