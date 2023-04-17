import React from 'react';
import { Outlet } from "react-router-dom";
import Header from '../Header/Header';

const Main = () => {
    return (
        <div className='App'>
            <Header />
           <div style={{width:'100%', margin:'0 auto'}}>
           <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Main;