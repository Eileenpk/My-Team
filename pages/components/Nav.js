import Link from "next/link";
import styles from "@/styles/nav.module.css";
import { useState } from "react";
import Image from "next/image";
import Logo from "@/public/images/logo.svg";
import GetWindowWidth from "./functions/GetWindowWidth";
export default function Nav() {
  const { width } = GetWindowWidth();
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className={`${styles.nav} mt-12 px-6 flex items-start`}>
      <div
        className={`flex items-center justify-between ${styles.navClosedContainer}`}
      >
        <Image src={Logo} width={128} height={32} alt="My Team" />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="17"
          alt="open navigation menu"
          role="button"
          className={` ${styles.hamburgerMenu}`}
          onClick={() => setIsNavOpen(true)}
        >
          <g fill="#FFF" fillRule="evenodd">
            <path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z" />
          </g>
        </svg>
      </div>

      <div
        aria-hidden={isNavOpen ? "false" : "true"}
        className={
          !isNavOpen ? `${styles.navClosed}` : ` ${styles.navScreenOverLay}`
        }
      >
        <div className={`pt-14 pl-12 pr-6 ${styles.navContainer}`}>
          <svg
            className={`self-end ${styles.closeMenu}`}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="17"
            alt="Close navigation menu"
            role="button"
            onClick={() => setIsNavOpen(false)}
          >
            <path
              fill="#FFF"
              fillRule="evenodd"
              d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
            />
          </svg>

          <div className={`flex flex-col gap-6 ${styles.navLinks}`}>
            <Link className={`${styles.link} font-semibold link`} href="/">
              home
            </Link>
            <Link className={`${styles.link} font-semibold link`} href="/About">
              about
            </Link>
            <Link
              className={`mt-3 ${styles.link} ${styles.button} font-semibold button`}
              href="/Contact"
            >
              contact us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
