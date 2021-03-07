import { Link } from "blitz"
import { Icon } from "app/core/components/Icon"

type SidebarProps = {
  sidebarActive: boolean
  setSidebarActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const Sidebar = ({ sidebarActive, setSidebarActive }: SidebarProps) => {
  return (
    <div className="md:hidden">
      <div className={`${!sidebarActive && "hidden"} bg-black absolute inset-0 opacity-50`} />
      <aside className={`${!sidebarActive && "hidden"} fixed h-screen w-72 top-0 left-0 bg-white`}>
        <div className="h-14 flex items-center justify-between px-4 shadow">
          <h1 className="font-bold text-lg">DEV Community</h1>
          <button
            type="button"
            className="text-gray-600 focus:outline-none focus:bg-gray-100 hover:text-gray-500 p-2 rounded-md -mr-2"
            onClick={() => setSidebarActive(false)}
          >
            <Icon icon="x" className="w-6 h-6" />
          </button>
        </div>
        <nav className="py-4 px-2 space-y-2">
          <Link href="/">
            <a className="flex items-center text-gray-500 space-x-3 p-2 rounded hover:bg-indigo-50 group">
              <Icon icon="home" className="w-6 h-6" />
              <span className="leading-5 text-gray-700 group-hover:text-indigo-600">Home</span>
            </a>
          </Link>
          <a
            href="#"
            className="flex items-center text-gray-500 space-x-3 p-2 rounded hover:bg-indigo-50 group"
          >
            <Icon icon="collection" className="w-6 h-6" />
            <span className="leading-5 text-gray-700 group-hover:text-indigo-600">
              Reading list
            </span>
          </a>
        </nav>
      </aside>
    </div>
  )
}
