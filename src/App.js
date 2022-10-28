import { BrowserRouter , Routes, Route } from "react-router-dom"
import Product from './page/Product/Product'
import Error from './page/Error/Error'


function App() {
  return (
   <BrowserRouter> 
   <Routes>
    <Route path="/" element ={<Product />} >
   
    </Route>

    <Route path="*" element ={<Error />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
