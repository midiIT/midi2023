import Image from "next/image";
import { StaticImageData } from "next/image";

export default function Sponsor(props: {
  href: string;
  src: StaticImageData;
  alt: string;
  key?: any;
  className?: string;
}) {
  return (
    <a target="_blank" href={props.href} className={props.className}>
      <Image src={props.src} alt={props.alt}></Image>
    </a>
  );
}
