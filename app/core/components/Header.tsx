import { Link } from "blitz"

function Header() {
  return (
    <header className="px-4 sm:px-6 lg:px-8 bg-white shadow">
      <div className="h-14 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <button
            type="button"
            className="text-gray-600 focus:outline-none focus:bg-gray-100 hover:text-gray-500 p-2 rounded-md -ml-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <Link href="/">
            <a className="inline-block p-2 py-2.5 rounded bg-black leading-5 text-white font-bold uppercase">
              Dev
            </a>
          </Link>
        </div>
        <div className="space-x-3">
          <Link href="/login">
            <a className="btn text-indigo-600 bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-opacity-50">
              Log in
            </a>
          </Link>
          <Link href="/signup">
            <a className="btn btn-primary">Create account</a>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
