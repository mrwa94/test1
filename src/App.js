
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import { Router , Routes , Route } from 'react-router';

//pages
import UseStateTest from './Pages/UseStateTest';
import UseEffectTest from './Pages/UseEffectTest';

//bootstrap
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className=" App  ">



    


<BrowserRouter >

<Link className='mx-4 pt-5 mb-5 text-decoration-none fs-2 text-color link-hover  d-block' to= '/UseStateTest'> UseStateTest</Link>
<Link className=' mx-4 text-decoration-none fs-2 text-color link-hover' to= '/UseEffectTest'> UseEffectTest</Link>

<Routes>
  <Route path='/UseStateTest' element = {<UseStateTest/>}></Route>
  <Route path='/UseEffectTest' element = {<UseEffectTest/>}></Route>
</Routes>
</BrowserRouter>
   
    
     
      
    </div>
  );
}

export default App;
