import { ThemeProvider } from 'next-themes'
import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/home/Hero'
import { Services } from './components/home/Services'
import { ClientLogos } from './components/home/ClientLogos'
import { About } from './components/sections/About'
import { Resources } from './components/sections/Resources'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <h1 className="text-4xl font-bold text-center py-20">
        Taller Site
      </h1>
    </div>
  )
}

export default App 