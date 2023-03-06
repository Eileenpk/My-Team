import Image from "next/image"
import styles from "@/styles/Home.module.css"
export default function BuildCard ({heading, text, src}) {
    return (
        <div className={`flex flex-col items-center xl:justify-start gap-2 mb-12 xl:h-24 flex-wrap`}>
            <Image src={src} width={72} height={72} alt='' />
            <h3 className={`mt-2 xl:mt-0 xl:self-start xl:ml-6 ${styles.heading3}`}>{heading}</h3>
            <p className={` xl:self-start xl:text-left xl:w-[445px] xl:ml-6`}>{text}</p>
        </div>
    )
}