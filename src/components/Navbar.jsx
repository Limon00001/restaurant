/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 2025-02-05
 * @copyright 2025 monayem_hossain_limon
 */

// External Dependencies
import { useState } from 'react';
import { BsCartPlus } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';
import { TfiClose, TfiMenu } from 'react-icons/tfi';

// Internal Dependencies
import { NavbarItems } from '../constants/data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-lg border-b border-neutral-600/20">
      <div className="container max-w-7xl mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => window.location.replace('/')}
          >
            <h1 className="text-2xl font-semibold">Foodie </h1>
            <span className="mt-2 text-green-700">
              <GoDotFill />
            </span>
          </div>
          {/* Nav Items */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-4">
              {NavbarItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="text-lg font-medium hover:text-red-900"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Cart & Hamburger */}
          <div className="flex items-center gap-8">
            <button className="text-lg cursor-pointer rounded-full bg-green-800 hover:bg-black text-white p-2 transition-colors">
              <BsCartPlus />
            </button>
            <button
              className="text-xl cursor-pointer md:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? <TfiClose /> : <TfiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } fixed w-full transition-all backdrop-blur-lg duration-500 ease-in-out`}
        >
          <ul className="flex flex-col items-center gap-3 mt-9 bg-white py-10 m-44 rounded-3xl">
            {NavbarItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="text-lg font-medium hover:text-green-700 transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
