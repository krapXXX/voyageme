import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/home/Home';
import Deals from '../pages/deals/Deals';
import About from '../pages/about/About';
import Product from '../pages/product/Product';
import Testimonials from '../pages/testimonials/Testimonials';
import Contacts from '../pages/contacts/Contacts';
import Liked from '../pages/liked/Liked';
import { useEffect, useState } from 'react';
import type ToastData from '../features/app_context/ToastData';
import { AppContext } from '../features/app_context/AppContext';
import "./ui/App.css";
import Error from '../pages/error/Error';
import type { UserType } from '../entities/user/model/UserType';
import type LikeType from '../entities/like/model/LikeType';
import LikeDao from '../entities/like/api/LikeDao';
import Auth from '../pages/auth/Auth';

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
    const[isBusy, setBusy] = useState<boolean>(false);
    const [user, setUser] = useState<UserType | null>(null);
    const [like, setLike] = useState<LikeType>(LikeDao.restoreSaved());
 useEffect(() => {
        const savedUser = window.localStorage.getItem("user-231");
        if (savedUser) {
            try {
                setUser(JSON.parse(savedUser))
            }
            catch (err) {
                console.error("User restore error: ", err);
            }
        }
        return () => {
            console.log("App finished");
        };
    }, []);
 return <AppContext.Provider value ={{ isBusy, setBusy, user, setUser, showToast, like, setLike, isSmallScreen  }}>

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path='home' element={<Home />} />
                    <Route path='error' element={<Error />} />
                    <Route path='about' element={<About/>} />
                    <Route path='deals' element={<Deals />} />
                    <Route path="/product/:slug" element={<Product />} />
                    {/* <Route path='testimonials' element={<Testimonials />} />
                    <Route path='contacts' element={<Contacts />} /> */}
                    <Route path='like' element={<Liked />} />
                    <Route path='profile' element={<Auth />} />

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

