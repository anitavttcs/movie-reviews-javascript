import jwtDecode from 'jwt-decode';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Movie from "./pages/Movie";

function App() {
  const [user, setUser] = useState(null);

  const checkToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser(jwtDecode(token));
    }
  };

  useEffect(() => {
    checkToken();
    console.log(user);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar setUser={setUser} user={user} />

        <div className="content">
          <Switch>

            <Route exact path="/">
              <Home user={user} />
            </Route>

            <Route exact path="/login">
              <Login checkToken={checkToken} />
            </Route>

            {/* <Route exact path="/movie/:id"> */}
            {/* -- csak amíg nincs adat -- */}
            <Route exact path="/movie">
              <Movie user={user} />
            </Route>

          </Switch>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
