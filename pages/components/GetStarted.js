import styles from "@/styles/getStarted.module.css";
import Link from "next/link";

export default function GetStarted() {
  return (
    <section className={` py-20 md:flex ${styles.getStarted}`}>
      <h2 className={`mb-6 ${styles.heading}`}>Ready to get started?</h2>
      <Link href="/Contact" className={`button m-auto mb-6 ${styles.button}`}>
        contact us
      </Link>
    </section>
  );
}
