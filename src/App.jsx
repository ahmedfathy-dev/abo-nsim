import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Button } from './components/ui/button'
import Navpar from './components/ui/Navpar'
import Hero from './components/ui/Hero'
import Kharaa from './components/ui/Kharaa'

import Courses from './components/Courses'
import { Card } from './components/ui/card'
import Cards from './components/Cards'
import Kshh from './components/Kshh'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<Navpar></Navpar>
<Hero/>
<Kharaa/>
<Courses/>
<Card/>
<Cards/>
<Kshh/>
<Footer/> 
    </>
  )
}

export default App
