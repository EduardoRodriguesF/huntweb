import React from 'react';
import api from './services/api';

import Header from './components/Header';
import Main from './pages/main'

import './styles.css';

const App = () => (
  <div className="App">
    <Header />
    <Main />
  </div>
)

export default App;
