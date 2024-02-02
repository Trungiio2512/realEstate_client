/* eslint-disable react/prop-types */
// import React from "react";
import { Navigation, TopHeader } from '@/components';
import WithRoute from '@/hocs/withRoute';
import clsx from 'clsx';
import { Outlet } from 'react-router-dom';

const Layout = WithRoute(({ location }) => {
    console.log(location?.pathname);
    return (
        <main className="w-full h-full">
            <TopHeader />
            <Navigation />
            <div className={clsx(location?.pathname === '/' ? '' : 'pt-[120px]')}>
                <Outlet />
            </div>
        </main>
    );
});

export default Layout;
