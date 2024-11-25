import Footer from "@/components/footer";
import Hero from "./home/hero";
import ImageSequenceAnimation from "./home/ImageSequenceAnimation";
import Services from "./home/Services";
import VideoSection from "./home/VideoSection";

export default function Home() {
  return (
    <main className="container md:max-w-screen-2xl mx-auto lowercase md:px-16 px-8">
       <Hero/> 
       {/* <ImageSequenceAnimation/> */}
       <VideoSection/>
       <Services/>
    </main>
  );
}
