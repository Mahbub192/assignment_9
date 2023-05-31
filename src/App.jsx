import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import Header from './components/Header';


const App = () => {
  return (
    <>
      <Header></Header>
      <Outlet/>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;