import CardServiceProps from "@/data/interfaces/props/card-service";
import Image from "next/legacy/image";
import Link from "next/link";

const CardService = ({ title, image, deskripsi }: CardServiceProps) => {
  return (
    <div className='bg-white p-10 rounded-xl w-80 flex flex-col gap-y-5 justify-center items-center shadow-md hover:shadow-xl duration-500'>
      <div className="w-56 h-56 relative">
        <Image src={image} alt="" />
      </div>
      <div className="mt-5 text-center w-full">
        <h1 className="font-bold text-2xl text-green-600">{ title }</h1>
        <p className="mt-5 text-gray-700">
          { deskripsi }
        </p>
      </div>
      <div className="w-full flex flex-col">
        <Link href={'/'} className="w-full text-center bg-green-600 hover:bg-green-800 text-white rounded-md py-2">More</Link>
      </div>
    </div>
  )
}

export default CardService;