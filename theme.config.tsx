import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>React Native Microfrontends</span>,
  project: {
    link: "https://github.com/reactnativemicrofrontends/website",
  },
  docsRepositoryBase: "https://github.com/reactnativemicrofrontends/website",
  footer: {
    text: "Powered by Nextra.",
  },
  useNextSeoProps: () => ({
    titleTemplate: "%s",
  }),
};

export default config;
