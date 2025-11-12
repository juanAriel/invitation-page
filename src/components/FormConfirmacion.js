import React from "react";

export default function FormConfirmacion() {
  const [acompanante, setAcompanante] = React.useState("no");
  const [formData, setFormData] = React.useState({
    nombre: "",
    celular: "",
    asistencia: "si",
    acompanante: "no",
    cantidadAcompanantes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "acompanante") setAcompanante(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 md:w-1/2 order-2 md:order-1"
    >
      {/* Nombre completo */}
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

        {acompanante === "si" && (
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

      <button
        type="submit"
        className="bg-yellow-400 text-[#0a1444] rounded-lg py-2 font-semibold hover:bg-yellow-600 transition mt-2"
      >
        Confirmar asistencia
      </button>
    </form>
  );
}
