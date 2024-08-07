import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../../Assets/SEPCAM Logo PNG 1.svg";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://sepcamwebapp.azurewebsites.net/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('token', token);
        navigate('/dashboard');
      } else {
        setError('Invalid username or password. Please try again.');
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
          <h2 className="mt-2 text-2xl font-bold leading-8 text-gray-900">Sign in</h2>
        </div>

        <div className="mt-8 space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              Username
            </label>
            <div className="mt-1">
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Enter your username"
                autoComplete="username"
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
                placeholder="Enter your password"
                autoComplete="current-password"
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
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm text-gray-600 text-center">
            <span>Keep Me Logged In</span>
            <span className="block mt-2">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot password/username
              </a>
            </span>
            <span className="block mt-2">
              Don't have an account?{' '}
              <a href="/admin-signup" className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign up
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
