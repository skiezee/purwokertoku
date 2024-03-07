import Image from "next/image";
import Navbar from "./components/Header/navbar";
import LandingPage from "./components/Landing-page/landingPage";
import Reason from "./components/Reason/reason";
import Places from "./components/Places/places";
import Kuliner from "./components/Kuliner/kuliner";
import Things from "./components/Things/thingsToKnow";
import Travel from "./components/Travel/travel";
import Facts from "./components/Facts/facts";
import MediaPartner from "./components/Media-partner/media";
import Footer from "./components/Footer/footer";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex-grow">
        <LandingPage />
        <div className="lg:m-32">
          <div id="Reason">
            <Reason />
          </div>
          <Places/>
          <Kuliner/>
          <Things/>
          <Travel/> 
          <Facts/>
          <MediaPartner/>
        </div>
          <Footer/>
      </main>
    </div>
  );
}
