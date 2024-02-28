import Image from "next/image"
import Layout from "../components/layout"
import styles from "../styles/nosotros.module.css"

const Nosotros = () => {
    return (
        <Layout
            tittle={"Nosotros"}
            description={"Sobre nosotros, guitarLA, tienda de música"}
        >
            <main className="contenedor">
                <h1 className="heading">Nosotros</h1>

                <div className={styles.contenido}>
                    <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros" priority={true}/>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique, nibh vel sagittis rutrum, orci nibh pretium ipsum, ac facilisis dolor mi volutpat dui. Nulla facilisi. Mauris convallis diam ligula, ut auctor ex tincidunt sit amet. Sed laoreet lorem non nibh sodales dapibus. Suspendisse sagittis urna et blandit rutrum. Donec a sem eros. Morbi a tincidunt lorem, et pulvinar purus.</p>
                        <p>Pellentesque sed turpis vel arcu volutpat viverra eu nec nunc. Pellentesque scelerisque quis est sit amet finibus. Fusce nec aliquet lacus, nec porttitor nisl. Nulla tincidunt neque lacus, a imperdiet risus egestas vitae. Suspendisse potenti. Praesent elit metus, condimentum vitae orci vitae, aliquet sagittis diam. Quisque quis mi quis massa mollis porttitor sit amet sed diam. Proin vitae massa ac risus venenatis luctus sit amet ac tellus.</p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Nosotros