import React, { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { CalendarIcon, Cog6ToothIcon, FolderIcon, HomeIcon } from '@heroicons/react/24/outline'
import { MdFileUpload } from "react-icons/md";
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Content', href: '#', icon: FolderIcon, current: false },
  { name: 'Library', href: '#', icon: FolderIcon, current: false },
  { name: 'Analytics', href: '#', icon: CalendarIcon, current: false },
]

const userNavigation = [
  { name: 'Settings', href: '#' }, // Updated label to "Settings"
  { name: 'Log out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar component */}
        <div className="flex flex-col w-64 bg-white border-r border-gray-200">
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
            <h1 className="text-lg font-bold text-gray-800">Dashboard</h1>
          </div>
          <nav className="flex-1 overflow-y-auto">
            <ul className="py-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-200 text-indigo-600'
                        : 'text-gray-600 hover:bg-gray-100',
                      'flex items-center py-2 px-4 rounded-md transition-colors duration-200'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? 'text-indigo-600' : 'text-gray-400',
                        'h-6 w-6'
                      )}
                    />
                    <span className="ml-4">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-gray-200">
              <div className="px-4">
                <p className="text-sm font-semibold text-gray-600">User</p>
              </div>
              <ul className="mt-2">
                {userNavigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        {/* Main content area */}
        <div className="flex flex-col flex-1">
          <div className="flex-1 overflow-y-auto px-4 py-6">
            <h2 className="text-xl font-semibold text-gray-800">Welcome to your Dashboard</h2>
            <div className="flex items-center justify-between mt-4">
              <hr className="border-gray-300 w-full" />
            </div>
            <div className="flex items-center justify-between mt-4">
              <h2 className="text-xl font-semibold text-blue-600">Channel Content</h2>
              <button className="flex items-center text-blue-600">
                <span>Upload File</span>
                <MdFileUpload className="w-5 h-5 ml-2" />
              </button>
            </div>
            <div className="flex items-center justify-between mt-4">
              <hr className="border-gray-300 w-full" />
            </div>
            <div className="flex items-center mt-2 text-blue-600">
              <input type="checkbox" className="form-checkbox text-blue-600" />
              <span className="w-1/4">Video</span>
              <div className="w-3/4"></div> {/* Add space */}
              <span className="w-1/2 text-center">Category</span>
              <span className="w-1/2 text-center">Date</span>
              <span className="w-1/2 txt-center">Visibility</span>
              <span className="w-1/2 text-center">Views</span>
              <span className="w-1/2 text-center">Actions</span>
            </div>
            {/* Your content */}
          </div>
        </div>
      </div>
    </>
  )
}
