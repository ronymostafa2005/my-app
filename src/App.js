
import 'bootstrap/dist/css/bootstrap.min.css';
import  './App.css';
import { Route,Routes } from 'react-router-dom';
import Contact from './Contact.js';  
import Footer from './Compunents/footer/Footer.js';
import Navbar from './Navbar.js';
import Products from './Products.js'
import About from './About.js';



function App() {
  return (
    
    < >

      <Navbar/>
      <Routes>
        <Route path='/'  element={< Products />}    />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/About'   element={<About/>}   />
        
        
        </Routes> 
        <Footer/>
        

   


 </>  

    
    
     
 );
    
}




export default App;



  


