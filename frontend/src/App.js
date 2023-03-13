import './App.css';
import Banner from './sections/Banner';
import Contact from './sections/Contact';
import Review from './sections/Review';
import Extrasection from './sections/Extrasection';
import Footer from './sections/Footer';
import Navbar from './sections/Navbar';
import Services from './sections/Services';
import { Link, Route, Router, Routes } from "react-router-dom"; //routes link korlam
import Home from './sections/Home';
import Notfound from './sections/Notfound';
import Manage from './sections/Manage';
import Addproduct from './Manage/Addproduct';
import ManageProduct from './Manage/ManageProduct';
//nirdishto path er jnno nirdishto component dekhano
function App() {
  return (
    <div className=' p-5'>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/banner' element={<Banner/>}/>
          <Route path='/manage' element={<Manage/>}/>
          <Route path='/manage/:id' element={<ManageProduct/>}/>
          <Route path='/addproduct' element={<Addproduct/>}/>
          <Route path='/footer' element={<Footer/>}/>
          <Route path='/review' element={<Review/>}/>
          <Route path='*' element={<Notfound/>}/>
      </Routes>  
    </div>
  );
}
 

export default App;
