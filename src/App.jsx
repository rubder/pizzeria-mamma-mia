import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header'; 
import Cart from './components/Cart';
// import Home from './components/Home'; // Comentado para pruebas
// import RegisterPage from './components/RegisterPage';
// import LoginPage from './components/LoginPage';

function App() {
  const [currentPage, setCurrentPage] = useState('cart'); 

  const renderPage = () => {
    switch (currentPage) {
      case 'cart':
        return <Cart />;
      case 'register':
        return <RegisterPage />;
      case 'login':
        return <LoginPage />;
      case 'home':
        return <Home />;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage} />
      <Header /> {}
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
