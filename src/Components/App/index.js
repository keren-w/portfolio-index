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
        <div id={styles['centered-content']}>
          <MenuBar />
          <main>
            <Route exact path="/" component={Portfolio} />
            <Route path="/portfolio" component={Portfolio} />
            {/* <main /> */}
            {/* <ViewPain /> */}
          </main>
        </div>
      </article>
    );
  }
}

export default App;
