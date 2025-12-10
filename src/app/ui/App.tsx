import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../../layout/Layout';
import Home from '../../pages/home/Home';

export default function App() {
  return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path='home' element={<Home />} />

                </Route>
            </Routes>
        </BrowserRouter>
        </>
}

