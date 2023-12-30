import React, {useEffect} from 'react'
import HomePage from './pages/HomePage'
import ContentPage from './pages/ContentPage'
import Overflow from './components/contentpage/overflowMenu/Overflow';
import SearchPage from './pages/SearchPage';
import AccountPage from './pages/AccountPage'
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import AuthenticationPage from './pages/AuthenticationPage';

function App() {

  const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])
  
    return null
  };
  
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route index element={<div>HomePage</div>}/>
        <Route path="/auth" element={<AuthenticationPage/>}/>
        <Route path="/search" element={<SearchPage />}/>
        <Route path="/account" element={<AccountPage />}/>
        <Route path="/404" element={<div>Not Found</div>}/>
        <Route path="/:type" element={<HomePage />}/>
        <Route path="/:type/:id" element={<ContentPage />}/>
        <Route path="/:type/:id/:menu/:url" element={<Overflow />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App