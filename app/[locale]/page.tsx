import {Header} from "@/components/Header";
 import {FeaturedProjects} from "@/components/FeaturedProjects";
import {CallToAction} from "@/components/CallToAction";
import {AboutTeaser} from "@/components/AboutTeaser";

const  Home = () =>  {

       return (
     <div>
         <Header />
         <AboutTeaser />
         <FeaturedProjects />
         <CallToAction />
     </div>
       )

}

export default Home
