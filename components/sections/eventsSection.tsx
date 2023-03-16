interface Event {
  name: string;
  description: string;
  time: Date;
}

interface Props {
  events: Event[];
}

var events=[
  {
    name: "Sportinio Pokerio Turnyras",
    description: "Sportinio pokerio turnyras yra puiki vieta parungtyniauti su kitais pokerio mėgėjais ar smagiai praleisti vakarą populiariausiame Vilniaus sportinio pokerio klube.",
    time: new Date("2023-04-24T18:30:00Z"),
  },
  {
    name: "Krepšinio Turnyras",
    description: "MIDI 2023 3x3 krepšinio turnyras vėl čia! Tai puiki proga išbandyti savo jėgas aikštelėje ar tiesiog linksmai ir aktyviai praleisti laiką su draugais.",
    time: new Date("2023-04-25T20:00:00Z"),
  },
  {
    name: "Tinklinio Turnyras",
    description: "Su kamuoliu prie kojų jautiesi lyg Messi ar Ronaldo, gal atrandi save gindamas vartus kaip G. Bufonas, o gal prisilietes prie kamuolio grįžti į vaikyste, kuomet su draugais praleisdavai dienų dienas pievoje? Bet kuriuo atveju MIDI 2023 futbolo turnyras kaip tik tau, surink savo komanda ir stok į kovą su kitais futbolo mylėtojais.  ",
    time: new Date("2023-04-25T20:00:00Z"),
  },
  {
    name: "Futbolo Turnyras",
    description: "Su kamuoliu prie kojų jautiesi lyg Messi ar Ronaldo, gal atrandi save gindamas vartus kaip G. Bufonas, o gal prisilietes prie kamuolio grįžti į vaikyste, kuomet su draugais praleisdavai dienų dienas pievoje? Bet kuriuo atveju MIDI 2023 futbolo turnyras kaip tik tau, surink savo komanda ir stok į kovą su kitais futbolo mylėtojais.  ",
    time: new Date("2023-04-25T20:00:00Z"),
  },
  {
    name: "Įmonių Mugė",
    description: "Įmonių mugė puiki proga įmonėms prisistatyti tikslinei auditorijai, o studentams susipažinti su būsimomis darbovietėmis bei ieškoti praktikos galimybių. Prieš įmonių mugės pradžią, pastato savo stendus, roll up ir t.t Naugarduko fakulteto ilgajame koridoriuje ir renginio metu stengiasi pritraukti studentus įvairiais konkursais ir žaidimais. Pertraukų metu įmonių atstovai ir studentai bus kviečiami pasikalbėti prie arbatos/kavos puodelio, kur galės laisviau pakalbėti ar net susipažinti, taip užmezgant geresnį ryšį",
    time: new Date("2023-04-24T19:00:00Z"),
  },
  {
    name: "Protmūšis",
    description: "Įmonių mugė puiki proga įmonėms prisistatyti tikslinei auditorijai, o studentams susipažinti su būsimomis darbovietėmis bei ieškoti praktikos galimybių. Prieš įmonių mugės pradžią, pastato savo stendus, roll up ir t.t Naugarduko fakulteto ilgajame koridoriuje ir renginio metu stengiasi pritraukti studentus įvairiais konkursais ir žaidimais. Pertraukų metu įmonių atstovai ir studentai bus kviečiami pasikalbėti prie arbatos/kavos puodelio, kur galės laisviau pakalbėti ar net susipažinti, taip užmezgant geresnį ryšį",
    time: new Date("2023-04-27T19:00:00Z"),
  },
  {
    name: "Šachmatai",
    description: "MIDI šachmatų turnyras vėl čia! Nesvarbu, ar esi tik pradedantysis šachmatų žaidėjas, ar tavo įgūdžiai prilygsta Hikaru Nakamurai, šis turnyras yra puiki proga pamankštinti smegenis ir varžytis su šviesiausiais Vilniaus protais!",
    time: new Date("2023-04-23T19:00:00Z"),
  },
  {
    name: "Uždarymo Vakaras",
    description: "Uždarymo vakaras - tai visą MIDI veiklų maratoną vainikuojantis renginys. Jo metu dalyviai galės ne tik dalintis patirtais įspūdžiais, atradimais ar įgytomis žiniomis, bet ir įsitraukti į veiklas, kurios padės MIDI prisiminti dar ilgai. O, kad pokalbiai nepabostų, nuo jų atsitraukti ir pajudėti paskatins lietuviškos grupės, po kurių tikrai nereikėtų pabėgti, nes vakarą triukšmingai užbaigs - DJ, kuris patenkins visus dalyvių norus. ",
    time: new Date("2023-04-28T19:00:00Z"),
  },
  {
    name: "Orientacinės",
    description: "Komandinės MIDI 2023 orientacinės varžybos “Kas nutiko vakar naktį?”. Klaidžiojant Vilniaus gatvėmis dalyviai bandys sudėlioti paslaptingą istoriją apie vakarykštės nakties įvykius. Komandoms prireiks papildomų priemonių, kaip internetas ir išmanieji telefonai bei “Discord” programėlės. Žibintuvėlis, susiorientuoti tamsiuose vietose - būtinas, o popieriaus lapelis ir rašymo priemonė gali retkarčiais praversti. Žaidimo pabaigoje daugiausiai taškų surinkusios trys komandos bus apdovanotos prizais.",
    time: new Date("2023-04-21T19:00:00Z"),
  },
];

const EventList: React.FC<Props> = () => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {events.map((event) => (
        <div key={event.name} className="border border-gray-200 rounded-lg shadow-sm">
          <div className="bg-gray-100 px-4 py-3 rounded-t-lg">
            <h3 className="text-lg font-semibold text-gray-800">{event.name}</h3>
          </div>
          <div className="px-4 py-3">
            <p className="text-gray-700">{event.description}</p>
            <p className="mt-2 text-sm text-gray-500">{event.time.toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;


// import Event from "../Event";
// export default function EventsSection() {
//   return (
//     <div>
//       <div>Any content you'd like goes here</div>
//       <Event description={"swag"}></Event>
//       <Event description={"test"}></Event>
//       <div>Perhaps maybe even have a spinner here...</div>
//     </div>
//   );
// }
