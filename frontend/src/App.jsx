/* eslint-disable */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import NotFound from './components/Not_found';
import Signup from './components/Signup';
import './App.css';


import './assets/application.scss';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
          </Route>
          <Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router >
  );
};

export default App;
