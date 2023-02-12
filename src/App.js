import React  from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MainPage from './pages/MainPage';
import Wishes from './pages/Wishes';
function App() {
  return (
    <Router>
           <div className="App">
           <Routes>
                 <Route exact path="/home/:code" element={< MainPage />}></Route>
                 <Route exact path='/wishes/:code' element={< Wishes />}></Route>
          </Routes>
          </div>
       </Router>
  );
}

export default App;