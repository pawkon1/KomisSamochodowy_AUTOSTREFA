import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Layout } from './pages/layout/Layout.tsx';
import { Samochody } from './pages/oferta/SamochodyPage.tsx';
import { Finansowanie } from './pages/uslugi/FinansowaniePage.tsx';
import { Ubezpieczenie } from './pages/uslugi/UbezpieczeniePage.tsx';
import { Kontakt } from './pages/kontakt/KontaktPage.tsx';
import { Logowanie } from './pages/logowanie/LogowaniePage.tsx';
import { SkupAut } from './pages/skup/SkupAutPage.tsx';
import { Blog } from './pages/blog/BlogPage.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<App />} />
                </Route>
                <Route path='/Samochody' element={<Layout />}>
                    <Route index element={<Samochody />} />
                </Route>
                <Route path='/Finansowanie' element={<Layout />}>
                    <Route index element={<Finansowanie />} />
                </Route>
                <Route path='/Ubezpieczenie' element={<Layout />}>
                    <Route index element={<Ubezpieczenie />} />
                </Route>
                <Route path='/Kontakt' element={<Layout />}>
                    <Route index element={<Kontakt />} />
                </Route>
                <Route path='/Logowanie' element={<Layout />}>
                    <Route index element={<Logowanie />} />
                </Route>
                <Route path='/SkupAut' element={<Layout />}>
                    <Route index element={<SkupAut />} />
                </Route>
                <Route path='/Blog' element={<Layout />}>
                    <Route index element={<Blog />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);