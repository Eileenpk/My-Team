import Head from "next/head";
import styles from "@/styles/Home.module.css";
import BuildCard from "./components/BuildCard";
import SuccessCard from "./components/SuccessCard";
import GetStarted from "./components/GetStarted";
export default function Home() {
  return (
    <>
      <Head>
        <title>
          MyTeam - Building Dynamic Teams with Top Global Talent for Your Company
        </title>
        <meta
          name="description"
          content="MyTeam is a cutting-edge platform designed to help companies build high-performing teams comprised of the best global talent available. Our platform offers a seamless and user-friendly experience for businesses seeking to optimize their workforce and achieve their organizational goals. Whether you're looking to recruit top talent for a particular project, expand your team in a new market, or simply enhance your company's overall performance, MyTeam has you covered."
        />
        <meta
          property="og:title"
          content="MyTeam - Building Dynamic Teams with Top Global Talent for Your Company"
        />
        <meta
          property="og:description"
          content="MyTeam is a platform designed to help companies build high-performing teams comprised of top global talent. Our innovative tools and resources enable businesses to connect with skilled professionals, vet candidates thoroughly, and streamline the hiring process. With MyTeam, you can build a dynamic team that meets your unique needs and propels your business forward."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header
        className={`pt-20 px-6 flex flex-col items-center xl:flex-row xl:pt-[129px] xl:pb-[250px] xl:items-end ${styles.header}`}
      >
        <h1 className={`mb-5 md:mb-6 xl:mb-0 xl:mr-[30px] ${styles.heading}`}>
          Find the <br /> best{" "}
          <span className={`${styles.headingSpan}`}>talent</span>
        </h1>

        <p
          className={`mb-48 md:mb-64 xl:mb-0 xl:ml-auto ${styles.headingText}`}
        >
          <span className={styles.bar}></span>
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </p>
      </header>
      <main className={`${styles.main}`}>
        <section className={`pt-16 px-[6%] w-[100%] ${styles.build}`}>
          <div
            className={`xl:flex xl:w-[100%] xl:py-[80px] ${styles.buildContainer}`}
          >
            <div className={` ${styles.mainBar}`}></div>
            <h2
              className={`mb-14 w-60 md:w-[100%] xl:w-[445px] xl:ml-[-50px] xl:mr-32 mt-8 xl:mt-14 ${styles.heading2}`}
            >
              Build & manage distributed teams like no one else.
            </h2>
            <div className={`xl:mt-14`}>
              <BuildCard
                src="./images/icon-person.svg"
                heading="Experienced Individuals"
                text="Our network is made up of highly experienced professionals who are passionate about what they do."
              />

              <BuildCard
                src="./images/icon-cog.svg"
                heading="Easy to Implement"
                text="Our processes have been refined over years of implementation meaning our teams always deliver."
              />

              <BuildCard
                src="./images/icon-chart.svg"
                heading="Enhanced Productivity"
                text="Our customized platform with in-built analytics helps you manage your distributed teams."
              />
            </div>
          </div>
        </section>

        <section
          className={`pt-[140px] pb-[116px] px-[6%] md:flex md:flex-col md:items-center ${styles.delivering}`}
        >
          <h2
            className={`mb-12 md:w-[573px] xl:w-[932px] ${styles.deliveringHeading2}`}
          >
            Delivering real results for top companies. Some of our{" "}
            <span className={`${styles.deliveringHeading2Span}`}>
              success stories.
            </span>
          </h2>
          <section className={`xl:flex xl:gap-[30px] ${styles.quoteSection}`}>
            <SuccessCard
              src="/images/avatar-kady.jpg"
              text=" “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”"
              name="Kady Baker"
              position="Product Manager at Bookmark"
            />
            <SuccessCard
              src="/images/avatar-aiysha.jpg"
              text="“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”"
              name="Aiysha Reese"
              position="Founder of Manage"
            />
            <SuccessCard
              src="/images/avatar-arthur.jpg"
              text="“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”"
              name="Arthur Clarke"
              position="Co-founder of MyPhysio"
            />
          </section>
        </section>

        <GetStarted />
      </main>
    </>
  );
}
