'use client'

import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    // Prevenimos que la página se refresque al enviar el formulario
    event.preventDefault();

    // Obtenemos el valor del input
    const query = event.currentTarget.query.value;

    // Redireccionamos al index con una query
    router.push(`/?q=${query}`);
  }

  return (
    <form onSubmit={handleSubmit} className="inline-flex gap-2 mb-4">
      {/* Inicializamos el input para que contenga el valor actual de la query */}
      <input defaultValue={searchParams.get('q') || ''} className="px-2" name="query" />
      <button type="submit" className="p-2 bg-white/20">Search</button>
    </form>
  );
}