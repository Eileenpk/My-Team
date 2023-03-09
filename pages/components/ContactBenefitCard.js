import Image from "next/image"
export default function ContactBenefitCard ({image, info}) {
    return (
        <section className={`flex items-center justify-start mb-8 px-[6.5%] xl:px-0`}>
            <Image src={image} width={72} height={72} className={`mr-6`} alt=''/>
            <h3>{info}</h3>
        </section>
    )
}