import Image from "next/image";
import Sponsor from "../Sponsor";

var sponsors = [
  {
    href: "https://lt.asseco.com/",
    width: 1500,
    height: 1500,
    src: "/sponsors/asseco.png",
    alt: "asseco logotipas",
  },
  {
    href: "https://bankerait.lt/",
    width: 1500,
    height: 1500,
    src: "/sponsors/bankera.svg",
    alt: "Bankera logotipas",
  },
  {
    href: "https://www.bentley.com/",
    width: 1500,
    height: 1500,
    src: "/sponsors/bentley.png",
    alt: "Bentley logo",
  },
  {
    href: "https://www.devbridge.com/",
    width: 1500,
    height: 1500,
    src: "/sponsors/devbridge.png",
    alt: "Devbridge logotipas",
  },
  {
    href: "https://dreamcubator.club/",
    width: 1500,
    height: 1500,
    src: "/sponsors/dreamcubator.png",
    alt: "DreamCubator logotipas",
  },
  {
    href: "https://www.stat.gov.lt/",
    width: 1500,
    height: 1500,
    src: "/sponsors/ls.svg",
    alt: "Lietuvos statistikos logotipas",
  },
  {
    href: "https://www.luminor.lt/",
    width: 1500,
    height: 1500,
    src: "/sponsors/luminor.svg",
    alt: "Luminor logotipas",
  },
  {
    href: "http://www.nordcurrent.com/",
    width: 1500,
    height: 1500,
    src: "/sponsors/nordcurrent.png",
    alt: "Nordcurrent logotipas",
  },
  {
    href: "https://www.stat.gov.lt/",
    width: 1500,
    height: 1500,
    src: "/sponsors/ls.jpg",
    alt: "Lietuvos statistikos logotipas",
  },
  {
    href: "https://www.stat.gov.lt/",
    width: 1500,
    height: 1500,
    src: "/sponsors/ls.jpg",
    alt: "Lietuvos statistikos logotipas",
  },
];

export default function SponsorsSection() {
  return (
    <div>
      <p className="text-center text-7xl">Auksiniai rėmėjai</p>
      <div className="m-8 grid grid-cols-4 place-items-center gap-16 align-middle">
        {sponsors.map((sponsor) => (
          <Sponsor
            href={sponsor.href}
            width={sponsor.width}
            height={sponsor.height}
            src={sponsor.src}
            alt={sponsor.alt}
          ></Sponsor>
        ))}
        <div></div>
      </div>
      <p className="text-center text-7xl">Sidabriniai rėmėjai</p>
      <p className="text-center text-7xl">Bronziniai rėmėjai</p>
      <p className="text-center text-7xl">Partneriai</p>
    </div>
  );
}
