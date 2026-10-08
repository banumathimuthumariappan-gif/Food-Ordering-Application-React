import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Cart from "./components/Cart/Cart";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import RestaurantDetail from "./components/RestaurantDetail/RestaurantDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Header />

        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />

          <Route path="/restaurant/:id" element={<RestaurantDetail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
