// src/pages/HomePage.js
import React from 'react';
import Layout from '../components/Layout';

const HomePage = () => {
  const text = ' Team BRH • '.repeat(100);
  return (
    <Layout>
      <div className="bg-black">
        <section className='flex flex-col lg:flex-row'>
          <div className='lg:w-1/3 px-10'>
            <img src="/brh.jpeg" alt="Logo" className='rounded-xl' />
          </div>

          <div className='lg:w-2/3 mx-10'>
            <h1 className='text-white font-fredoka text-4xl'>Benih kecil yang tumbuh menjadi pohon besar. Perjalanan
              kami dimulai dari klan StarCraft pada tahun 2000 dan kini
              berkembang menjadi tim yang telah memenangkan banyak
              kejuaraan. Namun, visi kami tidak berubah: selalu menjadi
              wadah komunitas bagi orang-orang yang mencintai Esports.
            </h1>
          </div>
        </section>

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
        </section>

        <section>
          <div className="marquee overflow-hidden whitespace-nowrap py-5 bg-white shadow-inset">
            <span className="inline-block animate-marquee font-bold text-4xl">{text}</span>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
