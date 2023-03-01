import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import New from './New'
import Details from './Details'
import Search from './Search'

const Main = () => {
    return (
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/pokemon/:id" element={<Details />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </main>
    )
  

}

export default Main;

