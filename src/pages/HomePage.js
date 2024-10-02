// src/pages/HomePage.js
import React from 'react';
import Layout from '../components/Layout';

const HomePage = () => {
  return (
    <Layout>
      <div className="bg-black">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold text-white">Masi bingung yagesya</h1>
        </div>

        <section className='px-20'>
          <div className='h-40 bg-white rounded-3xl'>
            
          </div>
        </section>

        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4 text-center text-white">Test</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-80"
                src="https://www.youtube.com/embed/yFEcppr--yc"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
