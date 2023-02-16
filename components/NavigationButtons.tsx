import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
} from "@heroicons/react/24/solid";

export default function Avatar({
  scrollPrev,
  scrollNext,
}: {
  scrollPrev: () => void;
  scrollNext: () => void;
}) {
  return (
    <div className="absolute bottom-2/4 flex w-full justify-between md:hidden">
      <button
        className="relative mx-2 rounded-full border border-slate-800 bg-slate-800"
        type="button"
        onClick={scrollPrev}
      >
        <ArrowSmallLeftIcon className="h-12 w-12 text-midiblue" />
      </button>
      <button
        className="relative mx-2 rounded-full border border-slate-800 bg-slate-800"
        type="button"
        onClick={scrollNext}
      >
        <ArrowSmallRightIcon className="h-12 w-12 text-midiblue" />
      </button>
    </div>
  );
}
