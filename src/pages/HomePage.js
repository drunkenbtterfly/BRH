// src/pages/HomePage.js
import React from 'react';
import Layout from '../components/Layout';

const players = [
  {
    name: "DOTHRA",
    role: "Bang All Role"
  },
  {
    name: "NONAME",
    role: "Bang All Role"
  },
  {
    name: "drunkenBtterfly",
    role: "Sens"
  },
  {
    name: "Kyy (Pebol)",
    role: "Roamer Bekasi"
  }
];

const HomePage = () => {
  const text = ' Team BRH • '.repeat(100);
  return (
    <Layout>
      <div className="bg-black">
        <section className='flex justify-center items-center'>
            <img src="logoml.png" alt="" className='rounded-3xl' />
        </section>

        <section className='lg:px-40'>
        <h1 className='text-white text-start lg:text-center font-fredoka font-bold text-xl md:text-2xl pt-10 px-4'>Meet the Basir House</h1>
        <h1 className='text-white text-start lg:text-center font-fredoka font-bold text-xl md:text-2xl pt-5 px-4'>Welcome to BRH: Where Skill Meets Passion</h1>
          <h1 className='text-white text-start lg:text-center font-fredoka text-xl md:text-2xl pb-10 px-4'>
            At Basir House (BRH), we're more than just a team—we’re a family of dedicated gamers united by our passion for e-sports. From epic battles in the virtual arena to heart-pounding tournaments, we live and breathe competitive gaming. Every move we make is a step toward our goal: to rise as champions in the ever-evolving world of e-sports.
          </h1>
        </section>

        <section>
          <div className="marquee overflow-hidden whitespace-nowrap py-5 bg-white shadow-inset">
            <span className="inline-block animate-marquee font-bold text-4xl">{text}</span>
          </div>
        </section>

        <section className='lg:px-40'>
        <h1 className='text-white text-start lg:text-center font-fredoka font-bold text-xl md:text-2xl pt-5 px-4'>The Legends</h1>
          <h1 className='text-white text-start lg:text-center font-fredoka text-xl md:text-2xl pb-5 px-4'>
          Meet the legends who make it all happen. These are the faces behind the screens—the strategists, the marksmen, and the warriors who work together to dominate every match. Each member brings unique skills and an unstoppable drive to succeed.
          </h1>
          <div className="player-list">
            {players.map((player, index) => (
              <div key={index} className="player-card px-4">
                <h2 className='text-white'>{player.name}</h2>
                <p className='text-white pb-4'>Role: {player.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
