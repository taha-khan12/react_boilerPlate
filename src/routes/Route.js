import React, { createContext } from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import RouteSwitch from './RouteSwitch';
import Home from '../views/Home'
import NotFound from '../views/NotFound'

export const UserContext = createContext()

export default function AppRoute() {

    return (
        <div>
            <Router>
                <RouteSwitch>
                    <Route exact path="/" element={<Home/>}></Route>
                    <Route exact path="*" element={<NotFound/>}></Route>
                </RouteSwitch>        
            </Router>
        </div>
    )
}