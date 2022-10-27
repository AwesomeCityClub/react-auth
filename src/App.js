import { BrowserRouter , Routes, Route } from "react-router-dom"
import Product from './page/Product/Product'
import Error from './page/Error/Error'
import Login from './page/Login/Login'

function App() {
  return (
   <BrowserRouter> 
   <Routes>
    <Route path="/login" element ={<Login />}/>
    <Route path="/" element ={<Product />} >
    <Route path="*" element ={<Error />} />
    </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
