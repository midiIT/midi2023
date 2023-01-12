import Head from "next/head";
import Avatar from "../components/Avatar";

export default function Index() {
  return (
    <>
      <Head>
        <title>MIDI 2023</title>
        <meta name="description" content="MIDI 2023 tinklalapis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-full w-full flex-col items-center justify-center bg-black text-center">
        <h1 className="m-12 text-7xl text-midiblue">
          MIDI tech stack&apos;as paruoštas?
        </h1>
        <div className="m-16 mb-32 grid grid-cols-1 gap-16 text-white md:grid-cols-2 lg:grid-cols-3">
          <Avatar
            name="Gustas"
            title="Informacinių technologijų koordinatorius"
            imgsrc="/media/Gustas.webp"
          ></Avatar>
          <Avatar
            name="Gustas?"
            title="Informacinių technologijų koordinatorius?"
            imgsrc="/media/Gustas.webp"
          ></Avatar>
          <Avatar
            name="Gustas!"
            title="Informacinių technologijų koordinatorius!"
            imgsrc="/media/Gustas.webp"
          ></Avatar>
          <Avatar
            name="Gustas!"
            title="Informacinių technologijų koordinatorius!"
            imgsrc="/media/Gustas.webp"
          ></Avatar>
          <Avatar
            name="Gustas!"
            title="Informacinių technologijų koordinatorius!"
            imgsrc="/media/Gustas.webp"
          ></Avatar>
          <Avatar
            name="Gustas!"
            title="Informacinių technologijų koordinatorius!"
            imgsrc="/media/Gustas.webp"
          ></Avatar>
          <Avatar
            name="Gustas!"
            title="Informacinių technologijų koordinatorius!"
            imgsrc="/media/Gustas.webp"
          ></Avatar>
          <Avatar
            name="Gustas!"
            title="Informacinių technologijų koordinatorius!"
            imgsrc="/media/Gustas.webp"
          ></Avatar>
          <Avatar
            name="Gustas!"
            title="Informacinių technologijų koordinatorius!"
            imgsrc="/media/Gustas.webp"
          ></Avatar>
          <Avatar
            name="Gustas!"
            title="Informacinių technologijų koordinatorius!"
            imgsrc="/media/Gustas.webp"
          ></Avatar>
        </div>
      </div>
    </>
  );
}
