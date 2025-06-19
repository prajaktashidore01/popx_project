import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import SignIn from './components/SignIn';
import CreateAccount from './components/CreateAccount';
import AccountSettings from './components/AccountSettings';

const App = () => (
  <Routes>
    <Route path="/" element={<Welcome />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/create-account" element={<CreateAccount />} />
    <Route path="/account" element={<AccountSettings />} />
  </Routes>
);

export default App;
