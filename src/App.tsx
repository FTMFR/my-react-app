import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./components/Home";
import ForgotPass from "./components/ForgotPass";
import ChangePassword from "./components/ChangePass";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path="/change-password" element={<ChangePassword />} />
      </Routes>
      <Footer />
    </Router>

  );
};

export default App;
