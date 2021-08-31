import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from '../commonComponents/foooter/Footer'
import Header from '../commonComponents/header/Header'
import About from '../components/About'
import LandingPage from '../Pages/LandingPage'
import Login from '../modules/auth/login/Login'
import Signup from '../modules/auth/signup/Signup'
import Home from '../modules/home/Home'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import { useSelector } from "react-redux"
import ResDetail from '../modules/resturants/ResDetail'
function Navigation() {
    const isLogin = useSelector(store => store.AuthReducers.isLogin)
    //  const auth = false
    return (
        <Router>
            <Header/>
            <Switch>
            <Route exact path = '/'>
                <LandingPage />
            </Route>
            
    
            <PublicRoute path = "/login" isLogin={isLogin}>
                <Login />
            </PublicRoute>
            <Route path = '/signup'>
                <Signup />
            </Route>
           
           {/* Protected rout */}
            <PrivateRoute path = '/home' isLogin={isLogin}>
                <Home />
            </PrivateRoute>
            <PrivateRoute path = '/resdetail/:id' isLogin={isLogin}>
                <ResDetail />
            </PrivateRoute>
            <Route path = '/about'>
                <About />
            </Route>
            </Switch>
            <Footer/>

        </Router>
    )
}

export default Navigation
