import React from 'react';
import Header from './components/header';
import Main from './containers/Main';
import AlertBar from './components/AlertBar';

const App = () => (
  <div>
    <Header />
    <AlertBar />
    <Main />
  </div>
);

export default App;
