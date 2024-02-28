import Layout from "../components/layout"
import Guitarra from "../components/guitarra"
import styles from "../styles/grid.module.css"

// Desde el componente princial se puede recuperar la información de getServerSideProps() o getStaticProps() vía el objeto "props"
const Tienda = ({ guitarras }) => {

    return (
        <Layout
            tittle={"Tienda Virtual"}
            description={"Tienda virtual, venta de guitarras, instrumentos, GuitarLA"}
        >
            <main className="contenedor">
                <h1 className="heading">Nuestra colección</h1>

                <div className={styles.grid}>
                    { guitarras?.map(guitarra => (
                    <Guitarra
                        key={guitarra.id}
                        guitarra={guitarra.attributes}
                    />
                    ))}
                </div>
                
            </main>
        </Layout>
    )
}

export default Tienda

/* Funciones de llamado de API de Next.js */

// Funcion para consulta de "información dinamica" (para sitios web donde la información cambia rápido)
export async function getServerSideProps () {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
    const { data: guitarras } = await respuesta.json()

    return {
        props: {
            guitarras
        }
    }
}

// Funcion para consulta de "información Estatica" (para sitios web donde no cambia la información muy seguido)
// export async function getStaticProps () {
//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=image`)
//     const { data: guitarras } = await respuesta.json()

//     return {
//         props: {
//             guitarras
//         }
//     }
// }