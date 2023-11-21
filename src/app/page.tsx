
import CardSource from '@/components/cards/card-source';
import Navbar from '@/components/navbar';
import React from 'react';
import WebDesign from "@/assets/img/web.png"
import Mobile from "@/assets/img/mobile.png"
import Source from "@/assets/img/source.png"
import CardService from '@/components/cards/card-service';

export default function Home() {
  return (
    <React.Fragment>
      <Navbar/>
      <main className='w-[90%] sm:max-w-6xl mx-auto py-10'>

        <section className='mb-20'>
          <h3 className='font-medium text-green-500 text-lg'>Recommended For You</h3>
          <h1 className='text-slate-600 font-bold text-3xl mt-2'>Pilih sesuai kebutuhan kalian.</h1>
          <div className='flex gap-x-3 flex-wrap mt-10 gap-y-10 justify-center sm:justify-start'>
            <CardSource title='Source E-commerce fullstack javascript' link='/' price='500.000' />
            <CardSource title='Source E-commerce fullstack javascript' link='/' price='500.000' />
            <CardSource title='Source E-commerce fullstack javascript' link='/' price='500.000' />
            {/* <CardSource title='Source E-commerce fullstack javascript' link='/' price='500.000' /> */}
          </div>
         
        </section>

        <section className='bg-[#c8e7df] w-full rounded-sm mb-20'>
          <div className='w-[90%] sm:max-w-6xl mx-auto py-10'>
            <div className='text-center'>
              <h3 className='font-medium text-green-500 text-lg'>we shall never deny guest even the most ridiculous request.</h3>
              <h1 className='text-slate-600 font-bold text-3xl mt-2'>Our Service</h1>
            </div>
            <div className='mt-5 flex flex-wrap sm:justify-center sm:flex-row sm:gap-x-5 flex-col gap-y-5'>
              <CardService image={WebDesign} title="Web Developer" deskripsi='Build and Service menyediakan layanan pembuatan dan perbaikan website, kami menguasai php, js, go, html dan css. Framework yang kita pakai adalah laravel,next js, react js, express, tailwind, bootstrap, dll' />
              <CardService image={Mobile} title="Android Developer" deskripsi='Build and Service menyediakan layanan pembuatan dan perbaikan aplikasi mobile kami menggunakan framework flutter dalam penyelesainnya' />
              <CardService image={Source} title="Source Coding" deskripsi='Build And Service juga menjual berbagai source code yang dapat kalian pelajari atau sebagai bahan pembuatan project kalian.' />
            </div>
          </div>
        </section>

        <div className=''>
          <div>
            <h3 className='font-medium text-green-500 text-lg'>Info lebih lanjut</h3>
            <h1 className='text-slate-600 font-bold text-3xl mt-2'>Frequently Asked Questions</h1>
          </div>
          <div className='mt-10 space-y-5 '>
            {/* <FaQPart /> */}
          </div>
        </div>

      </main>
    </React.Fragment>
  )
}
