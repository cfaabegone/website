import Link from "next/link";
import Logo from "components/logo";
import Gitlab from "react-devicons/gitlab/plain";
import Gitter from "react-devicons/gitter/plain";

const themeConfig = {
  projectIcons: [
    <>
      <Link href="https://gitlab.com/librewolf-community/browser" passHref>
        <a className="text-current p-2 cursor-pointer" aria-label="GitLab">
          <Gitlab color="currentColor" size="1.4em" />
        </a>
      </Link>
      <Link href="https://gitter.im/librewolf-community/librewolf" passHref>
        <a className="text-current p-2 cursor-pointer" aria-label="Gitter">
          <Gitter color="currentColor" size="1.4em" />
        </a>
      </Link>
      <Link href="https://www.reddit.com/r/LibreWolf" passHref>
        <a className="text-current p-2 cursor-pointer" aria-label="Reddit">
          <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="1.4em"
            height="1.4em"
          >
            <path d="M 29 3 C 26.894531 3 24.433594 4.652344 24.0625 12.03125 C 24.375 12.023438 24.683594 12 25 12 C 25.351563 12 25.714844 12.019531 26.0625 12.03125 C 26.300781 7.597656 27.355469 5 29 5 C 29.703125 5 30.101563 5.382813 30.84375 6.1875 C 31.710938 7.128906 32.84375 8.351563 35.0625 8.8125 C 35.027344 8.550781 35 8.269531 35 8 C 35 7.578125 35.042969 7.179688 35.125 6.78125 C 33.75 6.40625 33.023438 5.613281 32.3125 4.84375 C 31.519531 3.984375 30.609375 3 29 3 Z M 41 4 C 38.792969 4 37 5.796875 37 8 C 37 10.203125 38.792969 12 41 12 C 43.207031 12 45 10.203125 45 8 C 45 5.796875 43.207031 4 41 4 Z M 25 14 C 12.867188 14 3 20.179688 3 29 C 3 37.820313 12.867188 45 25 45 C 37.132813 45 47 37.820313 47 29 C 47 20.179688 37.132813 14 25 14 Z M 7.5 14.9375 C 6.039063 14.9375 4.652344 15.535156 3.59375 16.59375 C 1.871094 18.316406 1.515625 20.792969 2.5 22.84375 C 4.011719 19.917969 6.613281 17.421875 9.96875 15.5625 C 9.207031 15.175781 8.363281 14.9375 7.5 14.9375 Z M 42.5 14.9375 C 41.636719 14.9375 40.792969 15.175781 40.03125 15.5625 C 43.386719 17.421875 45.988281 19.917969 47.5 22.84375 C 48.484375 20.792969 48.128906 18.316406 46.40625 16.59375 C 45.347656 15.535156 43.960938 14.9375 42.5 14.9375 Z M 17 23 C 18.65625 23 20 24.34375 20 26 C 20 27.65625 18.65625 29 17 29 C 15.34375 29 14 27.65625 14 26 C 14 24.34375 15.34375 23 17 23 Z M 33 23 C 34.65625 23 36 24.34375 36 26 C 36 27.65625 34.65625 29 33 29 C 31.34375 29 30 27.65625 30 26 C 30 24.34375 31.34375 23 33 23 Z M 16.0625 34 C 16.3125 34.042969 16.558594 34.183594 16.71875 34.40625 C 16.824219 34.554688 19.167969 37.6875 25 37.6875 C 30.910156 37.6875 33.257813 34.46875 33.28125 34.4375 C 33.597656 33.988281 34.234375 33.867188 34.6875 34.1875 C 35.136719 34.503906 35.222656 35.109375 34.90625 35.5625 C 34.789063 35.730469 31.9375 39.6875 25 39.6875 C 18.058594 39.6875 15.210938 35.730469 15.09375 35.5625 C 14.777344 35.109375 14.859375 34.503906 15.3125 34.1875 C 15.539063 34.027344 15.8125 33.957031 16.0625 34 Z" />
          </svg>
        </a>
      </Link>
    </>
  ],
  docsRepositoryBase:
    "https://gitlab.com/librewolf-community/website/-/blob/main/", // base URL for the docs repository
  titleSuffix: " – LibreWolf",
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  floatTOC: true,
  footerText: (
    <div style={{ maxWidth: 500 }}>
      <p>
        <Link href="/license-disclaimers">License and Disclaimers</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </p>
      <p>
        LibreWolf is <b>not</b> affiliated with Mozilla.
      </p>
    </div>
  ),
  footerEditLink: `Edit this page on GitLab`,
  logo: Logo,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="LibreWolf: A fork of Firefox, focused on privacy, security and freedom."
      />
      <meta name="og:title" content="LibreWolf Browser" />
      <link rel="shortcut icon" href="/icon.svg" />
    </>
  ),
  navlinks: [
    {
      title: "About",
      route: "/",
      href: "/#what-is-librewolf"
    },
    {
      title: "Docs",
      route: "/docs",
      href: "/docs/faq"
    },
    {
      title: "Installation",
      route: "/installation"
    }
  ]
};

export default themeConfig;
