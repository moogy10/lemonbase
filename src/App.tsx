import React from 'react';
import './App.scss';
import Nav from './navbar/Nav';
import Main from './Main/Main';
import Our from './our story/our';
import Why from './Why/Why';
import How from './How/How';
import What from './What/What';
import Now from './Now/Now';
function App() {
  return (
  <div >
    <div className='app-conatiner'>
      <Nav/>
      <Main/>
      <Our />
      <Why />
      <How />
      <What />
      <Now />
    </div>
  </div>
  );
}

export default App;
