import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from '../src/screens/Home/Home';
import PostsContainer from './containers/PostsContainer/PostsContainer';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route path='/posts' component={PostsContainer} />
      <Route path='/' component={Home} />
    </Switch>
    </div>
  );
}

export default App;
