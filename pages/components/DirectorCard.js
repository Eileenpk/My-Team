import Image from "next/image";
import styles from "@/styles/directorCard.module.css";
import { useState } from "react";
export default function DirectorCard({ name, title, text, src }) {

  const [isInfoShown, setIsInfoShown] = useState(false);
  return (
    <div className={`mb-14 flex flex-col items-center w-[327px] md:w-[281px] xl:w-[350px] ${styles.directorCard}`}>
      {!isInfoShown && <Image
        src={src}
        height={96}
        width={96}
        alt={`${name}'s avatar`}
        className={`mt-8 mb-4 ${styles.avatar}`}
      />}
      <h3 className={isInfoShown ? `mb-2 mt-8 ${styles.heading3}` : ` ${styles.heading3}`}>{name}</h3>
     {!isInfoShown && <p className={` ${styles.title}`}>{title}</p>}
      {isInfoShown && (
        <div className={`flex flex-col items-center px-[14%] ${styles.info}`}>
          <p>{text}</p>

          <div className={`flex mt-6 gap-4`}>
            <a href="https://twitter.com/?lang=en" aria-label="Open Twitter">
              <svg
                className={`${styles.socialIcon}`}
                alt="Twitter icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="20"
              >
                <path
                  fill="#FFF"
                  d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
                />
              </svg>
            </a>
            <a href="https://www.linkedin.com" aria-label="Open LinkedIn">
              <svg
                className={`${styles.socialIcon}`}
                alt="LinkedIn icon"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
              >
                <path
                  fill="#FFF"
                  d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"
                />
              </svg>
            </a>
          </div>
        </div>
      )}

      <button
        className={`flex items-center justify-center ${
          isInfoShown
            ? `${styles.lightBtn} ${styles.button}`
            : `${styles.button}`
        }`}
        aria-label={`${isInfoShown ? "Close" : "Open"} what ${name} had to say`}
        onClick={() => setIsInfoShown(!isInfoShown)}
      >
        {isInfoShown ? (
          <svg
            className={`${styles.closeIcon}`}
            alt={`Close icon`}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="17"
          >
            <path
              fill="#FFF"
              fill-rule="evenodd"
              d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
            />
          </svg>
        ) : (
          <svg
            className={`${styles.closeIcon}`}
            alt={`Open icon`}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
          >
            <path
              fill="#012F34"
              fill-rule="evenodd"
              d="M10 0v5.999L16 6v4h-6v6H6v-6H0V6h6V0h4z"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
