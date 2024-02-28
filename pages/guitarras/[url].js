import { useState } from "react"
import Image from "next/image"
import styles from "../../styles/guitarras.module.css"
import Layout from "../../components/layout"

const Producto = ({ guitarra, agregarCarrito }) => {
    const [cantidad, setCantidad] = useState(0)
    const { nombre, descripcion, imagen, precio } = guitarra[0].attributes

    const handleSubmit = e => {
        e.preventDefault()

        if (cantidad < 1) {
            alert("Cantidad no válida")
            return null
        }

        // Construir objeto
        const guitarraSeleccionada = {
            id: guitarra[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }

        // Pasando la información al Context
        agregarCarrito(guitarraSeleccionada)
    }

    return (
        <Layout
            tittle={`Guitarra ${nombre}`}
        >
            <div className={styles.guitarra}>
                <Image src={imagen.data.attributes.url} width={600} height={400} alt={`Imagen Guitarra ${nombre}`} priority={true}/>

                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>${precio}</p>

                    <form
                        className={styles.formulario}
                        onSubmit={handleSubmit}
                    >
                        <label htmlFor="cantidad">Cantidad:</label>

                        <select
                            id="cantidad"
                            onChange={e => setCantidad(+e.target.value)}
                        >
                            <option value="0">-- Seleccione --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                        <input
                            type="submit"
                            value="Agregar a carrito"
                            />
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Producto

/* Funciones de llamado de API de Next.js */
export async function getStaticPaths() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
    const { data } = await respuesta.json()

    const paths = data.map(guitarra => ({
        params: {
            url: guitarra.attributes.url
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { url } }) {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    const { data: guitarra } = await respuesta.json()

    return {
        props: {
            guitarra
        }
    }
}


// Para obtener datos de la ruta de la página web en el llamado API de getServerSideProps(), por defecto ya tiene valores, un valor importante es el de "query" que ya tiene la url
// Si se coloca query: { url } se puede destructurar url del objeto de los datos de getServerSideProps()
// export async function getServerSideProps({ query: { url } }) {
//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
//     const { data: guitarra } = await respuesta.json()

//     return {
//         props: {
//             guitarra
//         }
//     }
// }