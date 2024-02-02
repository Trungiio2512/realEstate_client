// import React from "react";
import banner from '../../assets/banner.png';

const Home = () => {
    return (
        <div className="bg-white w-full">
            <figure className="max-w-full h-fit relative">
                {/* <img src={banner} alt="" className="w-full h-full object-cover" /> */}
                {/* <div
          className=""
          style={{ background: `url(${banner}) top center / cover no-repeat`, paddingTop: "50%" }}></div> */}
                <div
                    className="absolute inset-0 "
                    style={{ backgroundColor: 'rgba(6,48,83,0.6)' }}
                ></div>
                <div
                    style={{
                        backgroundImage: `url(${banner})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        paddingTop: '38%',
                    }}
                ></div>
                <div className="absolute capitalize inset-0 z-1 flex flex-col items-center justify-center bg-transparent">
                    <h1 className="text-4xl text-white font-medium mb-6">
                        find your dream home
                    </h1>
                    <p className="max-w-[600px] text-gray-300 text-center">
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                        posuere cubilia curae; Proin sodales ultrices nulla blandit
                        volutpat.
                    </p>
                </div>
            </figure>
            <div className="w-main">content</div>
        </div>
    );
};

Home.propTypes = {};

export default Home;
