
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Offers from "./pages/Offers";
import ForgotPassword from "./pages/ForgotPassword";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";

function App() {
  return (
  <Router>
    <Routes>
      <Route>
      <Route path="/" element={<Home/>}/>
      <Route path="/offers" element={<Offers/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/sign-up" element={<Signup/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/profile" element={<Profile/>}/>
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
