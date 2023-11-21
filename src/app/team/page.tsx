import Navbar from '@/components/navbar';
import React from 'react';
import CardTeam from '@/components/cards/card-teams';
import Rafi from '@/assets/profile-teams/rafik.jpeg';
import Perdana from '@/assets/profile-teams/perdana.jpeg';
import Heri from '@/assets/profile-teams/heri.jpg';
import Abstrack from '@/assets/bg/abstrak.svg';

export default function Team() {
  const teams = [
    {
      name: 'Perdana Putro H',
      description: "I'am a Fullstack Web Developer and Mobile Developer with Flutter",
      image: Perdana,
      instagram: 'https://www.instagram.com/per.danaph',
      github: 'https://www.github.com.com/perdanaph',
      linkedIn: 'https://www.linkedin.com/in/perdana-putro-harwanto-1515a5245/',
    },
    {
      name: 'Heri Setyawan',
      description: "I'am a Fullstack Developer in website and mobile flutter developer.",
      image: Heri,
      instagram: 'https://www.instagram.com/herisetyawan233',
      github: 'https://www.github.com.com/herisetyawan123',
      linkedIn: 'https://www.linkedin.com/in/heri-setyawan',
    },
    {
      name: 'Muhammad Rafi K.',
      description: "I'am a Fullstack Web Developer esspecially with laravel and mobile developer with Flutter",
      image: Rafi,
      instagram: 'https://www.instagram.com/muhhmmad.rafii',
      github: 'https://www.github.com.com/rafikusdiarto',
      linkedIn: 'https://www.linkedin.com/in/muhammadrafikusdiarto',
    },
  ];
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
            {teams.map((item, index) => (
              <CardTeam key={index} name={item.name} description={item.description} image={item.image} github={item.github} instagram={item.instagram} linkedin={item.linkedIn} />
            ))}
          </section>
        </div>
      </main>
    </React.Fragment>
  );
}
