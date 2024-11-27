import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import Home from './components/pages/Home';
import AboutProducts from './components/pages/AboutProducts';
import Vacancies from './components/pages/Vacancies';
import Testimonials from './components/pages/Testimonials';
import MapPage from './components/pages/MapPage';
import CookieConsent from './components/ui/CookieConsent';
import FloatingButton from './components/ui/FloatingButton';
import Contact from "./components/pages/Contact"; // Кнопка Telegram

const App: React.FC = () => {
    return (
        <ParallaxProvider>
            <Router>
                <Navbar />
                <CookieConsent />
                <div className="pt-16"> {/* Отступ для фиксации Navbar */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutProducts />} />
                        <Route path="/vacancies" element={<Vacancies />} />
                        <Route path="/testimonials" element={<Testimonials />} />
                        <Route path="/map" element={<MapPage />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
                <Footer />
                <FloatingButton /> {/* Кнопка Telegram */}
            </Router>
        </ParallaxProvider>
    );
};

export default App;
