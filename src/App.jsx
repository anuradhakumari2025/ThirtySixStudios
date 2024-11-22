import React, { useEffect } from "react";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  // Array of links
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);
  return (
    <>
      <div className="w-full min-h-screen relative text-white">
        {data[0].map((canvasDets, index) => (
          <Canvas key={index} details={canvasDets} />
        ))}
        <div className="w-full min-h-screen z-10 relative">
          <nav className="bg-black shadow-md shadow-gray-500 w-full z-10 flex p-4 justify-between items-center">
            <div className="font-regular text-2xl">ThirtySixStudios</div>
            <div>
              <ul className="flex space-x-6">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white hover:text-gray-300 transition duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <div className="w-full px-[25vw] mt-16">
            <div className="left w-1/2">
              <h1 className="text-4xl font-regular">
                At Thirtysixstudio, we build immersive digital experiences for
                brands with a purpose.
              </h1>
              <p className="mt-8 leading-tight text-sm">
                We’re a boutique production studio focused on design, motion,
                and creative technology, constantly reimagining what digital
                craft can do for present-time ads and campaigns.
              </p>
              <p className="mt-8">Scroll</p>
            </div>
            <div className="right w-1/2"></div>
          </div>
          <div className="my-16">
            <h1 className="text-[15vw] px-4 ">Thirtysixstudio</h1>
          </div>
        </div>
      </div>
      <div className="w-full min-h-screen relative  text-white">
        {data[1].map((canvasDets, index) => (
          <Canvas key={index} details={canvasDets} />
        ))}
        <div className="w-full min-h-screen z-10 relative">
          <div className="w-full h-full pl-[25vw] pr-[20vw] flex pt-20 pb-48 border-b-2 border-black shadow-sm shadow-gray-500">
            <div className="left w-1/2 text-2xl">
              <h1>
                01 -<span className="uppercase"> What we do</span>
              </h1>
            </div>
            <div className="right w-1/2">
              <h1 className="text-4xl">
                We aim to revolutionize digital production in the advertising
                space, bringing your ideas to life.
              </h1>
              <p className="mt-44 leading-tight">
                As a contemporary studio, we use cutting-edge design practices
                and the latest technologies to deliver seamless digital work
              </p>
              <p className="mt-4 leading-tight">
                Our commitment to creativity, innovation, and simplicity, paired
                with our agile approach, ensures your journey with us is smooth
                and enjoyable from start to finish.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen relative text-white ">
        {data[2].map((canvasDets, index) => (
          <Canvas key={index} details={canvasDets} />
        ))}
        <div className="w-full h-auto pt-28 px-[25vw] border-b-2 border-black shadow-sm shadow-gray-500 z-10 relative">
          <div className="w-full h-full pb-12">
            <h4 className="uppercase text-lg">Our Services</h4>
              <div className="mt-10 break-words">
                <h1 className="text-3xl">
                We provide captivating design,interactive animations,advanced usability,reliablecode,and immaculate project coordination.Whether you need a campaign built from scratch or assistance at a specific phase, we’ve got you covered.
                </h1>
              </div>
              
          </div>
        </div>
      </div>
      <div className="w-full min-h-screen relative text-white">
        {data[3].map((canvasDets, index) => (
          <Canvas key={index} details={canvasDets} />
        ))}
      </div>
      <div className="w-full min-h-screen relative text-white">
        {data[4].map((canvasDets, index) => (
          <Canvas key={index} details={canvasDets} />
        ))}
      </div>
    </>
  );
}

export default App;
