import Sponsor from "../Sponsor";
import Asseco from "public/sponsors/asseco.png";
import Bankera from "public/sponsors/bankera.svg";
import Wargaming from "public/sponsors/wargaming.png";
import Telia from "public/sponsors/telia.svg";
import WU from "public/sponsors/westernunion.png";
import DreamCubator from "public/sponsors/dreamcubator.png";
import Teltonika from "public/sponsors/teltonika.svg";
import godDev from "public/sponsors/goddev.svg";
import Bentley from "public/sponsors/bentley.png";
import DevBridge from "public/sponsors/devbridge.png";
import NordCurrent from "public/sponsors/nordcurrent.png";
import MobilePay from "public/sponsors/mobilepay.png";
import Luminor from "public/sponsors/luminor.svg";
import TestDevLab from "public/sponsors/testdevlab.png";
import MadeInVilnius from "public/sponsors/miv.png";

var goldenSponsors = [
  {
    href: "https://lt.asseco.com/",
    src: Asseco,
    alt: "asseco logotipas",
    className: "basis-full md:basis-1/3 scale-125",
  },
  {
    href: "https://bankerait.lt/",
    src: Bankera,
    alt: "Bankera logotipas",
    className: "basis-full md:basis-1/3 scale-125",
  },
];

var silverSponsors = [
  {
    href: "https://eu.wargaming.net/",
    src: Wargaming,
    alt: "Wargaming logotipas",
    className: "invert basis-1/4 scale-75 hidden",
  },
  {
    href: "https://www.telia.lt/",
    src: Telia,
    alt: "Telia logotipas",
    className: "basis-1/4 scale-75",
  },
  {
    href: "https://www.westernunion.com/lt",
    src: WU,
    alt: "Western Union logotipas",
    className: "basis-1/4 scale-75",
  },
  {
    href: "https://dreamcubator.club/lt/",
    src: DreamCubator,
    alt: "DreamCubator logotipas",
    className: "basis-1/4 scale-75",
  },
  {
    href: "https://teltonika-iot-group.com/",
    src: Teltonika,
    alt: "Teltonika logotipas",
    className: "basis-1/4 scale-75",
  },
  {
    href: "https://www.god.de/en/about-us/god-lithuania/",
    src: godDev,
    alt: "GOD dev Lietuva logotipas",
    className: "basis-1/4 scale-75",
  },
  {
    href: "https://www.mobilepaygroup.com/about-us",
    src: MobilePay,
    alt: "MobilePay logotipas",
    className: "basis-1/4",
  },
];

var bronzeSponsors = [
  {
    href: "https://www.bentley.com/",
    src: Bentley,
    alt: "Bentley logo",
    className: "basis-1/6 scale-75",
  },
  {
    href: "https://www.devbridge.com/",
    src: DevBridge,
    alt: "Devbridge logotipas",
    className: "basis-1/6 scale-75",
  },
  {
    href: "http://www.nordcurrent.com/",
    src: NordCurrent,
    alt: "Nordcurrent logotipas",
    className: "basis-1/6 scale-[45%]",
  },
  {
    href: "https://www.luminor.lt/",
    src: Luminor,
    alt: "Luminor logotipas",
    className: "basis-1/6 scale-75",
  },
  {
    href: "https://www.testdevlab.com/",
    src: TestDevLab,
    alt: "TestDevLab logotipas",
    className: "basis-1/6 scale-75",
  },
];

var partners = [
  {
    href: "https://madeinvilnius.lt/",
    src: MadeInVilnius,
    alt: "MadeInVilnius logotipas",
    className: "scale-75",
  },
];

export default function SponsorsSection() {
  return (
    <div>
      <p className="text-center text-5xl md:text-7xl">Auksiniai rėmėjai</p>
      <div className="mx-16 flex flex-wrap place-items-center justify-around justify-items-center gap-8 align-middle">
        {goldenSponsors.map((sponsor, idx) => (
          <Sponsor
            href={sponsor.href}
            src={sponsor.src}
            alt={sponsor.alt}
            key={idx}
            className={sponsor.className}
          ></Sponsor>
        ))}
      </div>
      <div className="my-4 h-2 bg-slate-600/30"></div>
      <p className="text-center text-5xl md:text-7xl">Sidabriniai rėmėjai</p>
      <div className="mx-16 mt-8 flex flex-wrap items-center justify-around justify-items-stretch gap-8 align-middle">
        {silverSponsors.map((sponsor, idx) => (
          <Sponsor
            href={sponsor.href}
            src={sponsor.src}
            alt={sponsor.alt}
            key={idx}
            className={sponsor.className}
          ></Sponsor>
        ))}
      </div>
      <div className="my-4 h-2 bg-slate-600/30"></div>
      <p className="text-center text-5xl md:text-7xl">Bronziniai rėmėjai</p>
      <div className="m-8 flex flex-wrap place-items-center justify-around justify-items-center gap-8 align-middle">
        {bronzeSponsors.map((sponsor, idx) => (
          <Sponsor
            href={sponsor.href}
            src={sponsor.src}
            alt={sponsor.alt}
            key={idx}
            className={sponsor.className}
          ></Sponsor>
        ))}
      </div>
      <div className="my-4 h-2 bg-slate-600/30"></div>
      <p className="text-center text-5xl md:text-7xl">Partneriai</p>
      <div className="m-8 flex flex-wrap place-items-center justify-around justify-items-center gap-8 align-middle">
        {partners.map((sponsor, idx) => (
          <Sponsor
            href={sponsor.href}
            src={sponsor.src}
            alt={sponsor.alt}
            key={idx}
            className={sponsor.className}
          ></Sponsor>
        ))}
      </div>
    </div>
  );
}
