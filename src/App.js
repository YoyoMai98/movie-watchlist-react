import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import './lib/font-awesome/css/all.min.css';
import {Header} from './components/Header'
import {Watchlist} from './components/Watchlist'
import {Watched} from './components/Watched'
import {Add} from './components/Add'
import { GlobalProvider } from './context/GlobalState';
import { MovieDetail } from './components/Movie/MovieDetail';

export const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Watchlist/>}/>
          <Route exact path="/watched" element={<Watched />}/>
          <Route exact path="/add" element={<Add />}/>
          <Route path='/movie/:id' element={<MovieDetail />} />
        </Routes>
      </Router>
    </GlobalProvider>
  )
}