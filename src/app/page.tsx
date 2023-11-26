'use client';
import React, { useEffect } from 'react';
import Image from 'next/legacy/image';
import Marquee from 'react-fast-marquee';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CardSource from '@/components/cards/card-source';
import Navbar from '@/components/navbar';
import CardService from '@/components/cards/card-service';
import FaqAccordion from '@/components/accordion/faq-accordion';
import Footer from '@/components/footer';
import WebDesign from '@/assets/img/web.png';
import Mobile from '@/assets/img/mobile.png';
import Source from '@/assets/img/source.png';
import Abstrak from '@/assets/bg/abstrak.svg';
import ContactUs from '@/components/sections/contact-us';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      <main className='pb-28'>
        <section className='mb-20 w-[90%] sm:max-w-6xl mx-auto py-10' data-aos='fade-up'>
          <h3 className='font-medium text-green-500 text-lg'>Recommended For You</h3>
          <h1 className='text-slate-600 font-bold text-3xl mt-2'>Pilih sesuai kebutuhan kalian.</h1>
          <div className='flex gap-x-3 flex-wrap mt-10 gap-y-10 justify-center sm:justify-start'>
            <CardSource title='Source E-commerce fullstack javascript' link='/' price='500.000' />
            <CardSource title='Source E-commerce fullstack javascript' link='/' price='500.000' />
            <CardSource title='Source E-commerce fullstack javascript' link='/' price='500.000' />
            {/* <CardSource title='Source E-commerce fullstack javascript' link='/' price='500.000' /> */}
          </div>
        </section>

        <section className='bg-[#C8FFE0] w-full rounded-sm mb-20 mx-auto py-10' data-aos='fade-up' style={{ backgroundImage: `url(${Abstrak.src})` }}>
          <div className='w-[90%] sm:max-w-6xl mx-auto py-10'>
            <div className='text-center'>
              <h3 className='font-medium text-green-500 text-lg'>we shall never deny guest even the most ridiculous request.</h3>
              <h1 className='text-slate-600 font-bold text-3xl mt-2'>Our Service</h1>
            </div>
            <div className='mt-5 flex flex-wrap sm:justify-center sm:flex-row sm:gap-x-5 flex-col gap-y-5'>
              <CardService image={WebDesign} title='Web Developer' />
              <CardService image={Mobile} title='Android Developer' />
              <CardService image={Source} title='Source Coding' />
            </div>
          </div>
        </section>

        <section className='mt-[180px]'>
          <div className='text-center'>
            <h3 className='font-medium text-green-500 text-lg'>Selected based on specific needs and scale of the project.</h3>
            <h1 className='text-slate-600 font-bold text-3xl mt-2'>Our Tech Stack</h1>
          </div>

          <Marquee pauseOnHover direction='right' className='mt-[30px] py-[30px]'>
            <div className='mr-20 w-[300px]'>
              <a href='#' className='py-[13px] px-9 w-full bg-white shadow-md border-2 border-white hover:text-blue-500 hover:border-solid hover:border-2 hover:border-green-500  rounded-lg inline-flex items-center '>
                <Image src='https://buildwithangga.com/themes/front/images/logo/vue-logomark.svg' width={80} height={80} alt='vue' />
                <div className='text-left rtl:text-right ml-5'>
                  <div className='-mt-1 font-sans text-gray-700 text-xl font-bold'>Vue</div>
                  <div className='mb-1 text-xs text-gray-700'>Front-End Development</div>
                </div>
              </a>
            </div>
            <div className='mr-20 w-[300px]'>
              <a href='#' className='py-[13px] px-9 w-full bg-white shadow-md border-2 border-white hover:text-blue-500 hover:border-solid hover:border-2 hover:border-green-500  rounded-lg inline-flex items-center '>
                <Image src='https://buildwithangga.com/themes/front/images/logo/laravel.svg' width={80} height={80} alt='laravel' />
                <div className='text-left rtl:text-right ml-5'>
                  <div className='-mt-1 font-sans text-gray-700 text-xl font-bold'>Laravel</div>
                  <div className='mb-1 text-xs text-gray-700'>Back-End Development</div>
                </div>
              </a>
            </div>
            <div className='mr-20 w-[300px]'>
              <a href='#' className='py-[13px] px-9 w-full bg-white shadow-md border-2 border-white over:text-blue-500 hover:border-solid hover:border-2 hover:border-green-500  rounded-lg inline-flex items-center '>
                <Image src='https://buildwithangga.com/themes/front/images/logo/python-logomark.svg' width={80} height={80} alt='laravel' />
                <div className='text-left rtl:text-right ml-5'>
                  <div className='-mt-1 font-sans text-gray-700 text-xl font-bold'>Python</div>
                  <div className='mb-1 text-xs text-gray-700'>Data Science</div>
                </div>
              </a>
            </div>
            <div className='mr-20 w-[300px]'>
              <a href='#' className='py-[13px] px-9 w-full bg-white shadow-md border-2 border-white hover:text-blue-500 hover:border-solid hover:border-2 hover:border-green-500  rounded-lg inline-flex items-center '>
                <Image src='https://buildwithangga.com/themes/front/images/logo/flutter.svg' width={80} height={80} className='max-w-[70px] max-h-[70px]' alt='laravel' />
                <div className='text-left rtl:text-right ml-5'>
                  <div className='-mt-1 font-sans text-gray-700 text-xl font-bold'>Flutter</div>
                  <div className='mb-1 text-xs text-gray-700'>Mobile Development</div>
                </div>
              </a>
            </div>
            <div className='mr-20 w-[300px]'>
              <a href='#' className='py-[13px] px-9 w-full bg-white shadow-md border-2 border-white hover:text-blue-500 hover:border-solid hover:border-2 hover:border-green-500  rounded-lg inline-flex items-center '>
                <Image src='https://buildwithangga.com/themes/front/images/logo/flutter.svg' width={80} height={80} className='max-w-[70px] max-h-[70px]' alt='laravel' />
                <div className='text-left rtl:text-right ml-5'>
                  <div className='-mt-1 font-sans text-gray-700 text-xl font-bold'>Flutter</div>
                  <div className='mb-1 text-xs text-gray-700'>Mobile Development</div>
                </div>
              </a>
            </div>
          </Marquee>

          <Marquee pauseOnHover className='mb-[150px] py-[40px]'>
            <div className='mr-20 w-[300px]'>
              <a href='#' className='py-[13px] px-9 w-full bg-white shadow-md border-2 border-white hover:text-blue-500 hover:border-solid hover:border-2 hover:border-green-500  rounded-lg inline-flex items-center '>
                <Image src='https://buildwithangga.com/themes/front/images/logo/vue-logomark.svg' width={80} height={80} alt='vue' />
                <div className='text-left rtl:text-right ml-5'>
                  <div className='-mt-1 font-sans text-gray-700 text-xl font-bold'>Vue</div>
                  <div className='mb-1 text-xs text-gray-700'>Front-End Development</div>
                </div>
              </a>
            </div>
            <div className='mr-20 w-[300px]'>
              <a href='#' className='py-[13px] px-9 w-full bg-white shadow-md border-2 border-white hover:text-blue-500 hover:border-solid hover:border-2 hover:border-green-500  rounded-lg inline-flex items-center '>
                <Image src='https://buildwithangga.com/themes/front/images/logo/laravel.svg' width={80} height={80} alt='laravel' />
                <div className='text-left rtl:text-right ml-5'>
                  <div className='-mt-1 font-sans text-gray-700 text-xl font-bold'>Laravel</div>
                  <div className='mb-1 text-xs text-gray-700'>Back-End Development</div>
                </div>
              </a>
            </div>
            <div className='mr-20 w-[300px]'>
              <a href='#' className='py-[13px] px-9 w-full bg-white shadow-md border-2 border-white over:text-blue-500 hover:border-solid hover:border-2 hover:border-green-500  rounded-lg inline-flex items-center '>
                <Image src='https://buildwithangga.com/themes/front/images/logo/python-logomark.svg' width={80} height={80} alt='laravel' />
                <div className='text-left rtl:text-right ml-5'>
                  <div className='-mt-1 font-sans text-gray-700 text-xl font-bold'>Python</div>
                  <div className='mb-1 text-xs text-gray-700'>Data Science</div>
                </div>
              </a>
            </div>
            <div className='mr-20 w-[300px]'>
              <a href='#' className='py-[13px] px-9 w-full bg-white shadow-md border-2 border-white hover:text-blue-500 hover:border-solid hover:border-2 hover:border-green-500  rounded-lg inline-flex items-center '>
                <Image src='https://buildwithangga.com/themes/front/images/logo/flutter.svg' width={80} height={80} className='max-w-[70px] max-h-[70px]' alt='laravel' />
                <div className='text-left rtl:text-right ml-5'>
                  <div className='-mt-1 font-sans text-gray-700 text-xl font-bold'>Flutter</div>
                  <div className='mb-1 text-xs text-gray-700'>Mobile Development</div>
                </div>
              </a>
            </div>
            <div className='mr-20 w-[300px]'>
              <a href='#' className='py-[13px] px-9 w-full bg-white shadow-md border-2 border-white hover:text-blue-500 hover:border-solid hover:border-2 hover:border-green-500  rounded-lg inline-flex items-center '>
                <Image src='https://buildwithangga.com/themes/front/images/logo/flutter.svg' width={80} height={80} className='max-w-[70px] max-h-[70px]' alt='laravel' />
                <div className='text-left rtl:text-right ml-5'>
                  <div className='-mt-1 font-sans text-gray-700 text-xl font-bold'>Flutter</div>
                  <div className='mb-1 text-xs text-gray-700'>Mobile Development</div>
                </div>
              </a>
            </div>
          </Marquee>
        </section>

        <section className='w-[90%] sm:max-w-6xl mx-auto mb-[100px]'>
          <div data-aos='zoom-in'>
            <h3 className='font-medium text-green-500 text-lg'>Info lebih lanjut</h3>
            <h1 className='text-slate-600 font-bold text-3xl mt-2'>Frequently Asked Questions</h1>
          </div>
          <div className='mt-10 space-y-5'>
            <FaqAccordion />
            <FaqAccordion />
            <FaqAccordion />
          </div>
        </section>
        <ContactUs />
      </main>
      <Footer />
    </React.Fragment>
  );
}
