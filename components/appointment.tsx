'use client';

import { useState } from 'react';

export default function ScheduleAppointment() {
  const [form, setForm] = useState({ name: '', email: '', date: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', form);
    // Aquí podrías hacer un fetch o llamada a una API
  };

  return (
    <div className="bg-yellow-400 text-gray-900 py-16 px-6 sm:px-12">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Agenda tu cita</h2>
        <p className="mb-8 text-gray-800">Déjanos tus datos y nos pondremos en contacto contigo para coordinar la visita.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
          />

          <button
            type="submit"
            className="w-full bg-gray-900 text-yellow-400 hover:bg-gray-800 rounded-md px-4 py-2 font-semibold transition"
          >
            Agendar cita
          </button>
        </form>
      </div>
    </div>
  );
}
