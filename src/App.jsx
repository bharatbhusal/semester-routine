import React from 'react';
import Table from "./components/Table";
import NavBar from './components/Navbar';
import { Outlet } from 'react-router';
import "./App.css"

const App = () => {
    return (
        <div className='container flex flex-column space-between'>
            <NavBar />
            <Outlet />
        </div>
    );
};

export default App;
