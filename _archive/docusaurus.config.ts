import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  themes: ['@docusaurus/theme-mermaid'],
  // In order for Mermaid code blocks in Markdown to work,
  // you also need to enable the Remark plugin with this option
  markdown: {
    mermaid: true,
  },
  title: 'iorlas',
  tagline: 'Denis Tomilin website',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://iorlas.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'iorlas', // Usually your GitHub org/user name.
  projectName: 'iorlascom', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  // onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'guides/travel',
          routeBasePath: 'guides/travel',
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        googleTagManager: {
          containerId: 'GTM-MKL37N3C',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'iorlas',
      logo: {
        alt: 'iorlas logo',
        src: 'img/logo.svg',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        { to: '/guides/it-squad-ops', label: 'Guide: IT Squad Ops', position: 'left' },
        { to: '/guides/travel', label: 'Guide: Travel', position: 'left' },
        // {to: '/blog', label: 'Blog', position: 'left'},
        { href: 'https://x.com/iorlasd', label: 'Twitter', position: 'right' },
        {
          href: 'https://github.com/iorlas',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guides',
          items: [
            {
              label: 'Travel',
              to: '/guides/travel',
            },
            {
              label: 'IT Squad Ops',
              to: '/guides/it-squad-ops',
            },
          ],
        },
        {
          title: 'Socials',
          items: [
            {
              label: 'Write me a message!',
              href: 'https://forms.gle/tDMCz5JGjphW8RMD9',
            },
            {
              label: 'Github',
              href: 'https://github.com/iorlas',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/denis-tomilin-28866686/',

            },
            {
              label: 'X',
              href: 'https://x.com/iorlasd',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Denis Tomilin. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'it-squad-ops',
        path: 'guides/it-squad-ops',
        routeBasePath: 'guides/it-squad-ops',
        sidebarPath: './sidebars.ts',
        showLastUpdateTime: true,
      },
    ],
  ],
};

export default config;
