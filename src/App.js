import React, {useContext} from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";
function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // runs AFTER all other code validation, and ONLY if there is a change to the previous state, thus prevents infinite loop.
  // In this case, it only runs once when the page is reload and when the user logs out.
  // useEffect(() => {
  //   const userLoggedInValidation = localStorage.getItem("isLoggedIn");

  //   if (userLoggedInValidation === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways

  //   // here I set it as 0 = not logged in, 1 = logged in
  //   localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  const ctx = useContext(AuthContext);
  return (
    <React.Fragment
      value={{
        isLoggedIn: ctx.isLoggedIn,
        onLogout: ctx.logoutHandler,
      }}
    >
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
