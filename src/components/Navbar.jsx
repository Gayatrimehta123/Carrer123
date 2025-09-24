import {Navbar_logo1,Navbar_logo2,Navbar_logo3,Navbar_logo4,Navbar_logo5,Navbar_logo6,Navbar_logo7,Navbar_logo8,Navbar_logo9,Navbar_logo10} from '../assets/Navbar_logos/logo_export.js';
import user from '../assets/user.svg';

function navbar() {
  return (
    <nav className="w-full flex justify-evenly py-6 bg-[#1d2126]">
      <div className="w-[10rem] "></div>
      <div className="flex">
        <ul className="flex gap-5">
          <li className="text-white px-4 border-gray-400 rounded shadow-md shadow-gray-600 p-4 hover:translate-x-0.5 hover:translate-y-0.5 ease-in-out cursor-pointer"><a href="#" className=''><img src={Navbar_logo1} /></a></li>
          <li className="text-white px-4 border-gray-400 rounded shadow-md shadow-gray-600 p-4 hover:translate-x-0.5 hover:translate-y-0.5 ease-in-out cursor-pointer"><a href="#"><img src={Navbar_logo2} /></a></li>
          <li className="text-white px-4 border-gray-400 rounded shadow-md shadow-gray-600 p-4 hover:translate-x-0.5 hover:translate-y-0.5 ease-in-out cursor-pointer"><a href="#"><img src={Navbar_logo3} /></a></li>
          <li className="text-white px-4 border-gray-400 rounded shadow-md shadow-gray-600 p-4 hover:translate-x-0.5 hover:translate-y-0.5 ease-in-out cursor-pointer"><a href="#"><img src={Navbar_logo4} /></a></li>
          <li className="text-white px-4 border-gray-400 rounded shadow-md shadow-gray-600 p-4 hover:translate-x-0.5 hover:translate-y-0.5 ease-in-out cursor-pointer"><a href="#"><img src={Navbar_logo5} /></a></li>
          <li className="text-white px-4 border-gray-400 rounded shadow-md shadow-gray-600 p-4 hover:translate-x-0.5 hover:translate-y-0.5 ease-in-out cursor-pointer"><a href="#"><img src={Navbar_logo6} /></a></li>
          <li className="text-white px-4 border-gray-400 rounded shadow-md shadow-gray-600 p-4 hover:translate-x-0.5 hover:translate-y-0.5 ease-in-out cursor-pointer"><a href="#"><img src={Navbar_logo7} /></a></li>
          <li className="text-white px-4 border-gray-400 rounded shadow-md shadow-gray-600 p-4 hover:translate-x-0.5 hover:translate-y-0.5 ease-in-out cursor-pointer"><a href="#"><img src={Navbar_logo8} /></a></li>
          <li className="ttext-white px-4 border-gray-400 rounded shadow-md shadow-gray-600 p-4 hover:translate-x-0.5 hover:translate-y-0.5 ease-in-out cursor-pointer"><a href="#"><img src={Navbar_logo9} /></a></li>
          <li className="text-white px-4 border-gray-400 rounded shadow-md shadow-gray-600 p-4 hover:translate-x-0.5 hover:translate-y-0.5 ease-in-out cursor-pointer"><a href="#"><img src={Navbar_logo10} /></a></li>
        </ul>
      </div>
      <div className='flex justify-center items-center gap-3'>
        <p className='text-white'>JOHN DOE</p>
        <img src={user} alt="user" className='h-8 w-8'/>
      </div>
    </nav>
  );
}

export default navbar;