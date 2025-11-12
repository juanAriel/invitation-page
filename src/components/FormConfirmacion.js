import React from "react";
import emailJs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function FormConfirmacion() {
  const [formData, setFormData] = React.useState({
    nombre: "",
    celular: "",
    asistencia: "si",
    acompanante: "no",
    cantidadAcompanantes: "",
  });
  const [isSending, setIsSending] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);

    Swal.fire({
      title: "Enviando tu confirmación...",
      text: "Por favor espera un momento.",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
      customClass: {
        popup: "w-[90%] sm:w-[400px]",
      },
    });

    const message = `
  Confirmación de asistencia

  Nombre: ${formData.nombre}
  Celular: ${formData.celular}
  Asistencia: ${
    formData.asistencia === "si" ? "Sí asistiré" : "No podré asistir"
  }
  ${
    formData.asistencia === "si"
      ? formData.acompanante === "si"
        ? `Vendrá con ${formData.cantidadAcompanantes} acompañante(s)`
        : "Asistirá sin acompañante"
      : ""
  }`;

    emailJs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          message: message,
          nombre: formData.nombre,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("enviado con exito");
          Swal.fire({
            title: "¡Gracias por confirmar!",
            text: "Tu confirmación se ha enviado con éxito.",
            icon: "success",
            confirmButtonColor: "#facc15",
            background: "#0a1444",
            color: "#fff",
            customClass: {
              popup: "w-[90%] sm:w-[400px]",
            },
          }).then(() => setIsSending(false));
          setFormData({
            nombre: "",
            celular: "",
            asistencia: "si",
            acompanante: "no",
            cantidadAcompanantes: "",
          });
        },
        (error) => {
          console.error("Error al enviar:", error);
          Swal.fire({
            title: "Oops...",
            text: "Ocurrió un error al enviar el formulario. Intenta de nuevo.",
            icon: "error",
            confirmButtonColor: "#f87171",
            background: "#0a1444",
            color: "#fff",
            customClass: {
              popup: "w-[90%] sm:w-[400px]",
            },
          }).then(() => setIsSending(false));
        }
      );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 md:w-1/2 order-2 md:order-1"
    >
      <div>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={formData.nombre}
          onChange={handleChange}
          required
          className="p-2 w-full rounded border border-gray-300 focus:ring-2 focus:ring-pacay outline-none"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-3">
        <input
          type="number"
          name="celular"
          placeholder="Celular"
          value={formData.celular}
          onChange={handleChange}
          required
          className="p-2 flex-1 rounded border border-gray-300 focus:ring-2 focus:ring-pacay outline-none"
        />
        <select
          name="asistencia"
          value={formData.asistencia}
          onChange={handleChange}
          className="p-2 flex-1 rounded border border-gray-300 focus:ring-2 focus:ring-pacay outline-none"
        >
          <option value="si">Asistiré</option>
          <option value="no">No podré asistir</option>
        </select>
      </div>

      {formData.asistencia === "si" && (
        <div className="flex flex-col md:flex-row gap-3">
          <select
            name="acompanante"
            value={formData.acompanante}
            onChange={handleChange}
            className="p-2 flex-1 rounded border border-gray-300 focus:ring-2 focus:ring-pacay outline-none"
          >
            <option value="no">Sin acompañante</option>
            <option value="si">Con acompañante</option>
          </select>

          {formData.acompanante === "si" && (
            <input
              type="number"
              name="cantidadAcompanantes"
              placeholder="Cantidad de acompañantes"
              value={formData.cantidadAcompanantes}
              onChange={handleChange}
              className="p-2 flex-1 rounded border border-gray-300 focus:ring-2 focus:ring-pacay outline-none"
            />
          )}
        </div>
      )}

      <button
        type="submit"
        disabled={isSending}
        className={`bg-yellow-400 text-[#0a1444] rounded-lg py-2 font-semibold transition mt-2 ${
          isSending
            ? "opacity-60 cursor-not-allowed"
            : "hover:bg-yellow-600 cursor-pointer"
        }`}
      >
        {isSending ? "Enviando..." : "Confirmar asistencia"}
      </button>
    </form>
  );
}
