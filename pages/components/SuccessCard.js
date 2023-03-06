import Image from "next/image";
import styles from "@/styles/successCard.module.css";
export default function SuccessCard({ src, text, name, position }) {
  return (
    <div className={`flex flex-col items-center pt-9 mb-12 ${styles.quote}`}>
      <p className={`mb-4`}>{text}</p>
      <h3 className={`mb-[2px] ${styles.heading3}`}>{name}</h3>
      <p className={`mb-4 ${styles.position}`}>{position}</p>
      <Image src={src} width={62} height={62} alt={`${name}'s avatar`} className={`${styles.avatar}`} />
    </div>
  );
}
