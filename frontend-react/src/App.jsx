import { useState } from 'react'
import Navbar from './Navbar.jsx'
import ProductCard from './ProductCard.jsx'
import Footer from './Footer.jsx'

const productos = [
  {
    nombre: "Mouse Inalambrico",
    descripcion: "Mouse ergonòmico, conexiòn Bluetooth",
    precio: "$89.900",
    imagen: "https://placehold.co/300x200",
    stock: 12,
  },
  {
    nombre: "Teclado Mecánico",
    descripcion: "Switches azules, retroiluminado RGB",
    precio: "$149.900",
    imagen: "https://placehold.co/300x200",
    stock: 6,
  },
  {
    nombre: "Monitor 24\"",
    descripcion: "Full HD, 75Hz panel IPS",
    precio: "$899.900",
    imagen: "https://placehold.co/300x200",
    stock: 5,
  },
  {
    nombre: "Audífonos Bluetooth",
    descripcion: "Cancelación de ruido, 20h de bateria",
    precio: "$199.900",
    imagen: "https://placehold.co/300x200",
    stock: 10,
  },
]

function App() {
  const [busqueda, setBusqueda] = useState("")

  return (
    <main className="min-h-screen max-w-6xl mx-auto px-6 py-10 flex flex-col justify-between gap-10 ">

    <Navbar />
    <div className="flex items-center gap-3">
    <input
      type="text"
      placeholder="Buscar producto..."
      value={busqueda}
      onChange={(e) => setBusqueda(e.target.value)}
      className="w-full max-w-md px-4 py-2 border-2 border-slate-200 rounded-lg"
    />
    <p className="text-slate-400 text-sm">
      {productos.filter((p) => p.nombre.toLowerCase().includes(busqueda.toLowerCase())).length} producto(s) encontrado(s)
    </p>
  </div>

    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {productos
      .filter((p) => p.nombre.toLowerCase().includes(busqueda.toLowerCase()))
      .map((p) => (
        <ProductCard
          key={p.nombre}
          nombre={p.nombre}
          descripcion={p.descripcion}
          precio={p.precio}
          imagen={p.imagen}
          stock={p.stock}
        />
      ))}
    </section>

    {productos.filter((p) => p.nombre.toLowerCase().includes(busqueda.toLowerCase())).length === 0 && (
      <p className="text-center text-texto-dim py-10">
        No se encontraron productos con ese nombre.
      </p>
    )}

      <Footer/>

    </main>
  )
}

export default App