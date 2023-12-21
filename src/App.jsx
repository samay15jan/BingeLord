import React, {useEffect} from 'react'
import HomePage from './pages/HomePage'
import ContentPage from './pages/ContentPage'
import Overflow from './components/contentpage/overflowMenu/Overflow';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

function App() {

  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };
  
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route index element={<HomePage />}/>
        <Route path="/:type/:id" element={<ContentPage />}/>
        <Route path="/:type/:id/:menu/:url" element={<Overflow />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App