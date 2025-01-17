import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact
          element={<Home />}>
        </Route>
        <Route path="/cart"
          element={<Cart />}>
        </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;