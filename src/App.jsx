import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Banner from './components/Banner';
import Movielist from './components/Movielist';
import Watchlist from './components/Watchlist';


function App() {

  return (
    <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<><Banner/> <Movielist/></>}/>
    <Route path='/watchlist' element={<Watchlist/>} />
  </Routes>
  </BrowserRouter>

    </>
  )
}

export default App
