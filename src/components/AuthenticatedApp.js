function AuthenticatedApp() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [loggedInEmail, setLoggedInEmail] = useState(null);
  
    return (
      <>
        <NavBar isLoggedIn={isLoggedIn} email={loggedInEmail} />
        {isLoggedIn ? (
          <p>Welcome, {loggedInEmail}!</p>
        ) : (
          <Login setLoggedIn={setLoggedIn} setLoggedInEmail={setLoggedInEmail} />
        )}
      </>
    );
  }
  
  export default AuthenticatedApp;