import { Link, Route, Routes } from 'react-router-dom'
import Products from './components/Products'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const App = () => {
  return (
    <>

      <nav className="navbar bg-body-tertiary">
        <div>
       
         
        </div>
      </nav>

      <p />
      { <Routes>
       
        
        <Route path="/Products" element={<Products />} />
      </Routes> }
    </>
)}

export default App