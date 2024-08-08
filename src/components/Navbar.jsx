const Navbar = () => {
    const total = 25000;
    const token = false;
  
    return (
      <nav>
        <h2>Pizzería Mamma Mía</h2>
        <button>🍕 Home</button>
        {token ? (
          <>
            <button>🔓 Profile</button>
            <button>🔒 Logout</button>
          </>
        ) : (
          <>
            <button>🔐 Login</button>
            <button>🔐 Register</button>
          </>
        )}
        <button className="navbar-button navbar-total">🛒 Total: ${total.toLocaleString()}</button>
      </nav>
    );
  };
  
  export default Navbar;
  