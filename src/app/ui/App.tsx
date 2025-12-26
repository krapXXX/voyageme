import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../../layout/Layout';
import Home from '../../pages/home/Home';
import Deals from '../../pages/deals/Deals';
import About from '../../pages/about/About';
import Product from '../../pages/product/Product';
import Testimonials from '../../pages/testimonials/Testimonials';
import Contacts from '../../pages/contacts/Contacts';
import Liked from '../../pages/liked/Liked';
import { useEffect, useState } from 'react';
import type ToastData from '../../features/app_context/ToastData';
import { AppContext } from '../../features/app_context/AppContext';

export default function App() {
   const [toastQueue, setToastQueue] = useState<ToastData[]>([]);
 const [isSmallScreen, setIsSmallScreen] = useState(
        window.innerWidth <= 900
    );
    const showToast = (data: ToastData) => {
        setToastQueue(prev => [...prev, data]);

        setTimeout(() => {
            setToastQueue(prev => prev.slice(1));
        }, data.timeout ?? 3000);
    };
     useEffect(() => {
        const onResize = () => {
            setIsSmallScreen(window.innerWidth <= 900);
        };

        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);
 
 return <AppContext.Provider value ={{showToast, isSmallScreen }}>
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
             <div className="toaster">
            {toastQueue.map((td,i) => <div key ={i+td.message} className="toast-text">
                {td.message}
            </div>)}
        </div>
        </BrowserRouter>
        
    </AppContext.Provider>
}

