import Head from "next/head";
import Avatar from "../components/Avatar";
import Navbar from "../components/Navbar";

export default function Index() {
  return (
    <>
      <Head>
        <title>MIDI 2023</title>
        <meta name="description" content="MIDI 2023 tinklalapis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <div id="start" className="h-screen bg-slate-900">
        <div className="flex h-full flex-col items-center justify-center">
          <p className="m-auto text-6xl text-midiblue md:text-8xl">MIDI 2023</p>
        </div>
      </div>
      <div id="about" className="h-screen bg-gray-800">
        <div className="flex h-full flex-col items-center justify-center">
          <p className="m-auto text-6xl text-midiblue md:text-8xl">ABOUT</p>
        </div>
      </div>
      <div id="events" className="h-screen bg-slate-900">
        <div className="flex h-full flex-col items-center justify-center">
          <p className="m-auto text-6xl text-midiblue md:text-8xl">EVENTS</p>
        </div>
      </div>
      <div id="team" className="h-screen bg-gray-800 p-4">
        <div className="flex h-full flex-col items-center justify-center">
          <p className="mb-16 text-6xl text-midiblue md:text-8xl">TEAM</p>
          <div className="grid grid-flow-col grid-rows-2 gap-16 text-white md:gap-8 lg:grid-rows-1">
            <Avatar
              name="Gustas"
              title="IT koordinatorius"
              imgsrc="/media/Gustas.webp"
            ></Avatar>
            <Avatar
              name="Gustas"
              title="IT kombinatorius"
              imgsrc="/media/Gustas.webp"
            ></Avatar>
            <Avatar
              name="Gustas"
              title="IT rekombinatorius"
              imgsrc="/media/Gustas.webp"
            ></Avatar>
            <Avatar
              name="Gustas"
              title="IT rekombinatorius"
              imgsrc="/media/Gustas.webp"
            ></Avatar>
          </div>
        </div>
      </div>
    </>
  );
}
