import { ReactNode } from "react"
import { Head } from "blitz"
import { Header } from "app/core/components/Header"
import { Sidebar } from "app/core/components/Sidebar"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "devto-blitz"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Sidebar />
      {children}
    </>
  )
}

export default Layout
