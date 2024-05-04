import Logo from "../../Assets/SEPCAM Logo PNG 1.svg";

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <img
            className="mx-auto h-16 w-auto"
            src={Logo}
            alt="Your Company"
          />
          <h2 className="mt-2 text-2xl font-bold leading-8 text-gray-900">
            Sign in 
          </h2>
        </div>

        <form className="mt-8 space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Username or email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                placeholder='Input your username'
                autoComplete="email"
                required
                className="block w-full rounded-md focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder-gray-400 sm:text-sm focus:outline-none pl-3"
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
                placeholder='Enter Your Password'
                autoComplete="current-password"
                required
                className="block w-full rounded-md focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder-gray-400 sm:text-sm focus:outline-none pl-3"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>

        <div className="mt-6">
          <p className="text-sm text-gray-600 text-center">
            <span>Keep Me Logged In</span> 
            <span className="block mt-2">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot password/username
              </a>
            </span>
            <span className="block mt-2">
              Don't have an account? {' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign up 
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
