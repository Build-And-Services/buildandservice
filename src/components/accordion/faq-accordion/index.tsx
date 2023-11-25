'use client'
import { useId } from 'react';
import { FaAngleDown } from 'react-icons/fa';
export default function FaqAccordion() {
  const id = useId()

  const openTab = () => {
    const logoDown = document.getElementById("logo-down-"+id);
    const answerDown = document.getElementById("answer-faq-"+id)
    logoDown?.classList.toggle('rotate-180')
    answerDown?.classList.toggle('hidden')
  }

  return (
    <div className="border px-5 py-3 rounded-md bg-white space-y-8 transition-all duration-500" onClick={() => openTab()}>
      {/* question */}
      <div className='flex gap-x-10 items-center'>
        <div className="flex justify-center items-center h-14 w-14 rounded-lg bg-green-100">
          <FaAngleDown id={`logo-down-${id}`} className="text-green-800 text-3xl transition-all duration-500" />
        </div>
        <h5 className='font-bold text-lg '>Apakah itu build and service ?</h5>
      </div>

        <p 
          id={`answer-faq-${id}`} 
          className='pb-5 hidden text-slate-700 transition-all duration-500'>
        Build And Service atau BaS adalah sebuah platform yang melayani jasa tentang IT khususnya programming disini juga menjual berbagai sourcecode, melayani pembuatana software kecil maupun besar dan sebagainya
        </p>
      
    </div>
  )
}