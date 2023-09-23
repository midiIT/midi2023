import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useCallback } from "react";
import {
  HeartIcon,
  CalendarDaysIcon,
  WrenchScrewdriverIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";
import Navigationbuttons from "../components/NavigationButtons";

const sections: string[] = ["events", "team", "sponsors", "articles"];

export default function Carousel() {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    breakpoints: { "(min-width: 768px)": { active: false } },
    axis: "x",
    loop: true,
    skipSnaps: true,
    speed: 20,
    inViewThreshold: 0.7,
  });

  const [currentView, setCurrentView] = useState("events");
  const [selectedIndex, setSelectedIndex] = useState<number[]>([0]);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla]
  );

  const scrollPrev = useCallback(() => {
    if (embla) embla.scrollPrev();
  }, [embla]);

  const scrollNext = useCallback(() => {
    if (embla) embla.scrollNext();
  }, [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex([embla.selectedScrollSnap()]);
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    const scrollSnaps = embla.scrollSnapList().map(() => {
      return null as never;
    });
    setScrollSnaps(scrollSnaps);
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  useEffect(() => {
    sections.forEach((element) => {
      var sel = document.querySelector("#" + element);
      if (sel !== null) {
        if (sel.id !== sections[selectedIndex[0]]) {
          if (
            !sel.classList.contains("hidden") &&
            !sel.classList.contains("invisible")
          ) {
            sel.classList.add("hidden");
            sel.classList.add("invisible");
            sel.classList.add("opacity-0");
          }
        } else {
          sel.classList.remove("hidden");
          window.setTimeout(function () {
            if (sel) {
              sel.classList.remove("invisible");
              sel.classList.remove("opacity-0");
            }
          }, 0);
        }
      }
    });
  }, [selectedIndex]);

  return (
    <div className="z-50 w-full bg-gradient-to-b from-slate-800 to-slate-700/80 py-4 px-8 backdrop-blur-sm md:fixed md:inline-grid md:h-screen md:w-48">
      <Image
        alt="MIDI logotipas"
        src="/MIDIlogo.webp"
        height="1250"
        width="1250"
        priority
        className="m-auto h-48 w-auto pb-10 md:mr-0 md:-ml-2 md:mt-0 md:h-auto short:ml-1 short:h-36"
      ></Image>
      <div
        className="overflow-hidden md:overflow-y-hidden short:overflow-y-auto"
        ref={emblaRef}
      >
        <div className="flex flex-row md:h-full md:flex-col md:justify-evenly md:gap-12 short:gap-0">
          <div className="mx-4 flex w-full flex-none flex-col items-center md:mx-0">
            <div
              onClick={() => {
                setSelectedIndex([0]);
              }}
              className="slide-container z-10 flex cursor-pointer flex-col items-center justify-between"
            >
              <CalendarDaysIcon className="h-32 text-white md:h-20 short:h-14"></CalendarDaysIcon>
              <h2 className="my-1 text-center text-4xl text-white md:text-2xl">
                Renginiai
              </h2>
            </div>
            <Navigationbuttons
              scrollNext={scrollNext}
              scrollPrev={scrollPrev}
            />
            <Navigationbuttons
              scrollNext={scrollNext}
              scrollPrev={scrollPrev}
            />
          </div>
          <div className="mx-4 flex w-full flex-none flex-col items-center md:mx-0">
            <div
              onClick={() => setSelectedIndex([1])}
              className="slide-container z-10 flex cursor-pointer flex-col items-center justify-between"
            >
              <WrenchScrewdriverIcon className="h-32 text-gray-300 md:h-20 short:h-14"></WrenchScrewdriverIcon>
              <h2 className="my-1 text-center text-4xl text-white md:text-2xl">
                Komanda
              </h2>
            </div>
            <Navigationbuttons
              scrollNext={scrollNext}
              scrollPrev={scrollPrev}
            />
          </div>
          <div className="mx-4 flex w-full flex-none flex-col items-center md:mx-0">
            <div
              onClick={() => setSelectedIndex([2])}
              className="slide-container z-10 flex cursor-pointer flex-col items-center justify-between"
            >
              <HeartIcon className="h-32 text-red-700 md:h-20 short:h-14"></HeartIcon>
              <h2 className="my-1 text-center text-4xl text-white md:text-2xl">
                Rėmėjai
              </h2>
            </div>
            <Navigationbuttons
              scrollNext={scrollNext}
              scrollPrev={scrollPrev}
            />
          </div>
          <div className="mx-4 flex w-full flex-none flex-col items-center md:mx-0">
            <div
              onClick={() => setSelectedIndex([3])}
              className="slide-container z-10 flex cursor-pointer flex-col items-center justify-between"
            >
              <PresentationChartLineIcon className="h-32 text-white md:h-20 short:h-14"></PresentationChartLineIcon>
              <h2 className="my-1 text-center text-4xl text-white md:text-2xl">
                Rėmėjų straipsniai
              </h2>
            </div>
            <Navigationbuttons
              scrollNext={scrollNext}
              scrollPrev={scrollPrev}
            />
          </div>
        </div>
      </div>
      {
        <div className="mt-2 flex justify-center space-x-2 md:hidden">
          {scrollSnaps.map((_, idx) => (
            <button
              className={`h-2 w-6 rounded-sm ${
                idx === selectedIndex[0] ? "bg-yellow-500" : "bg-gray-300"
              }`}
              key={idx}
              onClick={() => scrollTo(idx)}
            />
          ))}
        </div>
      }
    </div>
  );
}
