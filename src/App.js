import logo from './logo.svg';
import './App.css';
import CommonCss from './Modules/CSS/common.module.css';

import Header from './Components/Parts/Header';
import Footer from './Components/Parts/Footer';

import Top from './Components/Pages/Top';
import Work01 from './Components/Pages/Work01';
import NotFound from './Components/Pages/NotFound';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
    <>
        <BrowserRouter>
            <Header />
            <div id={CommonCss.wrap}>
                <Routes>
                    <Route path="/" element={<Top />} />
                    <Route path="/work01" element={<Work01 />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    </>
    );
}

export default App;
