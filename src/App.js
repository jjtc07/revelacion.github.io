import img2 from "./img/img2.png";
import text from "./img/text.png";
import location from "./img/location.png";
import whatsapp from "./img/whatsapp.png";
import "./App.css";

function App() {
  return (
    <div className="h-screen bg-nubes">
      <div className="">
        <img src={img2} className="" alt="logo" />
      </div>
      <div className="bg-[#EDC9AF99] mx-8 rounded-xl px-2 text-center text-white text-2xl py-6">
        <img src={text} className="" alt="logo" />
        <p className="farsan-regular text-3xl text-black my-2">María y Jesús</p>

        <p className="atma-semibold text-xl">
          Queremos que seas parte de este momento especial en nuestras vidas.
        </p>
        <p className="atma-semibold my-4 text-3xl text-shadow">
          ¡Acompáñanos en la revelación de género de nuestr♥︎ bebé!
        </p>

        <div className="flex justify-evenly">
          <div>
            <p className="text-amber-900 atma-semibold">Sábado</p>
            <p className="roboto-bold leading-5">07</p>
            <p className="roboto-bold leading-5">DIC</p>
          </div>
          <div className="w-1 bg-amber-900"></div>
          <div>
            <p className="text-amber-900 atma-semibold">Hora</p>
            <p className="roboto-bold leading-5">9:00 AM</p>
            <p className="roboto-bold leading-5">a 12:00 PM</p>
          </div>
        </div>

        <div className="mt-4">
          <span className="text-amber-900 atma-semibold">Lugar: </span>
          <span className="roboto-bold text-xl">CLUB PORTUGUÉS </span>
        </div>

        <img src={location} className="w-6 m-auto" alt="logo" />

        <a
          href="https://www.google.com/maps/place/Ent.+Club+Portugu%C3%A9s,+Ciudad+Guayana+8050,+Bol%C3%ADvar/@8.2838919,-62.7101315,17z/data=!3m1!4b1!4m6!3m5!1s0x8dcbfbbf6ceb45c7:0x7f16ec8beade1d1f!8m2!3d8.2838866!4d-62.7075566!16s%2Fg%2F11hzxjcpdd?hl=pt-PT&entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noreferrer"
          className="text-center px-4 py-2 bg-amber-900 rounded-xl text-base roboto-bold"
        >
          Ver ubicación
        </a>

        <p className="text-amber-900 atma-semibold mt-4">
          Vestimenta:
          <span className="roboto-bold text-xl text-white ml-3">CASUAL</span>
        </p>

        <a
          href="https://wa.link/a2x24y"
          target="_blank"
          rel="noreferrer"
          className="text-center px-4 py-2 bg-amber-900 rounded-xl text-base roboto-bold flex justify-center items-center mx-10 mt-3"
        >
          Confirma tu asistencia aquí
          <img src={whatsapp} alt="whatsapp icon" className="w-6 ml-3" />
        </a>

        <p className="atma-semibold my-4 text-lg text-shadow">
          Por favor confirmar su asistencia antes del viernes 29/11/2024.
        </p>
        <p className="atma-semibold my-4 text-lg text-shadow">
          ¡Estaremos felices de contar con tu presencia!
        </p>
      </div>
    </div>
  );
}

export default App;
