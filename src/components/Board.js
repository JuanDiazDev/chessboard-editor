import Chessboard from 'chessboardjsx'
import Button from './Button'
import React from 'react'
import toChessCase from './Notation'
import './../css/Board.css'

export const Board = () => {
    const [position, setPosition] = React.useState({});
    const [orientation, setOrientation] = React.useState('white');

    function handleMove(move) {
        const source = move.sourceSquare;
        const target = move.targetSquare;
        const piece = move.piece;
        delete position[source];
        const newPosition = {...position, [target]: piece};
        setPosition(newPosition);
    }

    function handleOrientation() {
        if (orientation === 'white') {
            setOrientation('black')
        }else {
            setOrientation('white')
        }
    }

    function handleChessCase(){
        alert(toChessCase(position));
    }

    return (
            <div className = "container">
                <Chessboard 
                position = {position} 
                sparePieces = {true}
                onDrop = {move => handleMove(move)}
                getPosition = {position => setPosition(position)}
                orientation = {orientation}
                dropOffBoard = {'trash'}
                />
                    <div className = "container-buttons">
                        <Button onClick = {() => setPosition("start")} text = 'Starting position'/>
                        <Button onClick = {() => setPosition({})} text = 'Clean board'/>
                        <Button onClick = {() => handleOrientation()} text = 'Change orientation'/>
                        <Button onClick = {() => handleChessCase()} text = 'Marroquin notation'/>
                        <Button onClick = {() => window.open("https://github.com/JuanDiazDev/chessboard-editor")} text = 'Docs'/>
                    </div>  
            </div>  
    )
}