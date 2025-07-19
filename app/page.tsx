import {Header} from "@/components/Header";
import {About} from "@/components/About";
import {StatsCounter} from "@/components/StatsCounter";
import {Skills} from "@/components/Skills";
import {Experience} from "@/components/Experience";
import {Services} from "@/components/Services";
import {Education} from "@/components/Education";


const  Home = () =>  {
  return (
     <>
         <Header />
         <About />
         <StatsCounter />
         <Skills />
         <Experience />
         <Education />
         <Services />

     </>

  )
}

export default Home
