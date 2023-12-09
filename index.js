var board = ['', '', '', '', '', '', '', '', ''];
var player = 'X';
var points = { 'X': 0, 'O': 0, 'draw': 0 };

function drawBoard() {
    document.getElementById('board').innerHTML = '';
    for (var i = 0; i < board.length; i++) {
        document.getElementById('board').innerHTML += '<div class="cell" onclick="makeMove(' + i + ')">' + board[i] + '</div>';
        if ((i + 1) % 3 == 0) document.getElementById('board').innerHTML += '<div style="clear:both;"></div>';
    }
    document.getElementById('turn').innerText = 'Turn: Player ' + (player == 'X' ? '1 (X)' : '2 (O)');
    document.getElementById('points').innerHTML = 'Points:<br>Player 1 (X): ' + points['X'] + '<br>Player 2 (O): ' + points['O'] + '<br>Draws: ' + points['draw'];
}

function checkWin() {
    var winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (var i = 0; i < winConditions.length; i++) {
        if (board[winConditions[i][0]] != '' &&
            board[winConditions[i][0]] == board[winConditions[i][1]] &&
            board[winConditions[i][0]] == board[winConditions[i][2]]) {
            return true;
        }
    }
    return false;
}

function makeMove(i) {
    if (board[i] == '') {
        board[i] = player;
        if (checkWin()) {
            document.getElementById('winner').innerText = 'Player ' + (player == 'X' ? '1 (X)' : '2 (O)') + ' wins!';
            points[player]++;
            board = ['', '', '', '', '', '', '', '', ''];
            player = 'X';
        } else if (!board.includes('')) {
            document.getElementById('winner').innerText = 'It\'s a draw!';
            points['draw']++;
            board = ['', '', '', '', '', '', '', '', ''];
            player = 'X';
        } else {
            player = player == 'X' ? 'O' : 'X';
        }
    }
    drawBoard();
}

function resetBoard() {
    board = ['', '', '', '', '', '', '', '', ''];
    player = 'X';
    points = { 'X': 0, 'O': 0, 'draw': 0 };
    document.getElementById('winner').innerText = '';
    drawBoard();
}

drawBoard();

