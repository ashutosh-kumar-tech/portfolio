import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Work from "@/sections/Work";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
    return (
        <div className={'container max-w-7xl min-w-[420px] mx-auto px-6'}>
            <Header className={'fixed top-0 left-1/2 -translate-x-1/2 max-w-7xl w-full z-50'} />
            <Hero id={'top'} className={'min-h-screen'} />
            <About id={'about'} className={'min-h-screen'} />
            <Services id={'services'} className={'min-h-screen'} />
            <Work id={'work'} className={'min-h-screen'} />
            <Contact id={'contact'} className={'min-h-screen'} />
            <Footer />
        </div>
    );
}
