import Image from "next/image"
export default function Sponsor(props: {
    href: string,
    width: number,
    height: number,
    src: string,
    alt: string
}){
    return(
    <a target="_blank" href={props.href}><Image width={props.width} height={props.height} src={props.src} alt={props.alt}></Image></a>
    )
}