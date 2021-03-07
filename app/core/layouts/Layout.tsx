import { ReactNode, useState } from "react"
import { Head } from "blitz"
import { Header } from "app/core/components/Header"
import { Sidebar } from "app/core/components/Sidebar"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  const [sidebarActive, setSidebarActive] = useState<boolean>(false)

  return (
    <>
      <Head>
        <title>{title || "devto-blitz"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header setSidebarActive={setSidebarActive} />
      <Sidebar sidebarActive={sidebarActive} setSidebarActive={setSidebarActive} />
      {children}
    </>
  )
}

export default Layout
