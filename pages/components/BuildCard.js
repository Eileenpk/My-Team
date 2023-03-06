import Image from "next/image"
export default function BuildCard ({heading, text, src}) {
    return (
        <div className={`flex flex-col items-center gap-2`}>
            <Image src={src} width={72} height={72} alt='' />
            <h3 className={`mt-2`}>{heading}</h3>
            <p>{text}</p>
        </div>
    )
}