import styles from "@/styles/about.module.css";
import GetStarted from "./components/GetStarted";
import DirectorCard from "./components/DirectorCard";
export default function About() {
  return (
    <>
      <header
        className={`flex flex-col items-center pt-20 pb-[108px] px-[11%] md:py-28 xl:py-[120px] xl:flex-row justify-between ${styles.header}`}
      >
        <h1 className={`mb-4 ${styles.heading}`}>About</h1>
        <p className={` ${styles.headingText}`}>
          <span className={styles.bar}></span>We help companies build dynamic
          teams made up of top global talent. Using our network of passionate
          professionals we drive innovation and deliver incredible outcomes.
          Talented, diverse teams shape the best products and experiences. We’ll
          bring those teams to you.
        </p>
      </header>
      <main>
        <section
          className={` px-[6%] pt-[88px] pb-[116px] ${styles.directorSection}`}
        >
          <h2 className={`mb-12 ${styles.heading2}`}>Meet the directors</h2>
          <div className={`${styles.directorCardContainer} flex justify-center flex-wrap gap-3 max-w-[1110px] mx-auto`}>
            <DirectorCard
              name="Nikita Marks"
              title="Founder & CEO"
              src="/images/avatar-nikita.jpg"
              text=" “It always amazes me how much talent there is in every corner of the globe.”"
            />
            <DirectorCard
              name="Cristian Duncan"
              title="Co-founder & COO"
              src="/images/avatar-christian.jpg"
              text=" “Distributed teams required unique processes. You need to approach work in a new way.”"
            />
            <DirectorCard
              name="Cruz Hamer"
              title="Co-founder & CTO"
              src="/images/avatar-cruz.jpg"
              text="“Technology is at the forefront of enabling distributed teams. That's where we come in.”"
            />
            <DirectorCard
              name="Drake Heaton"
              title="Business Development Lead"
              src="/images/avatar-drake.jpg"
              text="“Hiring similar people from similar backgrounds is a surefire way to stunt innovation.”"
            />
            <DirectorCard
              name="Griffin Wise"
              title="Lead Marketing"
              src="/images/avatar-griffin.jpg"
              text="Unique perspectives shape unique products, which is what you need to survive these days.”"
            />
            <DirectorCard
              name="Aden Allan"
              title="Head of Talent"
              src="/images/avatar-aden.jpg"
              text="“Empowered teams create truly amazing products. Set the north star and let them follow it.”"
            />
          </div>
        </section>

        <GetStarted />
      </main>
    </>
  );
}
