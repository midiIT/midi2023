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
import { DocumentPlusIcon } from "@heroicons/react/24/solid";

const sections: string[] = ["events", "team", "sponsors", "articles"];

export default function Carousel() {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    breakpoints: { "(min-width: 640px)": { active: false } },
    axis: "x",
    loop: true,
    skipSnaps: false,
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
            sel.classList.remove("invisible");
            sel.classList.remove("opacity-0");
          }, 0);
        }
      }
    });
  }, [selectedIndex]);

  return (
    <div className="w-full bg-slate-400 py-4 px-8 sm:inline-grid sm:h-screen sm:w-1/4 md:w-48">
      <div className="overflow-hidden sm:overflow-y-hidden" ref={emblaRef}>
        <div className="flex flex-row sm:h-full sm:flex-col sm:justify-evenly sm:gap-12">
          <div className="mx-4 flex w-full flex-none flex-col items-center sm:mx-0">
            <div
              onClick={() => {
                setSelectedIndex([0]);
              }}
              className="slide-container z-10 flex cursor-pointer flex-col items-center justify-between"
            >
              <CalendarDaysIcon className="h-32 text-white sm:h-24"></CalendarDaysIcon>
              <h2 className="my-4 text-center text-4xl text-white sm:text-2xl">
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
          <div className="mx-4 flex w-full flex-none flex-col items-center sm:mx-0">
            <div
              onClick={() => setSelectedIndex([1])}
              className="slide-container z-10 flex cursor-pointer flex-col items-center justify-between"
            >
              <WrenchScrewdriverIcon className="h-32 text-gray-300 sm:h-24"></WrenchScrewdriverIcon>
              <h2 className="my-4 text-center text-4xl text-white sm:text-2xl">
                Komanda
              </h2>
            </div>
            <Navigationbuttons
              scrollNext={scrollNext}
              scrollPrev={scrollPrev}
            />
          </div>
          <div className="mx-4 flex w-full flex-none flex-col items-center sm:mx-0">
            <div
              onClick={() => setSelectedIndex([2])}
              className="slide-container z-10 flex cursor-pointer flex-col items-center justify-between"
            >
              <HeartIcon className="h-32 text-red-700 sm:h-24"></HeartIcon>
              <h2 className="my-4 text-center text-4xl text-white sm:text-2xl">
                Rėmėjai
              </h2>
            </div>
            <Navigationbuttons
              scrollNext={scrollNext}
              scrollPrev={scrollPrev}
            />
          </div>
          <div className="mx-4 flex w-full flex-none flex-col items-center sm:mx-0">
            <div
              onClick={() => setSelectedIndex([3])}
              className="slide-container z-10 flex cursor-pointer flex-col items-center justify-between"
            >
              <PresentationChartLineIcon className="h-32 text-white sm:h-24"></PresentationChartLineIcon>
              <h2 className="my-4 text-center text-4xl text-white sm:text-2xl">
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
        <div className="mt-2 flex justify-center space-x-2 sm:hidden">
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
