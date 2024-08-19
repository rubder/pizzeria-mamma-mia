import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // Estado para controlar la página actual

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'register':
        return <RegisterPage />;
      case 'login':
        return <LoginPage />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage} /> {/* Pasamos setCurrentPage como prop */}
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
