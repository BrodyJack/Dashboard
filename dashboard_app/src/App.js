import React, { Component } from 'react';
import TextAdventurePage from './TextAdventure';
import FoodRecommenderPage from './FoodRecommender';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Column, Row } from 'simple-flexbox';
import Header from './Header';
import BookClub from './BookClub';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/" component={Header} />
            <div>
              <Row horizontal="around" flexGrow={1} className="webheader">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/topics">Topics</Link>
                </li>
                <li>
                  <Link to="/game">Text Adventure</Link>
                </li>
                <li>
                  <Link to="/food">Food Recommender</Link>
                </li>
                <li>
                  <Link to="/bookClub">Book Club</Link>
                </li>
              </Row>

              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/topics" component={Topics} />
              <Route path="/game" component={TextAdventurePage} />
              <Route path="/food" component={FoodRecommenderPage} />
              <Route path="/bookClub" component={BookClub} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
