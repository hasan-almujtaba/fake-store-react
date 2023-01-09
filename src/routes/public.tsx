import { RouteObject } from 'react-router-dom'

import { DefaultLayout } from '~/components/layouts'
import { LandingPage } from '~/features/misc'

const publicRoutes: RouteObject[] = [
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
    ],
  },
]

export default publicRoutes
