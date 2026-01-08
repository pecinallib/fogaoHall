import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/titulos',
    element: <div>Títulos</div>,
  },
  {
    path: '/glorias',
    element: <div>Glórias</div>,
  },
  {
    path: '/idolos',
    element: <div>Ídolos</div>,
  },
  {
    path: '/historia',
    element: <div>História</div>,
  },
])
