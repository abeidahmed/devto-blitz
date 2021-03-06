import { Suspense } from "react"
import { Link, useMutation } from "blitz"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import { Icon } from "app/core/components/Icon"

const UserAction = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  if (currentUser) {
    return (
      <div>
        <h5>Logged in</h5>
        <button
          type="button"
          className="button small"
          onClick={async () => {
            await logoutMutation()
          }}
        >
          Logout
        </button>
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

function Header() {
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

export default Header
