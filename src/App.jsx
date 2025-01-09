import React, { useEffect, useRef, useState } from "react";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";

function App() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];
  const [showCanvas, setShowCanvas] = useState(false);
  const headingRef = useRef(null);
  const growingSpan = useRef(null);
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);
  useEffect(() => {
    const handleClick = (event) => {
      setShowCanvas((prevShowCanvas) => {
        if (!prevShowCanvas) {
          gsap.set(growingSpan.current, {
            top: event.clientX,
            left: event.Y,
          });
          gsap.to("body", {
            color: "#000",
            backgroundColor: "#fd2c2a",
            duration: 1,
            ease: "Power2.out",
          });
          gsap.to(growingSpan.current, {
            scale: 1000,
            duration: 1,
            ease: "power2.out",
            onComplete: () => {
              gsap.to(growingSpan.current, {
                scale: 0,
                clearProps: "all",
              });
            },
          });
        } else {
          gsap.to("body", {
            color: "#fff",
            backgroundColor: "#000",
            duration: 1,
            ease: "Power2.out",
          });
        }
        return !prevShowCanvas;
      });
    };

    const headingElement = headingRef.current;
    headingElement.addEventListener("click", handleClick);

    // Clean up event listener on unmount
    return () => headingElement.removeEventListener("click", handleClick);
  }, []);
  return (
    <>
      <span
        ref={growingSpan}
        className="growing fixed block rounded-full top-[-20px] left-[-20px] h-4 w-4"
      ></span>
      {/* page 1 */}
      <div className="w-full min-h-screen relative">
        {showCanvas &&
          data[0].map((canvasDets, index) => (
            <Canvas key={index} details={canvasDets} />
          ))}
        <div className="w-full min-h-screen z-10 relative">
        {data[5].map((canvasDets, index) => (
          <Canvas key={index} details={canvasDets} />
        ))}
          <nav
            className={`w-full z-10 flex p-4 justify-between items-center shadow-md ${
              showCanvas ? "shadow-red-400" : "shadow-gray-700"
            }`}
          >
            <div className="font-regular text-2xl">ThirtySixStudios</div>
            <div>
              <ul className="flex space-x-6">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="hover:text-gray-300 transition duration-300"
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
            <h1 ref={headingRef} className="text-[15vw] px-4 cursor-pointer">
              Thirtysixstudio
            </h1>
          </div>
        </div>
      </div>

      {/* page2 what we do */}
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

      {/* our services */}
      <div className="w-full min-h-screen relative text-white ">
        {data[2].map((canvasDets, index) => (
          <Canvas key={index} details={canvasDets} />
        ))}
        <div className="w-full h-auto pt-28 px-[25vw] border-b-2 border-black shadow-sm shadow-gray-500 z-10 relative">
          <div className="w-full h-full pb-12">
            <h4 className="uppercase text-lg">Our Services</h4>
            <div className="mt-10 break-words">
              <h1 className="text-3xl">
                We provide captivating design,interactive animations,advanced
                usability,reliablecode,and immaculate project
                coordination.Whether you need a campaign built from scratch or
                assistance at a specific phase, we’ve got you covered.
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center pt-[10vw] overflow-hidden">
          <div className="flex justify-between items-center mr-[12vw] w-[40%] h-[4vw]">
            <h4 className="uppercase">Creative</h4>
            <div className="border-2 cursor-pointer text-2xl border-gray-500 hover:border-white rounded-[30px] pl-5 pr-5">+</div>
          </div>
          <div className="border-b-2 border-white w-[99%] mt-2 mb-2"></div>

          <div className="flex justify-between items-center mr-[12vw] w-[40%] h-[4vw]">
            <h4 className="uppercase">design</h4>
            <div className="border-2 text-2xl cursor-pointer border-gray-500 hover:border-white rounded-[30px] pl-5 pr-5">+</div>
          </div>
          <div className="border-b-2 border-white w-[99%] mt-2 mb-2"></div>

          <div className="flex justify-between items-center mr-[12vw] w-[40%] h-[4vw]">
            <h4 className="uppercase">animation</h4>
            <div className="border-2 text-2xl cursor-pointer border-gray-500 hover:border-white rounded-[30px] pl-5 pr-5">+</div>
          </div>
          <div className="border-b-2 border-white w-[99%] mt-2 mb-2"></div>

          <div className="flex justify-between items-center mr-[12vw] w-[40%] h-[4vw]">
            <h4 className="uppercase">technology</h4>
            <div className="border-2 text-2xl cursor-pointer border-gray-500 hover:border-white rounded-[30px] pl-5 pr-5">+</div>
          </div>
          <div className="border-b-2 border-white w-[99%] mt-2 mb-2"></div>

          <div className="flex justify-between items-center mr-[12vw] w-[40%] h-[4vw]">
            <h4 className="uppercase">project delivery</h4>
            <div className="border-2 text-2xl cursor-pointer border-gray-500 hover:border-white rounded-[30px] pl-5 pr-5">+</div>
          </div>
          <div className="border-b-2 border-white w-[99%] mt-2 mb-2"></div>

          <div className="flex justify-between items-center mr-[12vw] w-[40%] h-[4vw]">
            <h4 className="uppercase">example products</h4>
            <div className="border-2 text-2xl cursor-pointer border-gray-500 hover:border-white rounded-[30px] pl-5 pr-5">+</div>
          </div>
          <div className="border-b-2 border-white w-[99%] mt-2 mb-2"></div>
        </div>

        <div className="w-full pt-[6vw]">
          <p className="w-[40%] mx-[23vw]">
            Got a project in mind?<br />
            drop us a line at @hello@thirtysix.com <br />
            
          </p>
          <p className="w-[30%] mx-[23vw] mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate iure eius a deleniti, perferendis totam voluptates natus saepe tenetur vitae facilis ea ab ducimus commodi dignissimos? Magnam consequuntur illo quisquam.</p>
          <div className="w-fit mx-[23vw] mt-12 border-2 border-white px-8 rounded-3xl underline cursor-pointer py-1">Talk us</div>
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
