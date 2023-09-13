import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Appointment from '../components/Appointment/Appointment';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/Appointment',
                element: <Appointment></Appointment>
            }
        ]
    }
])

export default router;