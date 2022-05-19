import React from 'react'
import { useRoutes } from "react-router-dom"

const Login = React.lazy(() => import('@/views/login/index'))
const Layout = React.lazy(() => import('@/layout/index'))

function MyRoute() {

  let element = useRoutes([
    {
      path:'/login',
      element:<Login />
    },
    {
      path: "/",
      element: <Layout />,
      children: []
    }
  ])

  return element;
}

export default MyRoute