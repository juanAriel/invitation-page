import React, { useEffect, useState } from "react";
import FormConfirmacion from "./components/FormConfirmacion";
import {
  ClipboardDocumentCheckIcon,
  HeartIcon,
  MapPinIcon,
} from "@heroicons/react/16/solid";

function App() {
  const targetDate = new Date("2025-12-06T18:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="min-h-screen flex flex-col items-center p-4 md:p-8 bg-night">
      <header className="text-center mb-8 mt-4">
        <p className="uppercase tracking-widest font-bold text-white text-2sm md:text-2xl">
          Estás invitado a la
        </p>
        <img
          src="/images/toga.png"
          alt="Gorro de graduación"
          className="w-[150px] md:w-[200px] mx-auto my-3"
        />
        <h1 className="momo-signature-regular text-3xl md:text-4xl font-bold text-yellow-400 ">
          Fiesta de mi graduacion
        </h1>
        <p className="message-principal mt-4 text-base text-white">
          Es un día muy especial para mi y quiero pasarlo con mis seres queridos
        </p>
      </header>

      <section className="text-center mb-10 w-full md:w-2/3">
        <h2 className="text-xl font-bold text-yellow-400 mb-6 tracking-wider">
          Falta poco para el gran día
        </h2>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-white font-bold text-2xl md:text-3xl">
          <div className="flex flex-col items-center border-2 border-white rounded-xl px-3 md:px-5 py-2 md:py-3 shadow-lg backdrop-blur-sm transition hover:bg-white/20 hover:scale-105">
            <span className="text-2xl md:text-5xl">
              {timeLeft.days.toString().padStart(2, "0")}
            </span>
            <span className="text-sm font-medium mt-2">Dias</span>
          </div>

          <div className="flex flex-col items-center border-2 border-white rounded-xl px-3 md:px-5 py-2 md:py-3 shadow-lg backdrop-blur-sm transition hover:bg-white/20 hover:scale-105">
            <span className="text-2xl md:text-5xl">
              {timeLeft.hours.toString().padStart(2, "0")}
            </span>
            <span className="text-sm font-medium mt-2">Hrs</span>
          </div>

          <div className="flex flex-col items-center border-2 border-white rounded-xl px-3 md:px-5 py-2 md:py-3 shadow-lg backdrop-blur-sm transition hover:bg-white/20 hover:scale-105">
            <span className="text-2xl md:text-5xl">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </span>
            <span className="text-sm font-medium mt-2">Min</span>
          </div>

          <div className="flex flex-col items-center border-2 border-white rounded-xl px-3 md:px-5 py-2 md:py-3 shadow-lg backdrop-blur-sm transition hover:bg-white/20 hover:scale-105">
            <span className="text-2xl md:text-5xl">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </span>
            <span className="text-sm font-medium mt-2">Seg</span>
          </div>
        </div>

        <p className="text-yellow-400 mt-5 font-bold text-2xl tracking-wide flex flex-col items-center justify-center">
          <div className="text-yellow-400 mt-5 font-bold tracking-wide flex items-center justify-center gap-10">
            <div className="flex flex-col items-center justify-center text-center">
              <span className="border-t border-yellow-400 w-16 mb-2"></span>
              <span className="uppercase text-lg md:text-xl">sabado</span>
              <span className="border-t border-yellow-400 w-16 mt-2"></span>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-6xl md:text-8xl text-yellow-400 leading-none">
                25
              </span>
              <span className="uppercase text-xl md:text-2xl tracking-widest mt-1">
                marzo
              </span>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <span className="border-t border-yellow-400 w-16 mb-2"></span>
              <span className="uppercase text-lg md:text-xl">18:00 pm</span>
              <span className="border-t border-yellow-400 w-16 mt-2"></span>
            </div>
          </div>
        </p>
      </section>

      <section className="w-full md:w-3/4 mb-10 border-2 border-white rounded-xl backdrop-blur-md p-6 rounded-xl shadow-md">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="md:w-1/2 text-center">
            <h2 className="title-section  text-yellow-400 text-2xl font-bold text-navy mb-4 text-center md:text-left flex items-center justify-center">
              <MapPinIcon className="size-6 text-red-500 mx-2" />
              Lugar del evento
            </h2>
            <p className="message-principal mt-2 text-base text-white">
              Te esperamos en{" "}
              <strong className="text-yellow-400 font-bold">
                El Salon de eventos MAYLIZ
              </strong>{" "}
              para celebrar juntos este dia tan especial.
              <br />
              <br />
              ¡No faltes! Tendremos musica, momentos inolvidables y mucha
              alegria.
            </p>
          </div>

          <div className="md:w-1/2">
            <iframe
              title="Ubicacion del evento"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1228.3620747811203!2d-66.28021745679192!3d-17.391927123589916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e30b76f3041e35%3A0x6411d28eb4cbbfeb!2sSalon%20De%20Eventos%20MAYLIZ!5e0!3m2!1ses!2sbo!4v1762876270201!5m2!1ses!2sbo"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-xl shadow-md"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="w-full md:w-3/4 border-2 border-white rounded-xl backdrop-blur-md p-6 rounded-xl shadow-md mb-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <FormConfirmacion />

          <div className="md:w-1/2 text-center  order-1 md:order-2">
            <h2 className="title-section text-2xl font-bold text-navy mb-4 text-center md:text-left flex items-center justify-center  text-yellow-400">
              <ClipboardDocumentCheckIcon className="size-6 text-blue-500 mx-2" />
              Confirmar asistencia
            </h2>
            <p className="message-principal mt-2 text-base text-white mb-2 inline-flex items-center">
              Tu presencia es importante para mi
              <HeartIcon className="size-6 text-red-500 mx-1" />
            </p>
            <p className="message-principal mt-2 text-base text-white">
              Por favor, confirma tu asistencia antes del evento para poder
              organizar todo con cariño. ¡Será un honor compartir este logro
              contigo!
            </p>
          </div>
        </div>
      </section>

      <footer className="text-center text-sm text-white mt-auto py-4 border-t border-gray-200 w-full">
        <p>Todos los derechos reservados © 2025</p>
      </footer>
    </div>
  );
}

export default App;
