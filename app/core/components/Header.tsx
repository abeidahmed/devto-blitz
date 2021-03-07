import { Suspense } from "react"
import { Link, useMutation } from "blitz"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import { Icon } from "app/core/components/Icon"
import { Toggler } from "app/core/components/Toggler"

export default function Header() {
  return (
    <header className="px-4 sm:px-6 lg:px-8 bg-white shadow">
      <div className="h-14 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center">
          <button
            type="button"
            className="mr-2 text-gray-600 focus:outline-none focus:bg-gray-100 hover:text-gray-500 p-2 rounded-md -ml-2 md:hidden"
          >
            <Icon icon="menu" aria-label="open sidebar" className="w-6 h-6" />
          </button>
          <Link href="/">
            <a className="inline-block text-lg p-2 py-2 rounded bg-black leading-6 text-white font-bold uppercase hover:bg-gray-800">
              Dev
            </a>
          </Link>
        </div>
        <div className="space-x-3">
          <Suspense fallback="Loading...">
            <UserAction />
          </Suspense>
        </div>
      </div>
    </header>
  )
}

const UserAction = () => {
  const currentUser = useCurrentUser()

  if (currentUser) {
    return (
      <div className="flex items-center">
        <UserDropdown name={currentUser.name} />
      </div>
    )
  } else {
    return (
      <>
        <Link href="/login">
          <a className="btn btn-invisible">Log in</a>
        </Link>
        <Link href="/signup">
          <a className="btn btn-primary">Create account</a>
        </Link>
      </>
    )
  }
}

const UserDropdown = ({ name }: { name: string | null }) => {
  const [logoutMutation] = useMutation(logout)

  return (
    <Toggler>
      {(isActive, setIsActive) => (
        <div className="relative">
          <div className="flex items-center justify-center">
            <button
              type="button"
              onClick={() => setIsActive(!isActive)}
              className="rounded-full focus:outline-none focus:ring-4 focus:ring-indigo-100"
            >
              <img
                className="w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </button>
          </div>
          <div
            className={`${
              isActive ? "block" : "hidden"
            } mt-3 absolute right-0 w-64 origin-top-right text-base bg-white shadow-offset-black border-black border-2 rounded`}
          >
            <ul className="py-1">
              <li className="px-1">
                <a
                  href="#"
                  className="block p-2 focus:outline-none focus:bg-indigo-50 rounded focus:text-indigo-600 hover:bg-indigo-50 hover:text-indigo-600"
                >
                  <span className="block">{name ? name : "Anonymous"}</span>
                  <span className="block text-sm text-gray-500">@abeidahmed</span>
                </a>
              </li>
              <li className="py-1">
                <hr />
              </li>
              <li className="px-1">
                <a
                  href="#"
                  className="block p-2 focus:outline-none focus:bg-indigo-50 rounded focus:text-indigo-600 hover:bg-indigo-50 hover:text-indigo-600"
                >
                  Dashboard
                </a>
              </li>
              <li className="px-1">
                <a
                  href="#"
                  className="block p-2 focus:outline-none focus:bg-indigo-50 rounded focus:text-indigo-600 hover:bg-indigo-50 hover:text-indigo-600"
                >
                  Write a post
                </a>
              </li>
              <li className="py-1">
                <hr />
              </li>
              <li className="px-1">
                <button
                  type="button"
                  className="block w-full text-left p-2 focus:outline-none focus:bg-indigo-50 rounded focus:text-indigo-600 hover:bg-indigo-50 hover:text-indigo-600"
                  onClick={async () => {
                    await logoutMutation()
                  }}
                >
                  Sign out
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </Toggler>
  )
}
