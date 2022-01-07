import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./admin/components/Dashboard";
import "./index.css";
import AddProduct from "./admin/components/AddProduct";
import OrderSummary from "./admin/components/OrderSummary";
import NewOrder from "./admin/components/NewOrder";
import CustomerList from "./admin/components/CustomerList";
import UpdateProduct from "./admin/components/UpdateProduct";
import { EcommerceProvider } from "./context/EcommerceContext";
import "./toggle.js";
import HomePage from "./client/components/HomePage";
import AboutProduct from "./client/components/AboutProduct";
import WomenProduct from "./client/components/WomenProduct"
import MenProduct from "./client/components/MenProduct";
import ShowCaseProduct from "./client/components/ShowCaseProduct"
import Register from "./client/components/Register";
import Login from "./client/components/Login";
import CartPage from "./client/components/CartPage"
import Checkout from "./client/components/Checkout";



function App() {
  return (
    <Router>
      <EcommerceProvider>
        <Routes>
          <Route exact path="/" element={<Dashboard />}></Route>
          <Route path="/addproduct" element={<AddProduct />}></Route>
          <Route path="/ordersummary" element={<OrderSummary />}></Route>
          <Route path="/neworder" element={<NewOrder />}></Route>
          <Route path="/customerslist" element={<CustomerList />}></Route>
          <Route path="/update/:id" element={<UpdateProduct />}></Route>
          <Route path="/homepage" element={<HomePage />}></Route>
          <Route
            path="/aboutproduct/:id/:MenWears"
            element={<AboutProduct />}
          ></Route>
          <Route path="/:MenWears" element={<MenProduct />}></Route>
          <Route
            path="/aboutproduct/:id/:WomenWears"
            element={<AboutProduct />}
          ></Route>
          <Route path="/aboutproduct/:id" element={<AboutProduct />}></Route>
          <Route path="/allproduct" element={<ShowCaseProduct />}></Route>
          <Route path="/:WomenWears/female" element={<WomenProduct />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/allproduct/cart" element={<CartPage />}></Route>
          <Route path="/cart/checkout" element={<Checkout />}></Route>
        </Routes>
      </EcommerceProvider>
    </Router>
  );
}

export default App;
