
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Offers from "./pages/Offers";
import ForgotPassword from "./pages/ForgotPassword";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
  <Router>
    <Header/>
    <Routes>
      <Route>
      <Route path="/" element={<Home/>}/>
      <Route path="/offers" element={<Offers/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/sign-up" element={<Signup/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/profile" element={<PrivateRoute/>}>
      <Route path="/profile" element={<Profile/>}/>
      </Route>
      </Route>
    </Routes>
    <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
  </Router>
  
  );
}

export default App;
