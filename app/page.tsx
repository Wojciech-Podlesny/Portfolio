import {Header} from "@/components/Header";
import {About} from "@/components/About";
import {StatsCounter} from "@/components/StatsCounter";
import {Footer} from "@/components/Footer";
import {Skills} from "@/components/Skills";


const  Home = () =>  {
  return (
     <>
         <Header />
         <About />
         <StatsCounter />
         <Skills />
         <Footer />
     </>

  )
}

export default Home
