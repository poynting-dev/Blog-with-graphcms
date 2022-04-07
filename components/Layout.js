import React from 'react'
import { Header } from './'

const Layout = ({ children }) => {
  return (
    <div className="lg:mx-36">
      <Header />
      {children}
    </div>
  )
}

export default Layout
