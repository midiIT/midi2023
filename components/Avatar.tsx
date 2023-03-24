import Image from "next/image";

export default function Avatar(props: {
  name: string;
  title: string;
  imgsrc: string;
  email: string;
  phone: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={
        props.className + " flex flex-col items-center gap-2 text-center"
      }
    >
      <Image
        priority={props.priority}
        className="h-48 w-48 rounded-full object-cover"
        width="1500"
        height="1500"
        src={`${props.imgsrc}`}
        alt={`${props.name}`}
      ></Image>
      <p className="text-4xl">{props.name}</p>
      <p className="w-3/4 text-2xl ">{props.title}</p>
      <a
        href={"mailto:" + props.email}
        className="w-3/4 text-2xl text-midiblue"
      >
        {props.email}
      </a>
      <a href={"tel:" + props.phone} className="w-3/4 text-2xl text-midiblue">
        {props.phone}
      </a>
    </div>
  );
}
