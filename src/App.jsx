import './App.css'
import Header from './components/Header'
import About from './pages/About.jsx'
import Home from './pages/Home'
import Menu from './pages/Menu'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/menu',
    element: <Menu />,
  },
])

function App() {
  return (
    <>
      <Header router={router} />
      <section>
        <RouterProvider router={router} />
      </section>
    </>
  )
}

export default App
