import Avatar from "../Avatar";
export default function OrganizersSection() {
  return (
    <>
      <p className="my-8 text-center text-6xl">MIDI Vadovai</p>
      <div className="flex flex-wrap justify-center gap-8">
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Gabija Burokaitė"
          title="MIDI vadovė"
          imgsrc="/media/gabija.webp"
          phone="+370 68 353 981"
          email="vadovas@midi.lt"
          priority={true}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Augustina Petraitytė"
          title="Komunikacijos vadovai"
          imgsrc="/media/augustina.webp"
          phone="+370 61 399 808"
          email="info@midi.lt"
          priority={true}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Ričardas Čubukinas"
          title="Organizacinės srities vadovas"
          imgsrc="/media/ricardas.webp"
          phone="+370 67 420 546"
          email="dienine@midi.lt"
          priority={true}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Mėta Žemaitytė"
          title="Organizacinės srities vadovė"
          imgsrc="/media/meta.webp"
          phone="+370 60 063 381"
          email="vakarine@midi.lt"
          priority={true}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Gytis Mockevičius"
          title="LAN Party vadovas"
          imgsrc="/media/gytis.webp"
          phone="+370 62 423 266"
          email="lan@midi.lt"
          priority={true}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Darius Skergelza"
          title="LAN Party vadovas"
          imgsrc="/media/darius.webp"
          phone="+370 60 503 379"
          email="lan@midi.lt"
          priority={true}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Gustas Štaševskis"
          title="Informacinių technologijų vadovas"
          imgsrc="/media/gustas.webp"
          phone="+370 62 466 600"
          email="it@midi.lt"
          priority={true}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Rasa Škiudaitė"
          title="Marketingo vadovė"
          imgsrc="/media/rasa.webp"
          phone="+370 67 877 453"
          email="marketingas@midi.lt"
          priority={true}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Liudas Norkevičius"
          title="Barterinių remėjų vadovas"
          imgsrc="/media/liudas.webp"
          phone="+370 62 456 084"
          email="reklama@midi.lt"
          priority={true}
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Austėja Bendikaitė"
          title="Administratorė"
          imgsrc="/media/austeja.webp"
          phone="+370 63 868 858"
          email="admin@midi.lt"
        />
      </div>
      <p className="my-8 text-center text-6xl">MIDI Renginių vadovai</p>
      <div className="flex flex-wrap justify-center gap-8">
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Mantas Mažvila"
          title="Sportinio pokerio vadovas"
          imgsrc="/media/mantas.webp"
          phone="+370 68 584 390"
          email="pokeris@midi.lt"
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Kamilė Simokaitytė"
          title="Protmūšio vadovė"
          imgsrc="/media/kamile.webp"
          phone="+370 67 766 544"
          email="protmusis@midi.lt"
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Vygintas Bartusevičius"
          title="Sporto dienų vadovas"
          imgsrc="/media/vygintas.webp"
          phone="+370 67 086 735"
          email="sportodiena@midi.lt"
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Danielius Venskūnas"
          title="Šachmatų turnyro vadovas"
          imgsrc="/media/danielius.webp"
          phone="+370 65 221 142"
          email="sachmatai@midi.lt"
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Gabrielė Skirmantaitė"
          title="Uždarymo vakaro vadovė"
          imgsrc="/media/gabrieleS.webp"
          phone="+370 62 721 026"
          email="uzdarymas@midi.lt"
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Gabrielė Drungilaitė"
          title="Orientacinių varžybų vadovė"
          imgsrc="/media/gabrieleD.webp"
          phone="+370 67 717 676"
          email="orientacines@midi.lt"
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Rasa Škiudaitė"
          title="Įmonių mugės vadovė"
          imgsrc="/media/rasa.webp"
          phone="+370 67 877 453"
          email="marketingas@midi.lt"
        />
      </div>
      <p className="my-8 text-center text-6xl">MIDI Komunikacija</p>
      <div className="flex flex-wrap justify-center gap-8">
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Martynas Mažuolis"
          title="Video vadovas"
          imgsrc="/media/martynas.webp"
          phone="+370 64 479 996"
          email="video@midi.lt"
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Agota Lūžytė"
          title="Dizaino srities vadovai"
          imgsrc="/media/agota.webp"
          phone="+370 60 630 071"
          email="dizainas@midi.lt"
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Rimantas Liulys"
          title="Dizaino srities vadovas"
          imgsrc="/media/rimantas.webp"
          phone="+370 67 888 302"
          email="dizainas@midi.lt"
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Redas Serafimavičius"
          title="Foto vadovas"
          imgsrc="/media/redas.webp"
          phone="+370 62 439 608"
          email="foto@midi.lt"
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Kristupas Sėjūnas"
          title="Ryšių su visuomene vadovas"
          imgsrc="/media/kristupas.webp"
          phone="+370 62 743 213"
          email="pr@midi.lt"
        />
      </div>
      <p className="my-8 text-center text-6xl">MIDI LAN Party vadovai</p>
      <div className="flex flex-wrap justify-center gap-8">
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Domas Bruišys"
          title="Discord vadovas"
          imgsrc="/media/domas.webp"
          phone="+370 60 313 085"
          email="discord@midi.lt"
        />
        <Avatar
          className="basis-full md:basis-1/3 lg:basis-1/4"
          name="Vytenis Narmontas"
          title="Stream vadovas"
          imgsrc="/media/vytenis.webp"
          phone="+370 68 252 818"
          email="stream@midi.lt"
        />
      </div>
    </>
  );
}
