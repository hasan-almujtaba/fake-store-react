import { Link, useLocation } from 'react-router-dom'
import { MdMenu, MdClose, MdLogin } from 'react-icons/md'
import { Disclosure } from '@headlessui/react'
import { Button } from '../elements'
import { navigation } from './data'
import clsx from 'clsx'

export const Navbar = () => {
  const { pathname } = useLocation()

  const isRouteActive = (route: string) => pathname === route

  return (
    <Disclosure
      as="nav"
      className="bg-white shadow-md"
    >
      {({ open }) => (
        <>
          <div className="container">
            <div className="relative flex h-16 items-center justify-between">
              <Link
                to="/"
                className="w-fit bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-xl font-bold text-transparent md:text-2xl"
              >
                Fake Store
              </Link>

              <div className="hidden items-center sm:flex">
                <ul className="flex gap-x-2">
                  {navigation.map((item) => (
                    <li key={item.id}>
                      <Link
                        to={item.to}
                        className={clsx(
                          'block rounded-md px-3 py-2 text-base font-medium hover:bg-gradient-to-r hover:from-red-100 hover:to-orange-100',
                          isRouteActive(item.to)
                            ? 'bg-gradient-to-r from-red-200 to-orange-200'
                            : ''
                        )}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mx-1.5 h-7 w-1 border-l"> </div>

                <Button
                  as={Link}
                  to="/login"
                  className="w-28"
                >
                  Login <MdLogin className="h-5 w-5" />
                </Button>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gradient-to-r  from-red-100 to-orange-100 p-2 hover:from-red-200 hover:to-orange-200  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <MdClose
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <MdMenu
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="container pt-2 pb-3">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.id}
                    as={Link}
                    to={item.to}
                    className={clsx(
                      'flex items-center gap-x-2 rounded-md px-3 py-2 text-base font-medium',
                      isRouteActive(item.to)
                        ? 'bg-gradient-to-r from-red-200 to-orange-200'
                        : ''
                    )}
                    aria-current={isRouteActive(item.to) ? 'page' : undefined}
                  >
                    {item.title}
                  </Disclosure.Button>
                ))}
              </div>

              <div className="my-3 border-b"></div>

              <Disclosure.Button
                as={Link}
                to="/login"
                className="flex items-center justify-between rounded-md bg-gradient-to-r from-red-500 to-orange-500 px-3 py-2 font-medium text-white"
              >
                Login
                <MdLogin className="h-6 w-6" />
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
