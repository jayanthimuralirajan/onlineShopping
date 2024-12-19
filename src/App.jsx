import HomeAppliance from "./pages/HomeAppliance";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Mens from "./pages/Mens";
import Navbar from "./pages/Navbar";
import Register from "./pages/Register";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Womens from "./pages/Womens";
import Menu from "./pages/Menu";
import MainPage from "./pages/MainPage";
import Jewelery from "./pages/Jewelery";

function App() {
 
  return(
  <>

  <BrowserRouter>
  
  <Routes>
  <Route path='/' element={<Login/>}/>
  <Route path='Register' element={<Register/>}/>
  <Route path='MainPage' element={<MainPage/>}>
    
    <Route path='Home' element={<HomePage/>}/>
    <Route path='HomeAppliance' element={<HomeAppliance/>}/>
    <Route path='Mens' element={<Mens/>}/>
    <Route path='Womens' element={<Womens/>}/>
    <Route path='Jewelery' element={<Jewelery/>}/>
    
  </Route>
  </Routes>
  </BrowserRouter>
  </>
  );
}
export default App
