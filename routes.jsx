import { createBrowserRouter } from "react-router-dom";
import Home from "./src/pages/home/components/Home";
import Register from "./src/pages/auth/register/Register";
import Login from "./src/pages/auth/login/Login";
import Cart from "./src/pages/cart/Cart";

const router = createBrowserRouter([
  {
    path :'/',
    element :<Home/>
  },
  {
    path :'/register',
    element :<Register/>
  },
  {
    path :'/login',
    element :<Login/>
  },
  {
    path :'/cart',
    element :<Cart/>
  }
])
export default router