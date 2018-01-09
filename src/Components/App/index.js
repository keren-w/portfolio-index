import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Homepage from '../Homepage';
import Portfolio from '../Portfolio';
// import Resume from '../Resume';
// import Contact from '../Contact';
import styles from './style.css';
import MenuBar from '../MenuBar';

class App extends Component {

  render() {
    return (
      <article id={styles['page-container']}>
        <MenuBar />
        <main>
          <Route exact path="/" component={Homepage} />
          <Route path="/portfolio" component={Portfolio} />
          {/* <main /> */}
          {/* <ViewPain /> */}
        </main>
      </article>
    );
  }
}

export default App;
