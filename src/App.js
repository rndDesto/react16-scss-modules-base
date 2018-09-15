import React, { Component } from 'react';
import logo from './logo.svg';
import style from './App.scss';

class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <header className={style["App-header"]}>
          <img src={logo} className={style["App-logo"]} alt="logo" />
          <h1 className={style["App-title"]}>Welcome to React</h1>
        </header>
        <p className={style["App-intro"]}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
