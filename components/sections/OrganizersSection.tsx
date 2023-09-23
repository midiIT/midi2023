import Avatar from "../Avatar";
import Gabija from "public/media/gabija.webp";
import Augustina from "public/media/augustina.webp";
import Ricardas from "public/media/ricardas.webp";
import Meta from "public/media/meta.webp";
import Gytis from "public/media/gytis.webp";
import Darius from "public/media/darius.webp";
import Gustas from "public/media/gustas.webp";
import Rasa from "public/media/rasa.webp";
import Liudas from "public/media/liudas.webp";
import Austeja from "public/media/austeja.webp";
import Mantas from "public/media/mantas.webp";
import Kamile from "public/media/kamile.webp";
import Vygintas from "public/media/vygintas.webp";
import Danielius from "public/media/danielius.webp";
import GabrieleS from "public/media/gabrieleS.webp";
import GabrieleD from "public/media/gabrieleD.webp";
import Martynas from "public/media/martynas.webp";
import Agota from "public/media/agota.webp";
import Rimantas from "public/media/rimantas.webp";
import Redas from "public/media/redas.webp";
import Kristupas from "public/media/kristupas.webp";
import Domas from "public/media/domas.webp";
import Vytenis from "public/media/Vytenis.webp";

export default function OrganizersSection() {
  return (
    <div className="mb-4">
      <p className="my-8 text-center text-6xl">MIDI Vadovai</p>
      <div className="flex flex-wrap justify-center gap-8">
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Gabija Burokaitė"
          title="MIDI vadovė"
          imgsrc={Gabija}
          phone="+370 68 353 981"
          email="vadovas@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Augustina Petraitytė"
          title="Komunikacijos vadovai"
          imgsrc={Augustina}
          phone="+370 61 399 808"
          email="info@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Ričardas Čubukinas"
          title="Organizacinės srities vadovas"
          imgsrc={Ricardas}
          phone="+370 67 420 546"
          email="dienine@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Mėta Žemaitytė"
          title="Organizacinės srities vadovė"
          imgsrc={Meta}
          phone="+370 60 063 381"
          email="vakarine@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Gytis Mockevičius"
          title="LAN Party vadovas"
          imgsrc={Gytis}
          phone="+370 62 423 266"
          email="lan@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Darius Skergelza"
          title="LAN Party vadovas"
          imgsrc={Darius}
          phone="+370 60 503 379"
          email="lan@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Gustas Štaševskis"
          title="Informacinių technologijų vadovas"
          imgsrc={Gustas}
          phone="+370 62 466 600"
          email="it@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Rasa Škiudaitė"
          title="Marketingo vadovė"
          imgsrc={Rasa}
          phone="+370 67 877 453"
          email="marketingas@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Liudas Norkevičius"
          title="Barterinių remėjų vadovas"
          imgsrc={Liudas}
          phone="+370 62 456 084"
          email="reklama@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Austėja Bendikaitė"
          title="Administratorė"
          imgsrc={Austeja}
          phone="+370 63 868 858"
          email="admin@midi.lt"
          placeholder={"blur"}
        />
      </div>
      <p className="my-8 text-center text-6xl">MIDI Renginių vadovai</p>
      <div className="flex flex-wrap justify-center gap-8">
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Mantas Mažvila"
          title="Sportinio pokerio vadovas"
          imgsrc={Mantas}
          phone="+370 68 584 390"
          email="pokeris@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Kamilė Simokaitytė"
          title="Protmūšio vadovė"
          imgsrc={Kamile}
          phone="+370 67 766 544"
          email="protmusis@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Vygintas Bartusevičius"
          title="Sporto dienų vadovas"
          imgsrc={Vygintas}
          phone="+370 67 086 735"
          email="sportodiena@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Danielius Venskūnas"
          title="Šachmatų turnyro vadovas"
          imgsrc={Danielius}
          phone="+370 65 221 142"
          email="sachmatai@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Gabrielė Skirmantaitė"
          title="Uždarymo vakaro vadovė"
          imgsrc={GabrieleS}
          phone="+370 62 721 026"
          email="uzdarymas@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Gabrielė Drungilaitė"
          title="Orientacinių varžybų vadovė"
          imgsrc={GabrieleD}
          phone="+370 67 717 676"
          email="orientacines@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Rasa Škiudaitė"
          title="Įmonių mugės vadovė"
          imgsrc={Rasa}
          phone="+370 67 877 453"
          email="marketingas@midi.lt"
          placeholder={"blur"}
        />
      </div>
      <p className="my-8 text-center text-6xl">MIDI Komunikacija</p>
      <div className="flex flex-wrap justify-center gap-8">
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Martynas Mažuolis"
          title="Video vadovas"
          imgsrc={Martynas}
          phone="+370 64 479 996"
          email="video@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Agota Lūžytė"
          title="Dizaino srities vadovai"
          imgsrc={Agota}
          phone="+370 60 630 071"
          email="dizainas@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Rimantas Liulys"
          title="Dizaino srities vadovas"
          imgsrc={Rimantas}
          phone="+370 67 888 302"
          email="dizainas@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Redas Serafimavičius"
          title="Foto vadovas"
          imgsrc={Redas}
          phone="+370 62 439 608"
          email="foto@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Kristupas Sėjūnas"
          title="Ryšių su visuomene vadovas"
          imgsrc={Kristupas}
          phone="+370 62 743 213"
          email="pr@midi.lt"
          placeholder={"blur"}
        />
      </div>
      <p className="my-8 text-center text-6xl">MIDI LAN Party vadovai</p>
      <div className="flex flex-wrap justify-center gap-8">
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Domas Bruišys"
          title="Discord vadovas"
          imgsrc={Domas}
          phone="+370 60 313 085"
          email="discord@midi.lt"
          placeholder={"blur"}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Vytenis Narmontas"
          title="Stream vadovas"
          imgsrc={Vytenis}
          phone="+370 68 252 818"
          email="stream@midi.lt"
          placeholder={"blur"}
        />
      </div>
    </div>
  );
}
