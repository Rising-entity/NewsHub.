import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import Sports from './Components/News/Sports';
import Ent from './Components/News/Entertainment';
import Buisness from './Components/News/Buisness';
import Politics from './Components/News/Politics';
import Science from './Components/News/Science';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path='/' element={< News />}></Route>
            <Route exact path='/sports' element={< Sports />}></Route>
            <Route exact path='/ent' element={< Ent />}></Route>
            <Route exact path='/buis' element={< Buisness />}></Route>
            <Route exact path='/Politics' element={< Politics />}></Route>
            <Route exact path='/Science' element={< Science />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
