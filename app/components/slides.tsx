import Slide from "./scroll2slide";
import Particles from "./particles";
import Contact from './contact';
import AboutUs from './about';
import Works from './works';

function Slides() { 

    return <div className="slides">
      <Slide slideId="title_slide">
        <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">
          
          <div className="flex flex-col items-center justify-center h-full">
            <div className="absolute inset-0 -z-10">
              <Particles className="h-full w-full animate-fade-in" quantity={100} />
            </div>
            <h1 id="title" className="z-10 text-4xl text-transparent duration-1000 bg justify-end cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
              visioart.io
            </h1>
            <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            <div className="my-16 text-center animate-fade-in">
              <h1 className="text-sm text-zinc-500 ">
                COMING SOON
              </h1>
            </div>
          </div>
        </div>
      </Slide>
      <Slide slideId="works_slide">
        <div style={{height: "100%"}} className="bg-gradient-to-tl from-black via-zinc-600/20 to-black ">
          <div style={{height: "100%"}} className="h-100vh animate-fade-in">
            <div style={{height: "100%"}} id="works" className="mx-auto text-white">
              <Works />
            </div>
          </div>
        </div>
      </Slide>

      <Slide slideId="about_slide">
        <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">
          <div className="absolute inset-0 -z-10">
            <Particles className="h-full w-full animate-fade-in" quantity={100} />
          </div>
          <div className="my-16 text-center animate-fade-in" >
            <div id="about" className="w-3/4 mx-auto text- justify-end">
              <AboutUs />
            </div>
          </div>
        </div>
      </Slide>

      <Slide slideId="contact_slide">
        <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">
          <div className="absolute inset-0 -z-10">
            <Particles className="h-full w-full animate-fade-in" quantity={100} />
          </div>
          <div className="my-16 text-center animate-fade-in" >
            <div id="contact" className="text- justify-end bg-gradient-to-tl ">
              <Contact />
            </div>
          </div>

        </div>
      </Slide>
    </div>
}

export default Slides;