import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './home';

export const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/'>
                <Route index element={<Home />} />
                <Route path='*' element={<div>No page</div>} />
            </Route>
        </Routes>
    </BrowserRouter>
);
