import { useEffect, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function Nav() {
  const { width, height } = useWindowDimensions();
  var currentPanels: number = 4;

  const [isAtBottom, setIsAtBottom] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (height !== undefined) {
        var selector: number = Math.round(window.scrollY / height + 1);
        for (let i = 1; i <= currentPanels; i++)
          document.getElementById(i.toString())?.classList.remove("bg-white");
        var element = document.getElementById(selector.toString());
        element?.classList.add("bg-white");
        element?.classList.remove("bg-transparent");
        if (window.scrollY + window.innerHeight >= height * currentPanels) {
          setIsAtBottom(true);
        } else {
          setIsAtBottom(false);
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [height]);

  function handleScrollClick() {
    if (height !== undefined) {
      for (let i = 1; i <= currentPanels; i++) {
        if (document.documentElement.scrollTop < height * i) {
          window.scrollTo({ top: height * i, behavior: "smooth" });
          break;
        }
      }
    }
  }

  return (
    <div>
      <div className="fixed bottom-2 right-4 z-50 animate-[bounce_4s_ease-in-out_infinite] rounded-full border-4 border-white px-2 pb-3 text-5xl text-white duration-200 ease-linear hover:scale-125 sm:text-6xl">
        {!isAtBottom ? (
          <div onClick={handleScrollClick} className="select-none">
            &or;
          </div>
        ) : (
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="select-none"
          >
            &and;
          </div>
        )}
      </div>
      <div className="fixed bottom-32 right-5 text-white">
        <div className="flex justify-center gap-3">
          <div className="relative mx-1">
            <a
              id="1"
              className="absolute h-4 w-4 rounded-full bg-white ring-2 ring-inset ring-white duration-200 ease-linear hover:scale-125"
              onClick={() => document.getElementById("start")?.scrollIntoView()}
            ></a>
          </div>
          <div className="relative mx-1">
            <a
              id="2"
              className="absolute h-4 w-4 rounded-full bg-transparent ring-2 ring-inset ring-white duration-200 ease-linear hover:scale-125"
              onClick={() => document.getElementById("about")?.scrollIntoView()}
            ></a>
          </div>
          <div className="relative mx-1">
            <a
              id="3"
              className="absolute h-4 w-4 rounded-full bg-transparent ring-2 ring-inset ring-white duration-200 ease-linear hover:scale-125"
              onClick={() =>
                document.getElementById("events")?.scrollIntoView()
              }
            />
          </div>
          <div className="relative mx-1">
            <a
              id="4"
              className="absolute h-4 w-4 rounded-full bg-transparent ring-2 ring-inset ring-white duration-200 ease-linear hover:scale-125"
              onClick={() => document.getElementById("team")?.scrollIntoView()}
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
}
