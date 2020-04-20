import React, { Component } from "react";
import CircleSelector from "./components/CircleSelector/CircleSelector";
import Circles from "./components/Circles/Circles";
import "./App.css";

class App extends Component {
  state = {
    active: 1,
  };

  setActive = (active) => {
    this.setState({ active: active });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            active={this.state.active}
            setActive={this.setActive}
          />
          <Circles active={this.state.active} setActive={this.setActive} />
        </main>
      </div>
    );
  }
}

export default App;
