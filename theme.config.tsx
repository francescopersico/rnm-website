import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>React Native Microfrontends</span>,
  project: {
    link: "https://github.com/reactnativemicrofrontends/website",
  },
  docsRepositoryBase: "https://github.com/reactnativemicrofrontends/website",
  footer: {
    text: "Powered by Nextra.",
  },
  useNextSeoProps: () => {
    const { frontMatter } = useConfig();

    console.log(frontMatter);

    return {
      titleTemplate: "%s",
      openGraph: {
        title: frontMatter.title || "React Native Microfrontends",
        description:
          frontMatter.description ||
          "A comprehensive website about how to build scalable, maintainable and well-architected mobile microfrontends using React Native",
        images: [
          {
            url: frontMatter.image
              ? `https://www.reactnativemicrofrontends.dev${frontMatter.image}`
              : "https://www.reactnativemicrofrontends.dev/images/mobile-microfrontends.png",
          },
        ],
      },
    };
  },
};

export default config;
