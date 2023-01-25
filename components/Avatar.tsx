import Image from "next/image";

export default function Avatar(props: {
  name: string;
  title: string;
  imgsrc: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <Image
        className="h-24 w-24 rounded-full sm:h-32 sm:w-32 md:h-48 md:w-48"
        width="2500"
        height="2500"
        src={`${props.imgsrc}`}
        alt={`${props.name}`}
      ></Image>
      <p className="sm:text-xl md:text-4xl">{props.name}</p>
      <p className="sm:text-l w-3/4 md:text-2xl">{props.title}</p>
    </div>
  );
}
