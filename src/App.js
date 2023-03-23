import Home from "./pages/home/Home";
import TopBar from "./components/topBar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const currentUser = true;
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/posts" element={<Home />} />
          {currentUser ? (
            <Route exact path="/" element={<Home />} />
          ) : (
            <Route exact path="/register" element={<Register />} />
          )}
          {currentUser ? (
            <Route exact path="/login" element={<Home />} />
          ) : (
            <Route exact path="/login" element={<Login />} />
          )}
          <Route path="/post/:id" element={<Single />} />

          {currentUser ? (
            <Route exact path="/write" element={<Write />} />
          ) : (
            <Route exact path="/write" element={<Login />} />
          )}
          {currentUser ? (
            <Route exact path="/settings" element={<Settings />} />
          ) : (
            <Route exact path="/settings" element={<Login />} />
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
