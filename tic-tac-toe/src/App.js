import logo from './logo.svg';
import './App.css';
import React from 'react';

class Test extends React.Component {
  render() {
    return <>
      {console.log("render test")}
    </>
  }
}

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value : null,
    }
  }
  render() {
    return (
      <button className="square" 
              onClick={() => {this.setState({value : "X"})}}
      >
        {this.state.value}
        {console.log("click lại", this.state.value)}
        <Test/>
      </button>
    )
  }
}
class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    let status = "Next player: X"
    return (
      <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
      </div>
    )
  }
}
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
function App() {
  return <Game/>;
}

export default App;
