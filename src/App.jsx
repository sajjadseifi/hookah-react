import { Link } from 'react-router-dom'
import { Router } from './Router'
import { Layout } from './layouts/Layout'

export default function App() {
  document.documentElement.setAttribute('dir','rtl')
  return (
      <Layout>
        {/* <nav>
          <Link to='/'>home</Link>
          <Link to='/menu'>menu</Link>
          <Link to='/menu/category'>category</Link>
        </nav> */}
        <Router/>
      </Layout>
  )
}