import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/nav.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/public/images/logo.svg";
import GetWindowWidth from "./functions/GetWindowWidth";
export default function Nav() {
  // window width logic
  const { width } = GetWindowWidth();

  useEffect(() => {
    setIsNavOpen(false);
  }, [width > 768]);

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav
      className={`${styles.nav} mt-12 xl:mt-[73px] px-6 md:px-10 flex items-start md:mt-16`}
    >
      <div
        className={`flex items-center justify-between ${styles.navClosedContainer}`}
      >
        <Image
          src={Logo}
          width={128}
          height={32}
          alt="My Team"
          className={`mr-12 ${styles.logo}`}
        />

        {width < 768 && (
          <svg
            aria-labelledby="open"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="17"
            role="button"
            className={`${styles.hamburgerMenu}`}
            onClick={() => setIsNavOpen(true)}
          >
            <title id="open" lang="en">
              open navigation menu
            </title>
            <g fill="#FFF" fillRule="evenodd">
              <path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z" />
            </g>
          </svg>
        )}

        {width > 768 ? (
          <div className={`flex items-center gap-6 ${styles.navLinks}`}>
            <Link className={`${styles.link} font-semibold link`} href="/">
              home
            </Link>
            <Link className={`${styles.link} font-semibold link`} href="/About">
              about
            </Link>
            <Link
              className={`mt-0 ml-auto ${styles.link} ${styles.button} font-semibold button`}
              href="/Contact"
            >
              contact us
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>

      <div
        aria-hidden={isNavOpen ? "false" : "true"}
        className={
          !isNavOpen ? `${styles.navClosed}` : ` ${styles.navScreenOverLay}`
        }
      >
        <div className={`pt-14 pl-12 pr-6 ${styles.navContainer}`}>
          <svg
            aria-labelledby="Close"
            className={`self-end ${styles.closeMenu}`}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="17"
            role="button"
            onClick={() => setIsNavOpen(false)}
          >
            <title id="Close" lang="en">
              Close navigation menu
            </title>
            <path
              fill="#FFF"
              fillRule="evenodd"
              d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
            />
          </svg>

          <div className={`flex flex-col gap-6 ${styles.navLinks}`}>
            <Link
              className={`${styles.link} font-semibold link`}
              href="/"
              onClick={() => setIsNavOpen(false)}
            >
              home
            </Link>
            <Link
              className={`${styles.link} font-semibold link`}
              href="/About"
              onClick={() => setIsNavOpen(false)}
            >
              about
            </Link>
            <Link
              className={`mt-3 ${styles.link} ${styles.button} font-semibold button`}
              href="/Contact"
              onClick={() => setIsNavOpen(false)}
            >
              contact us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
