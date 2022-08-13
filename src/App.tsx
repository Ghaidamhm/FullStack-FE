import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Search from "./pages/search";
import Home from "./pages/Home";
import CreatePackage from "./pages/Packages/createPackage";
import MyPackages from "./pages/myPackages";
import PrivateRoutes from "./PrivateRoute";
import "./styles/globals.css";
import Package from "./pages/Packages/package";
import About from "./pages/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/packages/create" element={<CreatePackage />} />
          <Route path="/my/packages" element={<MyPackages />} />
        </Route>

        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/package" element={<Package />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
