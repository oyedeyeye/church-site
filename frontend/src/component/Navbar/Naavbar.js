import { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'HOME', href: '/', current: true },
  { 
    name: 'ABOUT', 
    href: '#',
    current: false,
    // Sub-links for the dropdown
    subLinks: [
      { name: 'Our Call', href: '/about/our-call' },
      { name: 'Our History', href: '/about/our-history' },
      { name: 'Leadership', href: '/about/leadership' },
      { name: 'Unit/Department', href: '/about/unit-department' },
    ]
  },
  { name: 'RESOURCES', href: '/resources', current: false },
  { name: 'CHURCH ONLINE', href: '/church-online', current: false },
  { name: 'ACADEMY', href: '/academy', current: false },
  { name: 'CONTACT', href: '/contact', current: false },
  { name: 'BLOG', href: '/blog', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Naavbar() {
  const [activeButton, setActiveButton] = useState('');
  return (
    <div>
<nav className="navbar bg-light">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between">

    <a href="/" className="navbar-brand flex items-center">
      <img src="/log2/SEPCAM Logo (1).png" alt="SEPCAM LOGO" className="h-9 mr-3 sm:h-12" />

      {/* Adjust font size and spacing */}
      <span className="text-sm sm:text-base lg:text-lg font-semibold sm:ml-1" style={{ color: '#002171' }}>
        THE SCEPTRE OF<br className="sm:hidden" /> POWER CHRISTIAN MINISTRY
      </span>
    </a>

    <button className="navbar-toggler flex sm:hidden border-0 px-3 py-2">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="flex flex-grow items-center justify-end sm:justify-center sm:flex">
      <form className="hidden sm:flex mr-6 lg:mr-0">
        <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
      </form>
    </div>

  </div>
</nav>


    <div className="nav-content">
    <Disclosure as="nav" className="bg-blue">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <div key={item.name} className="relative">
                      {item.subLinks ? (
                        <Disclosure>
                          {({ open }) => (
                            <>
                              <Disclosure.Button
                                      onClick={() => setActiveButton(item.name)}
                                      className={classNames(
                                        activeButton === item.name
                                          ? 'bg-gray-900 text-white'
                                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'rounded-md px-3 py-2 text-sm font-medium'
                                      )}
                                    >
                                {item.name}
                                <span className="ml-1">{open ? '▲' : '▼'}</span>
                              </Disclosure.Button>
                              <Transition
                                show={open}
                                enter="transition-opacity duration-75"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity duration-75"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Disclosure.Panel className="absolute z-10 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
                                  {item.subLinks.map((subItem) => (
                                    <a
                                      key={subItem.name}
                                      href={subItem.href}
                                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                                    >
                                      {subItem.name}
                                    </a>
                                  ))}
                                </Disclosure.Panel>
                              </Transition>
                            </>
                          )}
                        </Disclosure>
                      ) : (
                        <a
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      )}
                    </div>
                  ))}
                  
                </div>
              </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <div className="flex flex-col space-y-1">
                {navigation.map((item) => (
                  <Fragment key={item.name}>
          {item.subLinks && item.name === 'ABOUT' ? (
            // Display sub-links for 'ABOUT'
            item.subLinks.map((subItem) => (
              <a
                key={subItem.name}
                href={subItem.href}
                className={classNames(
                  'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium block'
                )}
              >
                {subItem.name}
              </a>
            ))
          ) : (
            // Display regular navigation items
            <a
              href={item.href}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'rounded-md px-3 py-2 text-base font-medium'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </a>
          )}
        </Fragment>
                ))}
              </div>
              <form className="mt-auto">
      <input
        className="form-control w-52 rounded-md px-3 py-2 text-sm"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
    </form>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </div>
    </div>
  )
}
