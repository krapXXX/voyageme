import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../../layout/Layout';
import Home from '../../pages/home/Home';
import Deals from '../../pages/deals/Deals';
import About from '../../pages/about/About';
import Product from '../../pages/product/Product';
import Testimonials from '../../pages/testimonials/Testimonials';
import Contacts from '../../pages/contacts/Contacts';
import Liked from '../../pages/liked/Liked';

export default function App() {
  return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path='home' element={<Home />} />
                    <Route path='about' element={<About/>} />
                    <Route path='deals' element={<Deals />} />
                    <Route path='product' element={<Product />} />
                    <Route path='testimonials' element={<Testimonials />} />
                    <Route path='contacts' element={<Contacts />} />
                    <Route path='liked' element={<Liked />} />

                </Route>
            </Routes>
        </BrowserRouter>
        </>
}

