
import {Header} from './components/Header'
import { ProjectsSection } from './components/ProjectSection'
import { projects } from './data/projects'
import { Hero } from './components/Hero'
import { Footer } from './components/Footer'

function App() {


  return (
    <>
     <Header/>
     <Hero/>
     <main>
       <div className="p-10">
<ProjectsSection items={projects} />
    </div>

        

        <Footer />
      </main>
    </>
  )
}

export default App
