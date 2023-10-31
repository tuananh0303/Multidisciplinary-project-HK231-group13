import * as React from 'react';
import Signup from './page/Signup';
import Login from './page/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
