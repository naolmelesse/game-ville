import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="bg-[url('/bg1.jpg')] aspect-video bg-cover bg-center mb-10 text-black h-[80vh] w-screen">
        <div className="flex flex-col justify-center text-[#fff] items-center h-full">
            <h1 className="text-[5rem] font-bold mb-4">Welcome to GameVille</h1>
            <p className="text-2xl font-light">Discover the world of gaming.</p>
        </div>
    </div>
  );
};

export default Banner;
