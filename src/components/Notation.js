
const ASCII_A = 'a'.charCodeAt(0);

const CHESSCASE = { 
    'wP': 'p',
    'bP': 'o',
    'wN': 'n',
    'bN': 'm',
    'wB': 'b',
    'bB': 'v',
    'wR': 'r',
    'bR': 't',
    'wQ': 'q',
    'bQ': 'w',
    'wK': 'k',
    'bK': 'l'
};

const toChessCase = (position) => {
    const positionInChessCase = [
        ['$',' ','+',' ','+',' ','+',' ','+', '%'],
        ['$','+',' ','+',' ','+',' ','+',' ', '%'],
        ['$',' ','+',' ','+',' ','+',' ','+', '%'],
        ['$','+',' ','+',' ','+',' ','+',' ', '%'],
        ['$',' ','+',' ','+',' ','+',' ','+', '%'],
        ['$','+',' ','+',' ','+',' ','+',' ', '%'],
        ['$',' ','+',' ','+',' ','+',' ','+', '%'],
        ['$','+',' ','+',' ','+',' ','+',' ', '%'],
    ];

    for (const [square, piece] of Object.entries(position)) {
        const column = square.charCodeAt(0) - ASCII_A;
        const row = parseInt(square[1]);

        const newSquare = squareToChessCase(column, row, piece);

        positionInChessCase[8 - row][column + 1] = newSquare;
    }

    let posChessCase = '';

    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 10; j++){
            posChessCase += positionInChessCase[i][j];
        }
        posChessCase += '\n';
    }

    posChessCase = '!""""""""#\n' + posChessCase + '/(((((((()';

    return posChessCase;
}

const squareToChessCase = (colum, row, piece) => {
    const pieceInChessCase = CHESSCASE[piece];

    if (isLightSquare(colum, row)){
        return pieceInChessCase;
    }

    return pieceInChessCase.toUpperCase();
}

const isLightSquare = (column, row) => {
    return (isEven(column) && isEven(row)) || (!isEven(column) && !isEven(row));
}

const isEven = (n) => {
    return n % 2 === 0;
}

export default toChessCase;
