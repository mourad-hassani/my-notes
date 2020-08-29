import React from 'react';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <Header />
      <Main />
      <div style={{ height: "1000px" }} ></div>
      <Footer />
    </>
  );
}

export default App;