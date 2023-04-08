import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGamepad,
  faAddressCard,
  faBasketball,
  faDiamond,
  faChess,
  faMapLocation,
  faBrain,
  faUsers,
  faIdCardAlt,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import asseco from "public/events/asseco_white.svg";

import lanparty from "public/events/lanparty.jpg";
import muge from "public/events/muge.jpg";

var events = [
  {
    name: "MIDI LAN Party",
    description: `Ką renkiesi tu? LAN-dynę ar LAN-ginę? LAN-gelį ar LAN-kelį? LAN Party ar PRE Party?

🖱MIDI tau siūlo nesukti galvos ir rinktis taikliai – balandžio 21–23 dienomis užkaitinti Matematikos ir informatikos fakultetą savo žaidimų strategijomis, komandine dvasia bei nerti į MIDI 2023 LAN Party žaidimų maratoną!

👉Dar vieni metai, kai MIDI kviečia žaidimų aistruolius, virtualaus pasaulio mėgėjus ir komandinę dvasią jaučiančius žaidėjus susiburti ir kovoti Valorant, CS:GO, League of Legends bei Teamfight turnyruose!

🖱Rankoms ir pirštams apšilti prieš didįjį LAN Party visus Minecraft aistruolius kviesime jungtis prie balandžio 21 d. online vyksiančio LAN Decathlon'o, kuriame skirtingos komandos pasitelkiant pagrindines Minecraft kovų technologijas PvP combat / YES galės kovoti, nugalėti ir laimėti šaunių prizų!

🇬🇧
What do you prefer? LAN-dskip or LAN-dscape? LAN-tern or LAN-dlord? LAN Party or PRE Party?

🖱 MIDI offers you to choose wisely - on 21-23 April, warm up the atmosphere of Faculty of Mathematics and Computer Science with your game strategies, team spirit and dive into the MIDI 2023 LAN Party game marathon!

👉 One more year of MIDI inviting gaming fans, virtual world enthusiasts and gamers with a team spirit to come together and battle it out in Valorant, CS:GO, League of Legends and Teamfight tournaments!

🖱 To warm up your hands and fingers before the big LAN Party, we invite all Minecraft fans to join the LAN Decathlon on 21 April online, where different teams will be able to fight, defeat and win cool prizes using the core Minecraft fighting technology PvP combat / YES!
`,
    time: "2023-04-21 16:00 – 2023-04-23 22:00",
    photo: lanparty,
    location: "Didlaukio gatvė 47, LT-08303 Vilnius, Lietuva",
    more: "https://www.facebook.com/events/150365007959154",
    registration: "https://www.facebook.com/events/150365007959154",
  },
  {
    name: "MIDI Įmonių mugė | Career fair",
    description: `🤔 Jau atsidarai n-tąjį darbo skelbimų portalą ir vis dar nerandi tinkamos pozicijos, o gal beskaitydamas reikalavimus nesupranti, ko iš tavęs prašo bei kokios bus tavo būsimos pareigos? Daugiau to daryti nebereikės, nes jau balandžio 24 d. MIDI kviečia į kasmetinę įmonių mugę, kur viename koridoriuje tavęs ir tavo draugų lauks daugiau nei iš 15 įmonių atvykę atstovai, o galbūt tavo būsimi kolegos? Čia galėsi užduoti sau rūpimus klausimus, aplikuoti į skirtingas pozicijas ir atrasti savo karjeros kelią!
🔍 MIDI 2023 Įmonių mugė yra skirta kiekvienam – nuo karjeros pradžios ieškančio matematiko, iki paskutinių kursų Programų sistemų studento, nuo pradedančio IT klientų aptarnavimo specialisto iki pažengusio duomenų analitiko. O jei nori išbandyti savo jėgas darbo pokalbiuose tai galėsi padaryti įmonių siūlomuose greituosiuose darbo pokalbiuose.
✨ Ateik, susipažink, ir išsklaidyk visas iliuzijas apie pirmąjį darbą su MIDI!
🇬🇧
🤔 Have you opened the n-th job portal and still can't find the right position, or maybe you're not sure what are the requirements and what your future role will be? You won't have to do that anymore, because on 24 April you will be able to find out. MIDI invites you and your friends to its annual career fair, where representatives from more than 15 companies - or maybe your future colleagues - will be waiting for you and your friends in one corridor. Here you can ask your questions, apply for different positions and discover your career path!
🔍 MIDI 2023 Career Fair is for everyone - from a mathematician looking for a career start, to a final year Software Engineering student, from a beginner IT customer service professional to an advanced data analyst. And if you want to try your hand at job interviews, you can do so in the fast-track job interviews offered by companies.
✨ Come, get to know each other, and dispel all illusions about your first job with MIDI!`,
    time: format(new Date("2023-04-24T10:00:00"), "yyyy-MM-dd HH:mm"),
    photo: muge,
  },
];

function Show(section: number) {
  var eventDescriptions = document.querySelectorAll(".aboutEvent");
  var eventSelectors = document.querySelectorAll(".aboutEventSelector");

  eventSelectors.forEach((selector) => {
    selector.classList.remove("opacity-100");
    selector.classList.add("opacity-50");
  });
  eventDescriptions.forEach((description) => {
    description.classList.add("hidden");
  });

  eventSelectors[section].classList.add("opacity-100");
  eventDescriptions[section].classList.remove("hidden");
}

export default function EventsSection() {
  return (
    <>
      <div className="my-4 flex flex-wrap justify-center gap-6 pb-4">
        <div className="flex basis-1/4 justify-center lg:basis-0">
          <FontAwesomeIcon
            icon={faGamepad}
            className="aboutEventSelector rounded-full border-2 p-4 text-4xl opacity-100 transition-all hover:-mb-2 hover:scale-125 hover:border-4"
            onClick={() => Show(0)}
          />
        </div>
        <div className="flex basis-1/4 justify-center lg:basis-0">
          <FontAwesomeIcon
            icon={faAddressCard}
            className="aboutEventSelector rounded-full border-2 p-4 text-4xl opacity-50 transition-all hover:-mb-2 hover:scale-125 hover:border-4"
            onClick={() => Show(1)}
          />
        </div>
        <div className="flex basis-1/4 justify-center lg:basis-0">
          <FontAwesomeIcon
            icon={faIdCardAlt}
            className="aboutEventSelector rounded-full border-2 p-4 text-4xl opacity-50 transition-all hover:-mb-2 hover:scale-125 hover:border-4"
            onClick={() => Show(1)}
          />
        </div>
        <div className="flex basis-1/4 justify-center lg:basis-0">
          <FontAwesomeIcon
            icon={faBasketball}
            className="aboutEventSelector rounded-full border-2 p-4 text-4xl opacity-50 transition-all hover:-mb-2 hover:scale-125 hover:border-4"
            onClick={() => Show(2)}
          />
        </div>
        <div className="flex basis-1/4 justify-center lg:basis-0">
          <FontAwesomeIcon
            icon={faDiamond}
            className="aboutEventSelector rounded-full border-2 p-4 text-4xl opacity-50 transition-all hover:-mb-2 hover:scale-125 hover:border-4"
            onClick={() => Show(3)}
          />
        </div>
        <div className="flex basis-1/4 justify-center lg:basis-0">
          <FontAwesomeIcon
            icon={faChess}
            className="aboutEventSelector rounded-full border-2 p-4 text-4xl opacity-50 transition-all hover:-mb-2 hover:scale-125 hover:border-4"
            onClick={() => Show(4)}
          />
        </div>
        <div className="flex basis-1/4 justify-center lg:basis-0">
          <FontAwesomeIcon
            icon={faMapLocation}
            className="aboutEventSelector rounded-full border-2 p-4 text-4xl opacity-50 transition-all hover:-mb-2 hover:scale-125 hover:border-4"
            onClick={() => Show(5)}
          />
        </div>
        <div className="flex basis-1/4 justify-center lg:basis-0">
          <FontAwesomeIcon
            icon={faBrain}
            className="aboutEventSelector rounded-full border-2 p-4 text-4xl opacity-50 transition-all hover:-mb-2 hover:scale-125 hover:border-4"
            onClick={() => Show(6)}
          />
        </div>
        <div className="flex basis-1/4 justify-center lg:basis-0">
          <FontAwesomeIcon
            icon={faUsers}
            className="aboutEventSelector rounded-full border-2 p-4 text-4xl opacity-50 transition-all hover:-mb-2 hover:scale-125 hover:border-4"
            onClick={() => Show(7)}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 whitespace-pre-line pb-8">
        {events.map((event) => (
          <div
            key={event.name}
            className={
              "aboutEvent basis-7/6 rounded-lg border-2 border-gray-200 shadow-sm md:basis-5/6" +
              (event.name === "MIDI LAN Party" ? "" : " hidden")
            }
          >
            <div className="rounded-t-lg bg-gray-100 px-4 py-3">
              <h3 className="text-4xl font-semibold text-gray-800">
                {event.name}
              </h3>
              <div className="text-2xl text-gray-800">
                Kada / When: <h4>{event.time}</h4>
              </div>
              <div className="text-2xl text-gray-800">
                Vieta / Where: <h4>{event.location}</h4>
              </div>
            </div>
            <div className="flex flex-col flex-wrap justify-center px-4 py-3">
              <div className="flex flex-wrap items-center justify-around">
                <div className="lg:basis-1/2 lg:overflow-hidden">
                  <Image
                    className="object-scale-down py-3"
                    src={event.photo}
                    alt="aaa"
                  ></Image>
                </div>
                <div className="basis-1/2 whitespace-nowrap lg:basis-1/3 2xl:basis-1/5">
                  <a target="_blank" href={event.more} className="">
                    <div className="m-4 rounded-full border-4 border-midiblue px-4 pt-2 pb-4 text-center text-xl font-semibold text-midiblue transition-all hover:border-white hover:text-white md:text-4xl">
                      Daugiau / Read More
                    </div>
                  </a>
                  {event.registration ? (
                    <a target="_blank" href={event.registration}>
                      <div className="m-4 rounded-full border-4 border-midiblue px-4 pt-2 pb-4 text-center text-xl font-semibold text-midiblue transition-all hover:border-white hover:text-white md:text-4xl">
                        Registracija / Register
                      </div>
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="basis-3/4">
                <p className="p-4 text-xl text-white lg:pt-8">
                  {event.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
