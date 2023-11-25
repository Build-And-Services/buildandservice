import React from 'react';
import teamData from '@/data/static/team';
import Navbar from '@/components/navbar';
import CardTeam from '@/components/cards/card-teams';
import Abstrack from '@/assets/bg/abstrak.svg';

export default function Team() {
  return (
    <React.Fragment>
      <Navbar />
      <main className='w-full' style={{ backgroundImage: `url(${Abstrack.src})` }}>
        <div className='max-w-6xl mx-auto py-10'>
          <section>
            <h3 className='font-bold text-green-500 text-3xl'>Our Teams</h3>
            <h1 className='text-gray-500 mt-2 '>In Developing this platform, we need a team to help some issue and fixing it.</h1>
          </section>
          <section className='mt-10 flex sm:gap-x-10 flex-col sm:flex-row gap-y-10 text-center'>
            {teamData.map((item, index) => (
              <CardTeam key={index} name={item.name} description={item.description} image={item.image} github={item.github} instagram={item.instagram} linkedin={item.linkedin} />
            ))}
          </section>
        </div>
      </main>
    </React.Fragment>
  );
}
