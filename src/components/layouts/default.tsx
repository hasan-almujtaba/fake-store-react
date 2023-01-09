import { Outlet } from 'react-router-dom'

import { Navbar } from '../navbar'

export const DefaultLayout = () => {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>
    </>
  )
}
