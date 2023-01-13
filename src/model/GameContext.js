import { useState, createContext } from 'react';

const GameContext = createContext({
    name: 'King',
    player: {},
    players: [{ id: 1, name: 'Taryn', piece: 'X' }, { id: 2, name: 'Bri', piece: 'O' }],
    board: [
        [
            { one: 1 }, { two: 0 }, { three: 2 }
        ],
        [
            { one: 1 }, { two: 0 }, { three: 2 }
        ],
        [
            { one: 1 }, { two: 0 }, { three: 2 }
        ]
    ],
    status: {},
    winner: {}
});

export default GameContext;

// let gameboard = [3];

// for(let i=0; i < 3; i++) {
//   gameboard[i] = [3];
// }

// const GameboardContext = createContext(gameboard);


// {game.board[0].one} {game.board[0].two} {game.board[0].three} <br></br>
//           {game.board[1].one} {game.board[1].two} {game.board[1].three} <br></br>
//           {game.board[2].one} {game.board[2].two} {game.board[2].three}