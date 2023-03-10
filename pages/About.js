import Head from "next/head";
import styles from "@/styles/about.module.css";
import GetStarted from "./components/GetStarted";
import DirectorCard from "./components/DirectorCard";
import Image from "next/image";
import theVerge from '/public/images/logo-the-verge.png'
import theJakarta from '/public/images/logo-jakarta-post.png'
import theGuardian from '/public/images/logo-the-guardian.png'
import techradar from '/public/images/logo-tech-radar.png'
import gadgets from '/public/images/logo-gadgets-now.png'
export default function About() {
  return (
    <>
          <Head>
        <title>
        About MyTeam - Building Dynamic Teams with Top Global Talent
        </title>
        <meta
          name="description"
          content="At MyTeam, we believe that a strong team is the foundation of any successful business. That's why we're dedicated to providing our users with the tools and resources they need to build a high-performing team that meets their unique needs. Whether you're looking to expand your team in a new market, recruit top talent for a particular project, or simply enhance your company's overall performance, we're here to help."
        />
        <meta
          property="og:title"
          content="About MyTeam - Building Dynamic Teams with Top Global Talent for Your Company"
        />
        <meta
          property="og:description"
          content="At MyTeam, we believe that a strong team is the foundation of any successful business. That's why we're dedicated to providing our users with the tools and resources they need to build a high-performing team that meets their unique needs."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header
        className={`flex flex-col items-center pt-20 pb-[108px] px-[11%] md:py-28 xl:py-[120px] xl:flex-row justify-between ${styles.header}`}
      >
        <h1 className={`mb-4 ${styles.heading}`}>About</h1>
        <p className={`${styles.headingText}`}>
          <span className={styles.bar}></span>We help companies build dynamic
          teams made up of top global talent. Using our network of passionate
          professionals we drive innovation and deliver incredible outcomes.
          Talented, diverse teams shape the best products and experiences. We???ll
          bring those teams to you.
        </p>
      </header>
      <main>
        <section
          className={`px-[6%] pt-[88px] pb-[116px] ${styles.directorSection}`}
        >
          <h2 className={`mb-12 ${styles.heading2}`}>Meet the directors</h2>
          <div className={`${styles.directorCardContainer} flex justify-center flex-wrap gap-3 max-w-[1110px] mx-auto`}>
            <DirectorCard
              name="Nikita Marks"
              title="Founder & CEO"
              src="/images/avatar-nikita.jpg"
              text=" ???It always amazes me how much talent there is in every corner of the globe.???"
            />
            <DirectorCard
              name="Cristian Duncan"
              title="Co-founder & COO"
              src="/images/avatar-christian.jpg"
              text=" ???Distributed teams required unique processes. You need to approach work in a new way.???"
            />
            <DirectorCard
              name="Cruz Hamer"
              title="Co-founder & CTO"
              src="/images/avatar-cruz.jpg"
              text="???Technology is at the forefront of enabling distributed teams. That's where we come in.???"
            />
            <DirectorCard
              name="Drake Heaton"
              title="Business Development Lead"
              src="/images/avatar-drake.jpg"
              text="???Hiring similar people from similar backgrounds is a surefire way to stunt innovation.???"
            />
            <DirectorCard
              name="Griffin Wise"
              title="Lead Marketing"
              src="/images/avatar-griffin.jpg"
              text="Unique perspectives shape unique products, which is what you need to survive these days.???"
            />
            <DirectorCard
              name="Aden Allan"
              title="Head of Talent"
              src="/images/avatar-aden.jpg"
              text="???Empowered teams create truly amazing products. Set the north star and let them follow it.???"
            />
          </div>
        </section>
        <section className={`py-[88px] lg:py-[100px] ${styles.clients}`}>
          <h2 className={`mb-16 lg:mb-12 ${styles.heading2}`}>Some of our clients</h2>
          <div className={`flex flex-col items-center gap-[50px] lg:flex-row lg:justify-center`}>
            <Image src={theVerge} width={162} height={24} alt='The Verge'/>
            <Image src={theJakarta} width={162} height={24} alt='The Jakarta Post'/>
            <Image src={theGuardian} width={162} height={24} alt='The Guardian'/>
            <Image src={techradar} width={162} height={24} alt='Techradar'/>
            <Image src={gadgets} width={162} height={24} alt='Gadgets Now'/>
          </div>
        </section>
        <GetStarted />
      </main>
    </>
  );
}
