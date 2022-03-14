import React from 'react';
import { Routes,Route } from 'react-router';
import { Home } from './Pages/Home';
import Register from './Pages/Register'; 
import {Login} from './Pages/Login'; 
import {Patrika} from './Pages/Patrika'
import { Samajvistar } from './Pages/Samajvistar';
const Router = () =>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/patrika" element={<Patrika/>} />
            <Route path="/samajvistar" element={<Samajvistar/>} />
            {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
        </>
    )
}
export default Router;