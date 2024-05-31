import './App.css'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Projects from './components/Home/Projects'
import Footer from './components/Home/Footer'

function App() {
  return (
    <div>
      <Nav/>
      <Home/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App