import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './Greetings';

const onClick = (name: string) =>  {
  alert('clicked!')
}

const App: React.FC = () => {
  return <Greetings name="jbs" mark = "numbering" onClick = {onClick}></Greetings>;
}

export default App;
