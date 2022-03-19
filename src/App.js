import AboutMe from './components/aboutme/AboutMe'
import Intro from './components/intro/Intro'
import ProjectList from './components/project-list/ProjectList'
import Contact from './components/contact/Contact'
import Toggle from './components/toggle/Toggle'
import { useContext } from 'react'
import { ThemeContext } from './context'

function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <div
      style={{
        backgroundColor: darkMode ? '#222' : 'white',
        color: darkMode && 'white',
      }}
    >
      <Toggle />
      <Intro />
      <AboutMe />
      <ProjectList />
      <Contact />
    </div>
  )
}

export default App
