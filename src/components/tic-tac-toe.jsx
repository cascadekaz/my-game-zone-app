import { useState } from 'react';
import useTicTacToe from  '../hooks/use-tic-tac-toe';


function TicTacToe() {
  // console.log(board);
  const {board, handleClick, calculateWinner, resetGame, getStatusMessage}=useTicTacToe();
  return (
    <div className="game">
      <div className="status">
        {getStatusMessage()}
      </div>
      <button type="button" className="reset-button btn btn-outline-dark" onClick={resetGame}>
        Reset Game</button>
      <div className="board">
        {board.map((b,index)=>{
          return(
          <button className="cell" key={index} 
          onClick={()=> handleClick(index)}
          disabled={b!==null}
          >
          {b}
          </button>
        );
        })}
      </div>
    </div>
  )
}

export default TicTacToe;