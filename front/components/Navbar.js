/* This example requires Tailwind CSS v2.0+ */
import Link from 'next/link'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'



const navigation = [
  { name: 'Directory', href: '/directory' },
  { name: 'Stores', href: '/stores' },
  { name: 'Marketplace', href: '/products' },
  // { name: 'Company', href: '#' },
]

export default function NavbarTop() {
  return (
    // <div className="container mx-auto flex flex-wrap p-5 flex-col sm:flex-row md:flex-row items-center">

    //   <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
    //     <Link href='/'>
    //       <a className="mr-5 hover:text-gray-500">Home</a>
    //     </Link>
    //     <Link href='/about'>
    //       <a className="mr-5 hover:text-gray-500">About</a>
    //     </Link>
    //     <Link href='/store'>
    //       <a className="mr-5 hover:text-gray-500">Store</a>
    //     </Link>
    //   </nav>

    //   <Link href='/'>
    //     <a className="flex order-first lg:order-none lg:w-1/5 items-center lg:items-center lg:justify-center mb-4 md:mb-0">
    //       <img src='/logo.png' width={50} height={50} alt='Ohi' />
    //     </a>
    //   </Link>        
    //   <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
    //     <Link href='/login'>
    //       <a className="inline-flex items-center hover:bg-green-600 border-0 py-2 px-3 rounded text-base mt-4 md:mt-0">
    //         Sign up
    //       </a>
    //     </Link>
    //     <Link href='/login'>
    //       <a className="inline-flex items-center bg-green-400 hover:bg-green-600 border-0 py-2 px-3 rounded text-base mt-4 md:mt-0">
    //         Login
    //       </a>
    //     </Link>

    //     </div>
    //   </div>

    <Popover>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative flex items-center justify-between sm:h-10" aria-label="Global">
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="/">
                <span className="sr-only">Ohi!</span>
                <img src='/logo.png' width={50} height={50} alt='Ohi!' />
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
           <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Sign in
            </a>
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700"
            >
              Sign up
            </a>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src="/logo.png"
                  alt="Ohi!"
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close main menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <a
              href="#"
              className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
            >
              Sign up
            </a>
            <a
              href="#"
              className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
            >
              Sign in
            </a>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

