import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home.component';
import Catagories from './components/catagories/catagories.component';

// styles
import './App.scss';
import CatagoryPage from './pages/catagoryPage/catagoryPage.component';
import ContactUs from './pages/contact-us/contactUs.component';
import Nav from './components/nav/nav.component';

function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catagory/:catagory" element={<CatagoryPage />} />
        <Route path="/contact" element={<ContactUs />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
