import Link from 'next/link';
import Image from 'next/legacy/image';
import Logo from '@/assets/logo.png';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className='w-full h-20 sticky top-0 backdrop-blur-sm bg-white/90 z-40'>
      <nav className='w-[90%] sm:max-w-6xl mx-auto flex h-full items-center font-medium justify-between'>
        <Image src={Logo} objectFit={'cover'} height={48} width={68} alt='alt' />
        <div className='flex items-center'>
          <div className='ml-20 space-x-20 hidden lg:block '>
            <Link href={'/'} className={`hover:text-green-800 ${pathname == '/' ? 'text-green-600' : ''}`}>Home</Link>
            <Link href={'/service'} className={`hover:text-green-800 ${pathname == '/service' ? 'text-green-600' : ''}`}>Service</Link>
            <Link href={'/team'} className={`hover:text-green-800 ${pathname == '/team' ? 'text-green-600' : ''}`}>Our Teams</Link>
          </div>
        </div>
        <div>
          <Link href='/formulir' className='py-2 px-5 text-white bg-green-600 hover:bg-green-800 rounded-md'>
            Request Project
          </Link>
        </div>
      </nav>
    </header>
  );
}
