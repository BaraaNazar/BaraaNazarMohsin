import Contact from './containers/contact.js'
import Projects from './containers/projects.js'
import Home from './containers/home.js'
import About from './containers/about.js'

export default function App() {
  return (
    <main className='h-screen w-screen flex -z-50'>
      <Home/>
      <About/>
      <Contact/>
      <Projects/>
    </main>
  )
}
