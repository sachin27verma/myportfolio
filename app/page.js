import Image from 'next/image'
import Herosection from './Herosection';
import Project from './Project';
import About from './About';
import Skill from './Skill';
import Contactme from './Contactme';
import Footer from './Footer';
export default function Home() {
 
  return (
    <>
   {/* <Header/> */}
   <Herosection/>
   <Project/>
   <About/>
   <Skill/>
   <Contactme/>
   <Footer/> 
   </>
  )
}
