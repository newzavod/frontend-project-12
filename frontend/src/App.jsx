/* eslint-disable */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import NotFound from './components/Not_found';
import Singup from './components/Singup';

import './assets/application.scss';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Hexlet Chat</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<Singup />} />

        </Routes>
      </div>
    </Router >
  );
};

export default App;
