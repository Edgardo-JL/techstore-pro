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
  return (
    <main className="min-h-screen max-w-6xl mx-auto px-6 py-10 flex flex-col justify-between gap-10 ">

    <Navbar />

    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {productos.map((p) => (
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

      <Footer/>

    </main>
  )
}

export default App