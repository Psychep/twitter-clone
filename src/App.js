import React from 'react'
import Container from './layout/Container'
import Sidebar from './layout/Sidebar'
import Content from './layout/Content'
import Widgets from './layout/Widgets'
import Profile from './layout/Profile'

const App = () => {
  const wpath = window.location.pathname;
  console.log(sa)
  return (
    <Container>
      <Sidebar />
      {wpath === "/profile" ? <Profile /> : <Content />}

      <Widgets />
    </Container>
  )
}
export default App

