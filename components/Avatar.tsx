import Image from 'next/image'

export default function Avatar(props: { name: string, title: string, imgsrc: string }) {
    return (
        <div className="flex flex-col gap-2 items-center">
            <Image className="w-48 sm:w-64 h-48 sm:h-64 rounded-full" width="2500" height="2500" src={`${props.imgsrc}`} alt={`${props.name}`}></Image>
            <p className="text-4xl">{props.name}</p>
            <p className="w-3/4 text-2xl">{props.title}</p>
        </div>
    );
  }