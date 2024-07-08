import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../../Assets/SEPCAM Logo PNG 1.svg";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    role: 'Web Master'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://sepcamwebapp.azurewebsites.net/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        navigate('/admin-login'); // Navigate to login page after successful sign up
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error occurred:', error);
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <img
            className="mx-auto h-16 w-auto"
            src={Logo}
            alt="Your Company"
          />
          <h2 className="mt-2 text-2xl font-bold leading-8 text-gray-900">Sign Up</h2>
        </div>

        <div className="mt-8 space-y-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
              First Name
            </label>
            <div className="mt-1">
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Enter your first name"
                autoComplete="given-name"
                required
                className="block w-full rounded-md focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder-gray-400 sm:text-sm focus:outline-none pl-3"
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
              Last Name
            </label>
            <div className="mt-1">
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Enter your last name"
                autoComplete="family-name"
                required
                className="block w-full rounded-md focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder-gray-400 sm:text-sm focus:outline-none pl-3"
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              Username
            </label>
            <div className="mt-1">
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Choose a username"
                autoComplete="username"
                required
                className="block w-full rounded-md focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder-gray-400 sm:text-sm focus:outline-none pl-3"
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email Address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                autoComplete="email"
                required
                className="block w-full rounded-md focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder-gray-400 sm:text-sm focus:outline-none pl-3"
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Choose a password"
                autoComplete="new-password"
                required
                className="block w-full rounded-md focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder-gray-400 sm:text-sm focus:outline-none pl-3"
                onChange={handleChange}
              />
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <div>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className={`w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Signing up...' : 'Sign Up'}
            </button>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm text-gray-600 text-center">
            Already have an account?{' '}
            <a href="/admin-login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
