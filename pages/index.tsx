import Head from "next/head";
import Avatar from "../components/Avatar";
import Carousel from "../components/Carousel";
import ArticleSection from "../components/sections/articleSection";
import EventsSection from "../components/sections/eventsSection";
import ViewPDF from "../components/ViewPDF";

export default function Index() {
  return (
    <>
      <Head>
        <title>MIDI 2023</title>
        <meta name="description" content="MIDI 2023 tinklalapis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col md:flex-row">
        <Carousel></Carousel>
        <section
          id="events"
          className="h-screen w-full bg-slate-900 px-4 pt-4 text-white transition-opacity duration-500"
        >
          <EventsSection />
        </section>
        <section
          id="team"
          className="invisible hidden w-full bg-slate-900 px-4 pt-4 text-white opacity-0 transition-opacity duration-500"
        >
          <Avatar name="it me" title="yes" imgsrc="/media/Gustas.webp"></Avatar>
        </section>
        <section
          id="sponsors"
          className="invisible hidden w-full bg-slate-900 px-4 pt-4 text-white opacity-0 transition-opacity duration-500"
        >
          <Avatar name="=)" title="lol" imgsrc="/media/Gustas.webp"></Avatar>
        </section>
        <section
          id="articles"
          className="invisible hidden w-full bg-slate-900 px-4 pt-4 text-white opacity-0 transition-opacity duration-500"
        >
          <div className="grid grid-cols1 md:grid-cols-2 lg:grid-cols-3">
            {/* <ViewPDF/> */}
            <ArticleSection name="Test" pdfLocation="/pdf/placeholder1.pdf"/>
            <ArticleSection name="VU SA MIF" pdfLocation="/pdf/placeholder2.pdf"/>
            <ArticleSection name="MIDI 2023 WOOHOOO" pdfLocation="/pdf/placeholder3.pdf"/>
            <ArticleSection name="Test" pdfLocation="/pdf/test.pdf"/>
            <ArticleSection name="VU SA MIF" pdfLocation="/pdf/test.pdf"/>
            <ArticleSection name="MIDI 2023 WOOHOOO" pdfLocation="/pdf/test.pdf"/>
            <ArticleSection name="Test" pdfLocation="/pdf/test.pdf"/>
            <ArticleSection name="VU SA MIF" pdfLocation="/pdf/test.pdf"/>
            <ArticleSection name="MIDI 2023 WOOHOOO" pdfLocation="/pdf/test.pdf"/>
            <ArticleSection name="Multiple pages" pdfLocation="/pdf/multipage.pdf"/>
          </div>
        </section>
      </div>
    </>
  );
}
