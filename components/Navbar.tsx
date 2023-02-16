import { useEffect, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function Nav() {
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    function handleScroll() {
      if (height !== undefined) {
        if (window.scrollY + window.innerHeight >= height * 1.5) {
          document.querySelector("#navelement")?.classList.remove("-right-64");
          document.querySelector("#navelement")?.classList.add("right-4");
        } else {
          document.querySelector("#navelement")?.classList.remove("right-4");
          document.querySelector("#navelement")?.classList.add("-right-64");
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [height]);

  return (
    <div>
      <div
        id="navelement"
        className="fixed -right-64 bottom-2 z-50 animate-[bounce_4s_ease-in-out_infinite] rounded-full border-4 border-white px-2 pb-3 text-5xl text-white duration-300 hover:scale-125 sm:text-6xl"
      >
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="select-none"
        >
          &and;
        </div>
      </div>
    </div>
  );
}
