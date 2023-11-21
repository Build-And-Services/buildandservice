
import Navbar from '@/components/navbar';
import React from 'react';

export default function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <React.Fragment>
      <Navbar/>
      <main className='w-[90%] sm:max-w-6xl mx-auto py-10'>

        <section>
          <h3 className='font-medium text-green-500 text-lg'>Recommended For You</h3>
          <h1 className='text-slate-600 font-bold text-3xl mt-2'>Pilih sesuai kebutuhan kalian.</h1>


         
          {/* <Carousel responsive={responsive}>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
          </Carousel> */}
        </section>

        <section className='bg-[#c8e7df] w-full rounded-sm'>
          <div className='w-[90%] sm:max-w-6xl mx-auto py-10'>
            <div className='text-center'>
              <h3 className='font-medium text-green-500 text-lg'>we shall never deny guest even the most ridiculous request.</h3>
              <h1 className='text-slate-600 font-bold text-3xl mt-2'>Our Service</h1>
            </div>
            <div className='mt-5 flex flex-wrap sm:justify-center sm:flex-row sm:gap-x-5 flex-col gap-y-5'>
      
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
