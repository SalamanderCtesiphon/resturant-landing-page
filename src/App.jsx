import './App.css'
import Header from './components/Header'
import About from './pages/About.jsx'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/profile',
    element: <About />,
  },
])

function App() {
  return (
    <>
      <Header />
      <section>
        <h1>I said!!! ... please?</h1>
      </section>
      <RouterProvider router={router} />
    </>
  )
}

export default App
