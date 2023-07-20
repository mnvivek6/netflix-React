import React from 'react';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {action,Originals} from './urls'

function App() {
  return (
    <div className='App'>

        <NavBar/>
        <Banner/>
        <RowPost url={Originals} title = 'Netflix Origiinals' />
        <RowPost url={action} title = 'Action' isSmall />
      
      
    </div>
  );
}

export default App;
