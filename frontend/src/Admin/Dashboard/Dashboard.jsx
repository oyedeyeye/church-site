import React, { Fragment, useState, useEffect } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { CalendarIcon, Cog6ToothIcon, FolderIcon, HomeIcon } from '@heroicons/react/24/outline'
import { MdFileUpload } from "react-icons/md";
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { useNavigate } from 'react-router-dom';

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Content', href: '#', icon: FolderIcon, current: false },
  { name: 'Library', href: '#', icon: FolderIcon, current: false },
  { name: 'Analytics', href: '#', icon: CalendarIcon, current: false },
]

const userNavigation = [
  { name: 'Settings', href: '#' }, // Updated label to "Settings"
  { name: 'Log out', href: 'https://sepcamwebapp.azurewebsites.net/user/logout' }, // Logout API endpoint
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {
  const navigate = useNavigate(); // Initialize navigate function for redirection

  // Handle logout function
  const handleLogout = () => {
    try {
      // Remove the JWT token from localStorage
      localStorage.removeItem('token');
      // Redirect to the login page
      navigate('/admin-login');
    } catch (error) {
      console.error('Error occurred during logout:', error);
    }
  };

  const [apiData, setApiData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token');
        const response = await fetch('https://sepcamwebapp.azurewebsites.net/admin/dashboard', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setApiData(data.entities || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);// Empty dependency array to run only once when component mounts

  // Pagination
  const totalPages = Math.ceil(apiData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = apiData.slice(indexOfFirstItem, indexOfLastItem);

  const handleClickNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleClickPrev = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

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
                    <button
                      onClick={item.name === 'Log out' ? handleLogout : null}
                      className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 w-full text-left"
                    >
                      {item.name}
                    </button>
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
              <a href="/upload" className="flex items-center text-blue-600">
                <span>Upload File</span>
                <MdFileUpload className="w-5 h-5 ml-2" />
              </a>

            </div>
            <div className="flex items-center justify-between mt-4">
              <hr className="border-gray-300 w-full" />
            </div>
            <div className="flex items-center text-blue-600 bg-gray-100 border border-gray-300 rounded-md">
    <input type="checkbox" className="form-checkbox text-blue-600" />
    <div className="w-1/4 p-2 border-r border-gray-300">Video</div>
    <div className="w-3/4"></div> {/* Add space */}
    <div className="w-1/2 text-center p-2 border-r border-gray-300">Category</div>
    <div className="w-1/2 text-center p-2 border-r border-gray-300">Date</div>
    <div className="w-1/2 txt-center p-2 border-r border-gray-300">Visibility</div>
    <div className="w-1/2 text-center p-2 border-r border-gray-300">Views</div>
    <div className="w-1/2 text-center p-2">Actions</div>
  </div>

  {/* Table-like structure populated with API data */}
  {currentItems.map(item => (
  <div key={item.rowKey} className="flex text-blue-600 border border-gray-300">
    <div className="w-1/4 p-2  border-gray-300">{item.title}</div>
    <div className="w-1/2 p-2  border-gray-300">{item.theme}</div>
    <div className="w-1/2 p-2  border-gray-300">{formatDate(item.date)}<div>Published</div></div>
    <div className="w-1/2 p-2  border-gray-300"></div>
    <div className="w-1/2 p-2"></div>
  </div>
))}



     {/* Pagination controls */}
{apiData.length > 0 && (
            <div className="flex justify-center mt-4">
              <button 
                onClick={handleClickPrev} 
                disabled={currentPage === 1} 
                className="mr-2 bg-blue-500 hover:bg-blue-700 text-blue font-bold py-2 px-4 rounded"
              >
                Previous
              </button>
              <button 
                onClick={handleClickNext} 
                disabled={currentPage === totalPages} 
                className="bg-blue-500 hover:bg-blue-700 text-blue font-bold py-2 px-4 rounded"
              >
                Next
              </button>
  </div>
)}


</div>


            </div>
            
            {/* Your content */}
          </div>
        
      
    </>
  )
}
 
