// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import path from '@/utils/path';
import { AboutUs, Home, Layout, OurAgent, Properties, Search } from '@/pages/public';
function App() {
    return (
        <div className="h-screen w-screen overflow-hidden">
            <Routes>
                <Route path={path.PUBLIC} element={<Layout />}>
                    <Route path={path.HOME} element={<Home />} />
                    <Route path={path.OUR_AGENTS} element={<OurAgent />} />
                    <Route path={path.SEARCH} element={<Search />} />
                    <Route path={path.PROPERTIES} element={<Properties />} />
                    <Route path={path.ABOUT_US} element={<AboutUs />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
