import '../App.css';
import '../App.js';
import React, { Component } from 'react';

let operationStartTime = null
let operationEndTime = null

class TestUAM extends Component {
  state = {
    selectors: [],
    number: 0,
  }


  create() {
    operationStartTime = performance.now();
    let howMany = parseInt(document.getElementById('howMany').value);
    let temp = []
    for (let i = 0; i < howMany; i++) {
      temp.push(
        <div
          key={i}
        >
          <p>
            {i + 1} obiekt
          </p>
        </div>
      )
    }
    this.setState({
      selectors: temp,
      number: howMany,
    })
  }

  add() {
    operationStartTime = performance.now();
    let howMany = parseInt(document.getElementById('howMany').value);
    let oldNumber = this.state.number;
    let newNumber = oldNumber + howMany;
    let temp = this.state.selectors;
    for (oldNumber; oldNumber < newNumber; oldNumber++) {
      temp.push(
        <div
          key={oldNumber}
        >
          <p>
            {oldNumber + 1} obiekt
          </p>
        </div>
      )
    }
    this.setState({
      selectors: temp,
      number: newNumber,
    })
  }


  delete() {
    operationStartTime = performance.now();
    let howMany = parseInt(document.getElementById('howMany').value);
    let oldNumber = this.state.number;
    let newNumber = oldNumber - howMany;
    let temp = this.state.selectors;
    temp.splice(newNumber, howMany)

    this.setState({
      selectors: temp,
      number: newNumber,
    })
  }

  update() {
    operationStartTime = performance.now();
    let howMany = parseInt(document.getElementById('howMany').value);
    let min = Math.ceil(1);
    let max = Math.floor(1001);

    let oldNumber = this.state.number;
    let newNumber = oldNumber - howMany;
    let temp = this.state.selectors;
    for (newNumber; newNumber < oldNumber; newNumber++) {
      let random = Math.floor(Math.random() * (max - min)) + min;
      temp[newNumber] = (<div key={random}> <p>{random} obiekt </p></div>);

    }
    this.setState({
      selectors: temp,
      number: oldNumber,
    })
  }


  clean() {
    operationStartTime = performance.now();
    this.setState({
      selectors: [],
      number: 0,
    })
  }

  render() {
    return (
      <div className="testUAM">
        <div id="option">
          <div id="description">
            Zarządzanie obiektami:
          </div>
          <input type="text" id="howMany" name="howMany" placeholder="Wpisz ilość" /><br />
          <button onClick={() => this.create()}>Stwórz</button>
          <button onClick={() => this.add()}>Dodaj</button>
          <button onClick={() => this.delete()}>Usuń</button>
          <button onClick={() => this.update()}>Zaktualizuj</button>
          <button onClick={() => this.clean()}>Wyczyść</button>
        </div>

        <div id="lista">{this.state.selectors}</div>

        <div id="czas">Czas wykonania w milisekundach: {((operationEndTime = performance.now()) - operationStartTime)}</div>
      </div>

    );
  }
}

export default TestUAM;
