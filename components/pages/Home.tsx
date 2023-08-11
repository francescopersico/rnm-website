import React from "react";

import Image from "next/image";
import MobileMicrofrontendsImg from "../../public/images/mobile-microfrontends.png";

const Hero = () => {
  return (
    <section className="container mx-auto p-8 flex flex-wrap">
      <div className="flex w-full lg:w-1/2 items-center">
        <div className="mb-5">
          <h1 className="text-4xl font-extrabold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            React Native Microfrontends
          </h1>
          <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            A full website about how to build robust and well-architected mobile
            microfrontends using React Native.
          </p>
        </div>
      </div>
      <div className="flex w-full lg:w-1/2 items-center justify-center">
        <div>
          <Image
            src={MobileMicrofrontendsImg}
            alt="Mobile Microfrontends"
            className="object-cover"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <main>
      <Hero />
    </main>
  );
};

export default Home;
