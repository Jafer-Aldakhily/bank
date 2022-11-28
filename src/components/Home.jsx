import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import {Route,Routes,Link} from 'react-router-dom';
export default function Home() {
  return (
    <div>
      <Header />
      <Routes>
        <Route element={Main} path="/" />
      </Routes>
      <Footer />
    </div>
  )
}
