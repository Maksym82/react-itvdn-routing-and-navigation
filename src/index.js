import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Pages/Header/Header';
import Sidebar from './Pages/Sidebar/Sidebar';
import StateHooks from 'Pages/StateHookPage/StateHook';
import Welcome from './Pages/Welcome/Welcome';
import About from 'Pages/About/About';
import Community from 'Pages/Community/Community';
import Resources from 'Pages/Resources/Resources';
import ErrorPage from 'Pages/Error/Error';
import './global.css';

import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
    Outlet
} from 'react-router-dom';

const Root = () => {
    return (
      <div className="container">
            <Header />
            <Sidebar />
            <Outlet />
      </div>
    );
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={ <Root />}>
            <Route index element={<Welcome />} />
            <Route path='/statehooks' element={ <StateHooks /> } />
            <Route path='/community' element={<Community />} />
            <Route path='/resources' element={<Resources />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={ <ErrorPage />} />
        </Route>
    )
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
