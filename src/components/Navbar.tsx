import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', to: '/', current: true },
  { name: 'Products', to: '/products', current: false },
  { name: 'Blog', to: '/blog', current: false },
  { name: 'About Us', to: '/about', current: false }
]

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <Disclosure as="div" className="py-2">
          {({ open, close }) => (
            <>
              <div className="flex items-center justify-between h-20">
                <div className="flex items-center">
                  <Link to="/" className="flex items-center" onClick={() => close()}>
                    <img
                      src="/images/canmax.png"
                      alt="CanmaxIndia"
                      className="h-16 w-auto"
                    />
                  </Link>
                </div>
                
                <div className="hidden md:flex items-center space-x-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="px-4 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-300"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    to="/contact"
                    className="ml-6 px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all duration-300"
                  >
                    Get in Touch
                  </Link>
                </div>
                <div className="md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-primary hover:bg-gray-50 focus:outline-none transition-all duration-300">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-7 w-7" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-7 w-7" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
              
              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-300"
                      onClick={() => close()}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    to="/contact"
                    className="block w-full text-center px-4 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 mt-4"
                    onClick={() => close()}
                  >
                    Get in Touch
                  </Link>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </nav>
  )
} 