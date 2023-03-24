import Head from "next/head";
import Avatar from "../components/Avatar";
import Carousel from "../components/Carousel";
import ArticleSection from "../components/sections/articleSection";
import EventsSection from "../components/sections/eventsSection";
import ViewPDF from "../components/ViewPDF";
import OrganizersSection from "../components/sections/OrganizersSection";
import Gabija from "../public/media/Gabija.webp";
import Image from "next/image";

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
        <div className="md:my-4 md:mx-4 md:h-full md:w-48"></div>
        <Carousel></Carousel>
        <section
          id="events"
          className="h-screen w-full px-4 pt-4 text-white transition-opacity duration-500"
        >
          <EventsSection />
        </section>
        <section
          id="team"
          className="invisible hidden w-full bg-slate-900 px-4 pt-4 text-white opacity-0 transition-opacity duration-500"
        >
          <OrganizersSection />
        </section>
        <section
          id="sponsors"
          className="invisible hidden w-full bg-slate-900 px-4 pt-4 text-white opacity-0 transition-opacity duration-500"
        ></section>
        <section
          id="articles"
          className="invisible hidden h-screen w-full bg-slate-900 px-4 pt-4 text-white opacity-0 transition-opacity duration-500"
        >
          <div className="grid-cols1 grid md:grid-cols-2 lg:grid-cols-3">
            <ArticleSection name="Test" pdfLocation="/pdf/placeholder1.pdf" />
            <ArticleSection
              name="VU SA MIF"
              pdfLocation="/pdf/placeholder2.pdf"
            />
            <ArticleSection
              name="MIDI 2023 WOOHOOO"
              pdfLocation="/pdf/placeholder3.pdf"
            />
            <ArticleSection name="Test" pdfLocation="/pdf/test.pdf" />
            <ArticleSection name="VU SA MIF" pdfLocation="/pdf/test.pdf" />
            <ArticleSection
              name="MIDI 2023 WOOHOOO"
              pdfLocation="/pdf/test.pdf"
            />
            <ArticleSection name="Test" pdfLocation="/pdf/test.pdf" />
            <ArticleSection name="VU SA MIF" pdfLocation="/pdf/test.pdf" />
            <ArticleSection
              name="MIDI 2023 WOOHOOO"
              pdfLocation="/pdf/test.pdf"
            />
            <ArticleSection
              name="Multiple pages"
              pdfLocation="/pdf/multipage.pdf"
            />
            <ArticleSection name="bapdf" pdfLocation="/pdf/ba.pdf" />
          </div>
        </section>
      </div>
    </>
  );
}
