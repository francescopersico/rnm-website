import React from "react";

import Image from "next/image";
import MobileMicrofrontendsImg from "../../public/images/mobile-microfrontends.png";

const Hero = () => {
  return (
    <section className="container mx-auto p-8 justify-center content-center">
      <div className="flex flex-col items-center justify-center px-8">
        <Image
          src={MobileMicrofrontendsImg}
          alt="Mobile Microfrontends"
          className="object-cover"
          priority={true}
        />
        <h1 className="text-3xl font-extrabold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
          React Native Microfrontends
        </h1>
        <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300 lg:max-w-5xl">
          A comprehensive website about how to build scalable, maintainable and
          well-architected mobile microfrontends using React Native. From basic
          concepts to advanced topics like microfrontend complex architecture,
          state management, navigation, CI/CD, team organization/scaling and
          much much more.
        </p>
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
