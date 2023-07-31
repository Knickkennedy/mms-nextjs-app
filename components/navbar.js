import Image from "next/image";
import Logo from '../public/mms.png';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="#" className="flex items-center py-1 px-2">
                <Image
                  src={Logo}
                  alt="M&Ms"
                  className="h-16 w-32 mr-2"
                />
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <a
                href=""
                className="py-1 px-2 text-2xl text-mm-brown font-semibold hover:text-green-500 transition duration-300"
              >Shop</a
              >
              <a
                href=""
                className="py-1 px-2 text-2xl text-mm-brown font-semibold hover:text-green-500 transition duration-300"
              >Celebrate</a
              >
              <a
                href=""
                className="py-1 px-2 text-2xl text-mm-brown font-semibold hover:text-green-500 transition duration-300"
              >Explore</a
              >
              <a
                href=""
                className="py-1 px-2 text-2xl text-mm-brown font-semibold hover:text-green-500 transition duration-300"
              >Business</a
              >
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
