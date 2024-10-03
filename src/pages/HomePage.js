// src/pages/HomePage.js
import React from 'react';
import Layout from '../components/Layout';

const HomePage = () => {
  const text = ' Team BRH • '.repeat(100);
  return (
    <Layout>
      <div className="bg-black">
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4 text-center text-white">Test</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-96 rounded-xl"
                src="https://www.youtube.com/embed/yFEcppr--yc"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="marquee overflow-hidden whitespace-nowrap py-5">
            <span className="inline-block animate-marquee text-white font-bold text-4xl">{text}</span>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
