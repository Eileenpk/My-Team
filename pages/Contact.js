import styles from '@/styles/contact.module.css'
import ContactBenefitCard from './components/ContactBenefitCard';
export default function Contact() {
  return (
    <>
      <header className={`pt-20 pb-14  ${styles.header}`}>
        <h1 className={`mb-4 ${styles.heading}`}>Contact</h1>
        <h2 className={`mb-10 ${styles.headerText}`}>Ask us about</h2>
        <ContactBenefitCard image='./images/icon-person.svg' info='The quality of our talent network' />
        <ContactBenefitCard image='./images/icon-cog.svg' info='Usage & implementation of our software' />
        <ContactBenefitCard image='./images/icon-chart.svg' info='How we help drive innovation' />
      </header>
    </>
  );
}
