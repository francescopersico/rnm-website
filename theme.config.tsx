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

    return {
      titleTemplate: "%s",
      openGraph: {
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
