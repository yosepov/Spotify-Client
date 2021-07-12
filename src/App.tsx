import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';

import Login from './components/Login/Login';
const code = new URLSearchParams(window.location.search).get('code');
const App = () => code ? <Dashboard code ={code} /> : <Login />;

export default App;
