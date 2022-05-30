// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Resonate Documentation',
  tagline: 'Documentation for the tech behind the co-operative music streaming service',
  url: 'https://resonate.coop',
  baseUrl: '/docs',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'resonatecoop', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  deploymentBranch: 'gh-pages', // GitHub Pages requires this to be explicit as a config field or environment variable.
  trailingSlash: false, // GitHub Pages adds a trailing slash to Docusaurus URLs by default.
                        // It is recommended to set a trailingSlash config(true or false, not undefined).

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
        "docusaurus-plugin-remote-content",
        {
          name: "stream",
          sourceBaseUrl: "https://raw.githubusercontent.com/resonatecoop/stream/development/",
          outDir: "docs/basics",
          documents: ["README.md"],
          modifyContent(filename, content) {
            if (filename.includes("README")) {
              return {
                filename: "stream.md",
                content: `---
sidebar_position: 1
---

Explore the monorepo for the web player, the <code>[stream](https://github.com/resonatecoop/stream)</code> repository...

${content.replace('<!-- Standard -->', '').replace('stream2own', '')}`,
              }
            }
            return undefined
          },
        }
    ],
    [
        "docusaurus-plugin-remote-content",
        {
          name: "website",
          sourceBaseUrl: "https://raw.githubusercontent.com/resonatecoop/website/develop/",
          outDir: "docs/basics",
          documents: ["README.md"],
          modifyContent(filename, content) {
            if (filename.includes("README")) {
              return {
                filename: "website.md",
                content: `---
sidebar_position: 2
---

Explore the Resonate <code>[website](https://github.com/resonatecoop/website)</code> repository...

${content}`,
              }
            }
            return undefined
          },
        },
    ],
    [
        "docusaurus-plugin-remote-content",
        {
          name: "id",
          sourceBaseUrl: "https://raw.githubusercontent.com/resonatecoop/id/develop/",
          outDir: "docs/basics",
          documents: ["README.md"],
          modifyContent(filename, content) {
            if (filename.includes("README")) {
              return {
                filename: "id.md",
                content: `---
sidebar_position: 3
---

Explore the <code>[id](https://github.com/resonatecoop/id)</code> server repository...

${content}`,
              }
            }
            return undefined
          },
        },
    ],
    [
        "docusaurus-plugin-remote-content",
        {
          name: "user-api",
          sourceBaseUrl: "https://raw.githubusercontent.com/resonatecoop/user-api/master/",
          outDir: "docs/basics",
          documents: ["README.md"],
          modifyContent(filename, content) {
            if (filename.includes("README")) {
              return {
                  filename: "user-api.md",
                  content: `---
sidebar_position: 4
---

Explore the Golang-based <code>[user-api](https://github.com/resonatecoop/user-api)</code> repository...

${content}`,
              }
            }
            return undefined
          },
        }
    ],
    [
        "docusaurus-plugin-remote-content",
        {
          name: "user-api-client",
          sourceBaseUrl: "https://raw.githubusercontent.com/resonatecoop/user-api-client/master/",
          outDir: "docs/basics",
          documents: ["README.md"],
          modifyContent(filename, content) {
            if (filename.includes("README")) {
              return {
                  filename: "user-api-client.md",
                  content: `---
sidebar_position: 5
---

Explore the goswagger.io generated client for <code>user-api</code>, the <code>[user-api-client](https://github.com/resonatecoop/user-api-client)</code> repository...

${content}`,
              }
            }
            return undefined
          },
        },
    ],
    [
        "docusaurus-plugin-remote-content",
        {
          name: "beam",
          sourceBaseUrl: "https://raw.githubusercontent.com/simonv3/beam/main/",
          outDir: "docs/ecosystem",
          documents: ["README.md"],
          modifyContent(filename, content) {
            if (filename.includes("README")) {
              return {
                  filename: "beam.md",
                  content: `---
sidebar_position: 1
---

Explore the <code>[beam](https://github.com/simonv3/beam)</code> desktop app repository...

${content}`,
              }
            }
            return undefined
          },
        },
    ],
    [
        "docusaurus-plugin-remote-content",
        {
          name: "stream-app",
          sourceBaseUrl: "https://raw.githubusercontent.com/peterklingelhofer/stream-app/main/",
          outDir: "docs/ecosystem",
          documents: ["README.md"],
          modifyContent(filename, content) {
            if (filename.includes("README")) {
              return {
                filename: "stream-app.md",
                content: `---
sidebar_position: 2
---

Explore the mobile & tablet <code>[stream-app](https://github.com/peterklingelhofer/stream-app)</code> repository...

${content}`,
              }
            }
            return undefined
          },
        },
      ],
  ],
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/resonatecoop/docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/resonatecoop/docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Resonate Docs',
        logo: {
          alt: 'Resonate Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // { to: '/api', label: 'API', position: 'left' },
          {
            href: 'https://api.resonate.coop/v3/docs',
            label: 'API 3.0',
            position: 'right',
          },
          {
            href: 'https://api.resonate.coop/v2/docs',
            label: 'API 2.0',
            position: 'right',
          },
          {
            href: 'https://github.com/resonatecoop',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Basics',
                to: '/docs/category/tutorial---basics',
              },
              {
                label: 'Ecosystem',
                to: '/docs/category/tutorial---ecosystem',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Web Player',
                href: 'https://stream.resonate.coop/',
              },
              {
                label: 'Forum',
                href: 'https://community.resonate.is/',
              },
              {
                label: 'Handbook',
                href: 'https://community.resonate.is/docs',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/resonatecoop',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'API 3.0',
                href: 'https://api.resonate.coop/v3/docs',
              },
              {
                label: 'API 2.0',
                href: 'https://api.resonate.coop/v2/docs',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/resonatecoop',
              },
            ],
          },
        ],
        copyright: `Copyright © 2015 - ${new Date().getFullYear()} Resonate.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
