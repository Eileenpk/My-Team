import styles from "@/styles/about.module.css"
export default function About () {
    return (
        <>
        <header className={`flex flex-col items-center pt-20 pb-[108px] px-[11%] md:py-28 xl:py-[120px] xl:flex-row justify-between ${styles.header}`}>
        <h1 className={`mb-4 ${styles.heading}`}>About</h1>
        <p className={` ${styles.headingText}`}>
            <span className={styles.bar}></span>We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.</p>
        </header>
        <main>

        </main>
        </>
        
        
    )
}