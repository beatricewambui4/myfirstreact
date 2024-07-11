import React,{ Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { appLinks } from "./Links";
import Navbar from '../layout/Navbar';
import About from '../pages/About';
import Footer from '../layout/Footer';



const Landing = React.lazy(() => import("../pages/Landing"));
const Dashboard = React.lazy(() => import("../pages/Dashboard"));
const Contact = React.lazy(() => import("../pages/Contact"));
const about = React.lazy(() => import("../pages/About"));


function BaseRouter() {
  return (
    <div>
      <Router>
      <Suspense fallback ={<div>Loading.....</div>}>
      <Navbar/>
      <Routes>
          <Route exact path={appLinks?.Landing} element={<Landing />} />
          <Route  path={appLinks?.Dashboard} element={<Dashboard />} />
          <Route  path={appLinks?.Contact} element={<Contact />} />
          <Route  path={appLinks?.About} element={< About/>} />
      </Routes>

        <Footer/>
      </Suspense>
      </Router>
    </div>
  )
}

export default  BaseRouter
